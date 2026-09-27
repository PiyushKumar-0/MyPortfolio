import React, { useRef, useState } from 'react';

interface HeroProps {
  onExploreProjects: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onConnect }) => {
  const profileImageSrc =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYBt3zFyYPoelg1H1-Q9xVYSgBqNc9IWy2IuBYqmVADclzjF9JB7Tlk2rMSA73IGOdOnHNGA7jeX6R_qO86yHgHT6vKx_fwK5Ln_y8InDWmz3jDaJQdrtURozn0Ay-usH02bBNrEFbMRpU-fmB98YHS8RmU6KF67T0QrA4r4W9XjkTKK-UBWcjHg_4HKgC-0jWHLtPpyXoXyAZRW1yGfSfjR2FuVKULLJYi_hvXeecWIzlFxgQghR0GsBOYaF7CcM-1Q';

  // 3D Card Interactive Tilt States
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; // tilt degrees
    const rotateY = ((x - centerX) / centerX) * 14;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`,
      transition: 'transform 0.08s ease-out',
    });

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section
      id="hero"
      className="relative w-full py-12 lg:py-20 flex flex-col justify-center min-h-[calc(100vh-5rem)] scroll-mt-24"
    >
      {/* Radial Atmospheric Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00f0ff]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[480px] h-[480px] bg-[#ff2a85]/14 rounded-full blur-[160px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Copy & Interactive Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-[#11131d]/90 backdrop-blur-md border border-[#00f0ff]/40 shadow-[0_0_18px_rgba(0,240,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
            </span>
            <span className="font-mono-code text-[11px] text-[#00f0ff] uppercase font-semibold tracking-wider">
              Open to Internship Opportunities
            </span>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col gap-1">
            <p className="font-mono-code text-xs text-[#83948f] tracking-wider uppercase">
              // INIT_PORTFOLIO :: SYSTEM_ONLINE
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#e1e1f1] font-extrabold tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#ddb8ff] to-[#ff2a85]">
                Piyush Kumar
              </span>
              .
            </h1>
            <h2 className="font-display text-xl sm:text-2xl text-[#ddb8ff] font-medium tracking-tight mt-1">
              Software Developer <span className="text-[#83948f]/60 font-light">|</span> Java Developer{' '}
              <span className="text-[#83948f]/60 font-light">|</span> AI/ML Enthusiast
            </h2>
          </div>

          {/* Tagline & Context */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <p className="font-display text-lg text-[#00f0ff] font-medium leading-snug">
              Building Intelligent Solutions. Turning Ideas Into Reality.
            </p>
            <p className="text-base text-[#b9cac4] leading-relaxed">
              I'm a BCA student passionate about software engineering, Java architectures, responsive web technologies, and artificial intelligence. I build practical applications, participate in hackathons, and engineer scalable digital solutions ready for real-world impact.
            </p>
          </div>

          {/* Interactive CTA Row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#00dfc1] text-[#00382f] font-mono-code text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.65)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore My Projects</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <button
              onClick={onConnect}
              className="px-6 py-3 rounded-full bg-[#11131d]/90 backdrop-blur-md border border-[#00f0ff]/40 text-[#e1e1f1] font-mono-code text-xs uppercase tracking-wider hover:bg-[#272935] hover:border-[#00f0ff] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Let's Connect</span>
              <span className="material-symbols-outlined text-[18px] text-[#00f0ff]">send</span>
            </button>

            <div className="flex items-center gap-2 ml-auto sm:ml-0">
              <a
                href="https://github.com/PiyushKumar-0"
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="w-11 h-11 rounded-full bg-[#11131d]/90 backdrop-blur-md border border-outline-variant/40 flex items-center justify-center text-[#b9cac4] hover:text-[#00f0ff] hover:border-[#00f0ff]/70 hover:shadow-[0_0_18px_rgba(0,240,255,0.25)] hover:scale-110 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </a>

              <a
                href="https://linkedin.com/in/piyush-kumar0"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-[#11131d]/90 backdrop-blur-md border border-outline-variant/40 flex items-center justify-center text-[#b9cac4] hover:text-[#00f0ff] hover:border-[#00f0ff]/70 hover:shadow-[0_0_18px_rgba(0,240,255,0.25)] hover:scale-110 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
            </div>
          </div>

          {/* Telemetry Diagnostic Bar */}
          <div className="mt-4 pt-4 border-t border-[#3a4a46]/30 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <div className="font-mono-code text-[11px] text-[#83948f] uppercase tracking-wider">
                Current Degree
              </div>
              <div className="font-display text-base sm:text-lg text-[#e1e1f1] font-bold">
                BCA
              </div>
            </div>
            <div>
              <div className="font-mono-code text-[11px] text-[#83948f] uppercase tracking-wider">
                Academic CGPA
              </div>
              <div className="font-display text-base sm:text-lg text-[#00f0ff] font-bold">
                8.66 / 10
              </div>
            </div>
            <div>
              <div className="font-mono-code text-[11px] text-[#83948f] uppercase tracking-wider">
                Core Stacks
              </div>
              <div className="font-display text-base sm:text-lg text-[#ddb8ff] font-bold truncate">
                Java • Python • Web
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Developer Flight Deck Frame with 3D Spatial Interactive Tilt (5 Cols) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center [perspective:1000px]">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className="relative w-full max-w-[480px] bg-[#11131d]/90 backdrop-blur-xl rounded-2xl border border-[#00f0ff]/40 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.15)] ring-1 ring-[#ff2a85]/30 overflow-hidden cursor-crosshair group will-change-transform"
          >
            {/* 3D Specular Interactive Glare */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 z-30"
              style={{
                background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(0,240,255,0.25), transparent 70%)`,
                opacity: glarePos.opacity,
              }}
            />

            {/* Corner Cyber Brackets */}
            <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none z-20" />
            <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#ff2a85] pointer-events-none z-20" />
            <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#ffb703] pointer-events-none z-20" />
            <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff] pointer-events-none z-20" />

            {/* Top HUD Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#3a4a46]/30 mb-3">
              <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#83948f]">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span>BIO_TELEMETRY // ID: PK_2026</span>
              </div>
              <span className="font-mono-code text-[11px] text-[#00f0ff]">NODE_LAT: 26.4499° N</span>
            </div>

            {/* Interactive Visualizer with Piyush Kumar Portrait Profile */}
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-xl overflow-hidden bg-[#191b26] border border-[#00f0ff]/40 shadow-[0_0_25px_rgba(0,240,255,0.2)]">
              <img
                src={profileImageSrc}
                alt="Piyush Kumar - AI & Full Stack Software Developer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Cyber Overlay Elements & Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e18] via-transparent to-[#00f0ff]/10 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.04)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

              {/* Top Right Live Status Pill Overlay */}
              <div className="absolute top-3 right-3 bg-[#0b0e18]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#ff2a85]/60 flex items-center gap-2 shadow-[0_0_12px_rgba(255,42,133,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a85] opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a85]" />
                </span>
                <span className="font-mono-code text-[10px] text-[#ff2a85] font-semibold uppercase tracking-wider">
                  STATUS: ONLINE // AI DEVELOPER
                </span>
              </div>

              {/* Optical HUD Target Ring with Double Rotation */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-35">
                <div className="w-52 h-52 rounded-full border border-dashed border-[#00f0ff]/60 animate-[spin_25s_linear_infinite]" />
                <div className="absolute w-64 h-64 rounded-full border border-dotted border-[#ff2a85]/40 animate-[spin_35s_linear_infinite_reverse]" />
              </div>

              {/* Bottom HUD Badge */}
              <div className="absolute bottom-3 left-3 bg-[#0b0e18]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#00f0ff]/40 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span className="font-mono-code text-[11px] text-[#00f0ff] font-bold">
                  PIYUSH KUMAR // CORE STACK ONLINE
                </span>
              </div>
            </div>

            {/* Bottom Telemetry Chips */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-[#191b26] px-3 py-2 rounded border border-[#3a4a46]/30 flex flex-col">
                <span className="font-mono-code text-[10px] text-[#83948f] uppercase">
                  INSTITUTION
                </span>
                <span className="font-mono-code text-xs text-[#e1e1f1] font-semibold truncate">
                  VSICS, Kanpur
                </span>
              </div>
              <div className="bg-[#191b26] px-3 py-2 rounded border border-[#00f0ff]/30 flex flex-col">
                <span className="font-mono-code text-[10px] text-[#83948f] uppercase">
                  SPECIALIZATION
                </span>
                <span className="font-mono-code text-xs text-[#00f0ff] font-semibold truncate">
                  Systems &amp; AI Apps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
