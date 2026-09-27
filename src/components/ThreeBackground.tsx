import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e111a, 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, -2, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.pointerEvents = 'none';

    container.appendChild(renderer.domElement);

    const disposables: { dispose: () => void }[] = [];

    // =========================================================================
    // 2. Liquid Silk Aurora Wave (Custom GLSL Deformable Mesh)
    // =========================================================================
    // Creates a smooth, continuous 3D ribbon cloth with organic fluid flow
    const waveGeo = new THREE.PlaneGeometry(38, 26, 120, 80);
    waveGeo.rotateX(-Math.PI / 3.4);
    waveGeo.translate(0, -1.5, -2);

    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uScroll;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying float vElevation;

      void main() {
        vUv = uv;

        vec3 pos = position;

        // Soothing, organic harmonic waves (compound sine & cosine swells)
        float wave1 = sin(pos.x * 0.28 + uTime * 0.55) * cos(pos.y * 0.22 + uTime * 0.42) * 1.8;
        float wave2 = sin(pos.x * 0.45 - uTime * 0.38 + pos.y * 0.35) * 0.95;
        float wave3 = cos(pos.y * 0.55 + uTime * 0.25) * 0.65;

        // Gentle interactive mouse ripple swell
        vec2 mouseWorld = (uMouse - 0.5) * vec2(28.0, -18.0);
        float mouseDist = length(pos.xy - mouseWorld);
        float mouseWave = sin(mouseDist * 0.6 - uTime * 1.8) * exp(-mouseDist * 0.18) * 1.2;

        float totalElevation = wave1 + wave2 + wave3 + mouseWave;
        pos.z += totalElevation;

        vElevation = totalElevation;

        // Compute smooth normal approximation for silky specular gleam
        vec3 displacedNormal = normal;
        displacedNormal.x += -cos(pos.x * 0.28 + uTime * 0.55) * 0.35;
        displacedNormal.y += -sin(pos.y * 0.22 + uTime * 0.42) * 0.28;
        vNormal = normalize(normalMatrix * displacedNormal);

        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;

        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `;

    const fragmentShader = `
      precision highp float;

      uniform float uTime;
      uniform vec3 uColorBase;
      uniform vec3 uColorCyan;
      uniform vec3 uColorViolet;
      uniform vec3 uColorRose;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying float vElevation;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);

        // Iridescent Fresnel factor (glowing edges / crests)
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.8);

        // Specular highlight (soft moonlight sheen across the silk)
        vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 32.0) * 0.6;

        // Elevation-based soothing color gradient
        float t = smoothstep(-2.5, 2.5, vElevation);
        vec3 waveColor = mix(uColorBase, uColorViolet, t * 0.7);
        waveColor = mix(waveColor, uColorCyan, pow(t, 1.8) * 0.85);

        // Add soft rose accent on highest crests
        waveColor = mix(waveColor, uColorRose, smoothstep(1.6, 2.8, vElevation) * 0.35);

        // Combine base color, iridescent edge glow, and silky sheen
        vec3 finalColor = waveColor + fresnel * uColorCyan * 0.55 + spec * vec3(0.9, 0.95, 1.0);

        // Soft edge vignetting to blend seamlessly into background
        float edgeFade = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x) *
                         smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);

        float alpha = (0.45 + fresnel * 0.45) * edgeFade * 0.88;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const waveUniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 },
      uColorBase: { value: new THREE.Color(0x0c0f1a) }, // Deep obsidian velvet
      uColorCyan: { value: new THREE.Color(0x00f5d4) }, // Bioluminescent Aquamarine
      uColorViolet: { value: new THREE.Color(0x6366f1) }, // Gentle Indigo Violet
      uColorRose: { value: new THREE.Color(0xec4899) }, // Subtle Rose highlight
    };

    const waveMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: waveUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
    });

    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    scene.add(waveMesh);
    disposables.push(waveGeo, waveMat);

    // =========================================================================
    // 3. Floating Soothing Liquid Orbs (Weightless, Calming Glass Spheres)
    // =========================================================================
    interface FloatingOrb {
      mesh: THREE.Mesh;
      baseX: number;
      baseY: number;
      baseZ: number;
      speed: number;
      radius: number;
      phase: number;
      driftSpeed: number;
    }

    const orbs: FloatingOrb[] = [];
    const orbConfig = [
      { size: 2.4, x: -11, y: 3.5, z: -4, col: 0x00f5d4, op: 0.18, speed: 0.35 },
      { size: 3.2, x: 12, y: -2, z: -6, col: 0x818cf8, op: 0.15, speed: 0.28 },
      { size: 1.8, x: 8, y: 5.5, z: -3, col: 0x38bdf8, op: 0.22, speed: 0.42 },
      { size: 2.0, x: -9, y: -4.5, z: -5, col: 0xa855f7, op: 0.16, speed: 0.32 },
    ];

    orbConfig.forEach((cfg, idx) => {
      const geo = new THREE.SphereGeometry(cfg.size, 48, 48);
      // Soft translucent glowing glass material
      const mat = new THREE.MeshPhysicalMaterial({
        color: cfg.col,
        emissive: cfg.col,
        emissiveIntensity: 0.15,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.75, // Glass translucency
        transparent: true,
        opacity: cfg.op,
        wireframe: false,
      });

      const sphere = new THREE.Mesh(geo, mat);
      sphere.position.set(cfg.x, cfg.y, cfg.z);

      // Subtle delicate glowing equatorial ring around each orb
      const ringGeo = new THREE.TorusGeometry(cfg.size * 1.25, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.col,
        transparent: true,
        opacity: cfg.op * 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.6;
      sphere.add(ring);

      scene.add(sphere);
      disposables.push(geo, mat, ringGeo, ringMat);

      orbs.push({
        mesh: sphere,
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        speed: cfg.speed,
        radius: cfg.size,
        phase: idx * 1.5,
        driftSpeed: 0.008 + idx * 0.003,
      });
    });

    // =========================================================================
    // 4. Soft Ambient Bioluminescent Moten Particles (Calm, Gentle & Sparce)
    // =========================================================================
    const MOTE_COUNT = 65; // Sparse and gentle, like distant fireflies
    const moteGeo = new THREE.BufferGeometry();
    const motePositions = new Float32Array(MOTE_COUNT * 3);
    const moteColors = new Float32Array(MOTE_COUNT * 3);

    const cyanC = new THREE.Color(0x00f5d4);
    const violetC = new THREE.Color(0x818cf8);

    for (let i = 0; i < MOTE_COUNT; i++) {
      const i3 = i * 3;
      motePositions[i3] = (Math.random() - 0.5) * 36;
      motePositions[i3 + 1] = (Math.random() - 0.5) * 22;
      motePositions[i3 + 2] = (Math.random() - 0.5) * 16 - 2;

      const c = Math.random() > 0.5 ? cyanC : violetC;
      moteColors[i3] = c.r;
      moteColors[i3 + 1] = c.g;
      moteColors[i3 + 2] = c.b;
    }

    moteGeo.setAttribute('position', new THREE.BufferAttribute(motePositions, 3));
    moteGeo.setAttribute('color', new THREE.BufferAttribute(moteColors, 3));

    const moteMat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const motes = new THREE.Points(moteGeo, moteMat);
    scene.add(motes);
    disposables.push(moteGeo, moteMat);

    // =========================================================================
    // 5. Smooth, Calming Mouse & Scroll Tracking
    // =========================================================================
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let currentMouseX = 0.5;
    let currentMouseY = 0.5;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = e.clientY / window.innerHeight;
    };

    let targetScroll = 0;
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // =========================================================================
    // 6. Calming 60FPS Render Loop
    // =========================================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smoothly interpolate mouse for silky inertia
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      waveUniforms.uTime.value = elapsed;
      waveUniforms.uMouse.value.set(currentMouseX, currentMouseY);
      waveUniforms.uScroll.value = targetScroll;

      // Gentle camera parallax breathing
      camera.position.x = (currentMouseX - 0.5) * 2.2;
      camera.position.y = -2 + (currentMouseY - 0.5) * -1.6 - targetScroll * 1.5;
      camera.lookAt(0, 0, 0);

      // Weightless floating orbs with calming sinusoidal hover
      orbs.forEach((orb) => {
        const floatY = Math.sin(elapsed * orb.speed + orb.phase) * 0.75;
        const floatX = Math.cos(elapsed * orb.speed * 0.7 + orb.phase) * 0.45;
        orb.mesh.position.y = orb.baseY + floatY;
        orb.mesh.position.x = orb.baseX + floatX;
        orb.mesh.rotation.y = elapsed * orb.driftSpeed;
        orb.mesh.rotation.z = Math.sin(elapsed * 0.2 + orb.phase) * 0.15;
      });

      // Ambient motes drift slowly like dust in sunlight
      motes.rotation.y = elapsed * 0.012;
      motes.rotation.x = Math.sin(elapsed * 0.008) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {/* 3D WebGL Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Atmospheric Soft Radiant Halos (Deep, Calming & High Contrast) */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        {/* Soft cyan aura in upper quadrant */}
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00f5d4]/10 via-[#6366f1]/8 to-transparent blur-[140px] rounded-full" />
        {/* Soft violet aura in lower right */}
        <div className="absolute bottom-10 -right-20 w-[550px] h-[450px] bg-gradient-to-tl from-[#6366f1]/12 via-[#a855f7]/8 to-transparent blur-[150px] rounded-full" />
        {/* Subtle vignette for crisp typography read */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(17,19,29,0.75)_95%)]" />
      </div>
    </>
  );
};
