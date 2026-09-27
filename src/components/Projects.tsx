import React, { useState } from 'react';
import { ArchitectureModal } from './ArchitectureModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'web-dev' | 'software'>('all');
  const [archModalOpen, setArchModalOpen] = useState(false);

  const filterOptions = [
    { label: 'All', id: 'all' as const },
    { label: 'AI / ML', id: 'ai-ml' as const },
    { label: 'Web Development', id: 'web-dev' as const },
    { label: 'Software & Systems', id: 'software' as const },
  ];

  const mapBgImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8guqiFUX8xOs-q-ZqlkjIOSMIVxukZD6CLkVoA1A87cXnug6C_-PJmWLCAcvLUPrMhc7fLasYq2w3VmK7gb2JES4U4zzNK_1CujjYwn8wkqKLMqb_ylakNfxPh-P4CBlR37fho1EKFpbukBX1s8EX6tDNJNiLN_dbI9ANIYHH0GdBBbBcJ12Dbyr97_jiEJPiVAyr-E14lhx97p5-otxECI6OTrtiWnHsFhx31m3c6i4VnBH4N5Su';

  return (
    <section id="projects" className="relative w-full py-16 lg:py-24 scroll-mt-24">
      {/* Header with Filter Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#00f0ff]" />
            <span className="font-mono-code text-[11px] text-[#00f0ff] tracking-widest uppercase font-semibold">
              Portfolio Evidence
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#e1e1f1] font-bold tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-[#b9cac4] max-w-xl">
            Real live deployments and codebases demonstrating practical implementation in AI/ML, hackathons, and systems design.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#11131d]/90 backdrop-blur-md p-1.5 rounded-xl border border-[#3a4a46]/35 self-start">
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-4 py-1.5 rounded-lg font-mono-code text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#00f0ff] text-[#00382f] shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'text-[#b9cac4] hover:text-[#00f0ff]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* FLAGSHIP PROJECT 1: AI RESUME ANALYZER */}
      {(activeFilter === 'all' || activeFilter === 'ai-ml') && (
        <div className="mb-8 animate-fadeIn">
          <div className="relative bg-[#11131d]/90 backdrop-blur-xl rounded-2xl border border-[#00f0ff]/35 p-6 lg:p-8 hover:border-[#00f0ff]/60 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.65)] ring-1 ring-[#00f0ff]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Info */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 font-mono-code text-[11px] text-[#00f0ff] uppercase font-semibold">
                    Project 01 • AI / ML &amp; NLP
                  </span>
                  <span className="px-3 py-1 rounded bg-[#1d1f2a] border border-[#3a4a46]/30 font-mono-code text-[11px] text-[#83948f]">
                    LIVE PRODUCTION
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#e1e1f1] font-bold tracking-tight">
                  AI Resume Analyzer System
                </h3>

                <p className="text-base text-[#b9cac4] leading-relaxed">
                  An AI-powered resume analysis application built with Python and Streamlit that evaluates ATS compatibility, extracts key technical skills, compares resumes against target job descriptions, identifies critical skill deficits, and delivers instant optimization scoring.
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#00f0ff]/35 font-mono-code text-xs text-[#00f0ff]">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Streamlit
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    NLP Tokenizer
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Pandas
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Plotly
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <a
                    href="https://ai-resume-analyzer-system.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#00382f] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#26fedc] shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all flex items-center gap-2"
                  >
                    <span>Live Application</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>

                  <a
                    href="https://github.com/PiyushKumar-0/AI-Resume-Analyzer-System"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#191b26] border border-[#3a4a46]/35 font-mono-code text-xs text-[#e1e1f1] hover:border-[#00f0ff]/50 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setArchModalOpen(true)}
                    className="px-5 py-2.5 rounded-lg bg-[#1d1f2a] border border-[#00f0ff]/50 text-[#00f0ff] font-mono-code text-xs uppercase tracking-wider hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">schema</span>
                    <span>Inspect Architecture</span>
                  </button>
                </div>
              </div>

              {/* Right: Mock Diagnostic Runner */}
              <div className="lg:col-span-5 bg-[#191b26] rounded-xl border border-[#00f0ff]/30 p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#3a4a46]/20">
                  <span className="font-mono-code text-[11px] text-[#83948f]">
                    ATS_DIAGNOSTIC_RUNNER
                  </span>
                  <span className="font-mono-code text-[11px] text-[#00f0ff] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                    EVALUATED
                  </span>
                </div>

                {/* Score Gauge */}
                <div className="bg-[#1d1f2a] rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-mono-code text-[10px] text-[#83948f] uppercase">
                      COMPATIBILITY SCORE
                    </div>
                    <div className="font-display text-3xl font-extrabold text-[#00f0ff]">
                      88<span className="text-lg text-[#83948f] font-normal">/100</span>
                    </div>
                    <div className="font-mono-code text-[11px] text-[#ddb8ff]">
                      High Match Probability
                    </div>
                  </div>

                  <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-[#373944]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                      />
                      <path
                        className="text-[#00f0ff]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="88, 100"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                      />
                    </svg>
                    <span className="absolute font-mono-code text-xs text-[#e1e1f1] font-bold">
                      88%
                    </span>
                  </div>
                </div>

                {/* Skill Vector Extraction */}
                <div className="space-y-2">
                  <div className="flex justify-between font-mono-code text-[10px] text-[#83948f]">
                    <span>SKILL VECTOR EXTRACTION</span>
                    <span>STATUS</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#1d1f2a]/60 px-3 py-2 rounded text-xs font-mono-code">
                    <span className="text-[#e1e1f1]">Data Structures &amp; Java</span>
                    <span className="text-[#00f0ff] font-bold">100% MATCH</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#1d1f2a]/60 px-3 py-2 rounded text-xs font-mono-code">
                    <span className="text-[#e1e1f1]">Streamlit NLP Orchestration</span>
                    <span className="text-[#00f0ff] font-bold">94% MATCH</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#1d1f2a]/60 px-3 py-2 rounded text-xs font-mono-code">
                    <span className="text-[#e1e1f1]">Distributed Systems CI/CD</span>
                    <span className="text-[#ffb703] font-semibold">RECOMMENDED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLAGSHIP PROJECT 2: SAFEROUTE INDIA */}
      {(activeFilter === 'all' || activeFilter === 'web-dev') && (
        <div className="mb-8 animate-fadeIn">
          <div className="relative bg-[#11131d]/90 backdrop-blur-xl rounded-2xl border border-[#ff2a85]/40 p-6 lg:p-8 hover:border-[#ff2a85]/70 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.65)] ring-1 ring-[#ff2a85]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Info */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded bg-[#ff2a85]/15 border border-[#ff2a85]/50 font-mono-code text-[11px] text-[#ff2a85] uppercase font-semibold">
                    Project 02 • Hackathon • Team Leader (MINDMATRIX)
                  </span>
                  <span className="px-3 py-1 rounded bg-[#1d1f2a] border border-[#3a4a46]/30 font-mono-code text-[11px] text-[#83948f]">
                    COMMUNITY APPLICATION
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#e1e1f1] font-bold tracking-tight">
                  SafeRoute India
                </h3>

                <p className="text-base text-[#b9cac4] leading-relaxed">
                  A safety-focused web application designed to help users identify safer travel routes and access location-based safety diagnostics. Featuring route comparison indices, an emergency services directory, community incident reporting, and real-time administrative analytics.
                </p>

                {/* Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 bg-[#191b26] rounded-lg border border-[#ff2a85]/25 text-[11px] font-mono-code text-[#e1e1f1] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#ff2a85]">
                      explore
                    </span>
                    <span>Safety Route Map</span>
                  </div>
                  <div className="p-2.5 bg-[#191b26] rounded-lg border border-[#ff2a85]/25 text-[11px] font-mono-code text-[#e1e1f1] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#ff2a85]">
                      contact_emergency
                    </span>
                    <span>SOS Directory</span>
                  </div>
                  <div className="p-2.5 bg-[#191b26] rounded-lg border border-[#ff2a85]/25 text-[11px] font-mono-code text-[#e1e1f1] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#ff2a85]">
                      campaign
                    </span>
                    <span>Incident Reports</span>
                  </div>
                </div>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#ff2a85]/40 font-mono-code text-xs text-[#ff2a85]">
                    React
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Interactive Maps
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Vercel
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <a
                    href="https://saferouteindia.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#ff2a85] to-[#a855f7] text-white font-mono-code text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_18px_rgba(255,42,133,0.45)] transition-all flex items-center gap-2"
                  >
                    <span>View Live Deployment</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>

                  <a
                    href="https://github.com/PiyushKumar-0/Safe-Route-India"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#191b26] border border-[#3a4a46]/35 font-mono-code text-xs text-[#e1e1f1] hover:border-[#ff2a85]/60 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              {/* Right: Visual Map Viewport Mockup */}
              <div className="lg:col-span-5 bg-[#191b26] rounded-xl border border-[#ff2a85]/35 p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#3a4a46]/20">
                  <span className="font-mono-code text-[11px] text-[#83948f]">
                    GEO_SPATIAL // ROUTE_ENGINE
                  </span>
                  <span className="font-mono-code text-[11px] text-[#ff2a85] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a85]" />
                    100% ONLINE
                  </span>
                </div>

                {/* Map Location Component */}
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg relative overflow-hidden flex flex-col justify-between p-3 border border-[#3a4a46]/30 shadow-inner group"
                  style={{ backgroundImage: `url('${mapBgImage}')` }}
                >
                  <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:bg-black/20 transition-colors" />
                  <div className="relative z-10 bg-[#0b0e18]/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-code text-[#e1e1f1] self-start border border-white/10">
                    SAFE_CORRIDOR_CALCULATED
                  </div>

                  <div className="relative z-10 bg-[#0b0e18]/90 backdrop-blur-md p-2.5 rounded border border-[#ff2a85]/50 flex items-center justify-between">
                    <div>
                      <div className="font-mono-code text-[10px] text-[#83948f] uppercase">
                        PRIMARY ROUTE INDEX
                      </div>
                      <div className="font-mono-code text-sm text-[#00f0ff] font-bold">
                        96.4 Safety Score
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#ff2a85] text-[22px]">
                      verified_user
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="bg-[#1d1f2a] p-2.5 rounded-lg text-center border border-[#3a4a46]/20">
                    <span className="font-mono-code text-[10px] text-[#83948f] block uppercase">
                      STREET LIGHTING
                    </span>
                    <span className="font-mono-code text-xs text-[#e1e1f1] font-semibold">
                      High Density (89%)
                    </span>
                  </div>
                  <div className="bg-[#1d1f2a] p-2.5 rounded-lg text-center border border-[#3a4a46]/20">
                    <span className="font-mono-code text-[10px] text-[#83948f] block uppercase">
                      PATROL PROXIMITY
                    </span>
                    <span className="font-mono-code text-xs text-[#00f0ff] font-semibold">
                      &lt; 350m Station
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLAGSHIP PROJECT 3: JAL-RAKSHAK */}
      {(activeFilter === 'all' || activeFilter === 'web-dev' || activeFilter === 'ai-ml') && (
        <div className="mb-8 animate-fadeIn">
          <div className="relative bg-[#11131d]/90 backdrop-blur-xl rounded-2xl border border-[#3a4a46]/35 p-6 lg:p-8 hover:border-[#00f0ff]/50 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.65)] ring-1 ring-[#00f0ff]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Info */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 font-mono-code text-[11px] text-[#00f0ff] uppercase font-semibold">
                    Project 03 • Smart Water Hackathon • Frontend &amp; AI
                  </span>
                  <span className="px-3 py-1 rounded bg-[#1d1f2a] border border-[#3a4a46]/30 font-mono-code text-[11px] text-[#83948f]">
                    CIVIC RESILIENCE COCKPIT
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#e1e1f1] font-bold tracking-tight">
                  Jal-Rakshak — Smart Water Management &amp; Early Outbreak Warning
                </h3>

                <p className="text-base text-[#b9cac4] leading-relaxed">
                  An advanced multi-role civic resilience web application engineered for village panchayats and field workers. Features real-time groundwater telemetry, offline PWA voice reporting in local dialects, rapid field test kit diagnostics, and an AI-powered monsoon simulator for predictive outbreak prevention.
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#00f0ff]/35 font-mono-code text-xs text-[#00f0ff]">
                    React
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Vite
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Lucide
                  </span>
                  <span className="px-3 py-1 rounded bg-[#191b26] border border-[#3a4a46]/30 font-mono-code text-xs text-[#e1e1f1]">
                    Open-Meteo Weather API
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <a
                    href="https://jal-rakshak-jh8k-c9l008hxx-mind-matrix4.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#00f0ff] text-[#00382f] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#26fedc] shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all flex items-center gap-2"
                  >
                    <span>View Live Demo</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>

                  <a
                    href="https://github.com/sarvasva-dev/Jal-Rakshak"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#191b26] border border-[#3a4a46]/35 font-mono-code text-xs text-[#e1e1f1] hover:border-[#00f0ff]/50 transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right: Telemetry Resilience Node */}
              <div className="lg:col-span-5 bg-[#191b26] rounded-xl border border-[#3a4a46]/30 p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#3a4a46]/20">
                  <span className="font-mono-code text-[11px] text-[#83948f]">
                    TELEMETRY // RESILIENCE_NODE
                  </span>
                  <span className="font-mono-code text-[11px] text-[#00f0ff] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                    LIVE PIPELINE
                  </span>
                </div>

                <div className="bg-[#1d1f2a] rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-mono-code text-[10px] text-[#83948f] uppercase">
                      EARLY WARNING ADVANCE
                    </div>
                    <div className="font-display text-3xl font-extrabold text-[#00f0ff]">
                      34.2<span className="text-lg text-[#83948f] font-normal"> hrs</span>
                    </div>
                    <div className="font-mono-code text-[11px] text-[#ddb8ff]">
                      Predictive Outbreak Lead Time
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-lg bg-[#191b26] border border-[#00f0ff]/35 flex items-center justify-center text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <span className="material-symbols-outlined text-[28px]">water_drop</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono-code text-[10px] text-[#83948f]">
                    <span>DIAGNOSTIC METRIC</span>
                    <span>BENCHMARK</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#1d1f2a]/60 px-3 py-2 rounded text-xs font-mono-code">
                    <span className="text-[#e1e1f1]">Groundwater Telemetry Sync</span>
                    <span className="text-[#00f0ff] font-bold">REAL-TIME</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#1d1f2a]/60 px-3 py-2 rounded text-xs font-mono-code">
                    <span className="text-[#e1e1f1]">NDCG@5 Priority Hit Rate</span>
                    <span className="text-[#00f0ff] font-bold">91.8% ACCURACY</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#1d1f2a]/60 px-3 py-2 rounded text-xs font-mono-code">
                    <span className="text-[#e1e1f1]">Offline Voice Diagnostics</span>
                    <span className="text-[#ffb703] font-bold">LOCAL HINDI PWA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADDITIONAL VERIFIED WORK & LABS */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl sm:text-2xl text-[#e1e1f1] font-bold">
            Additional Selected Work &amp; Labs
          </h3>
          <span className="font-mono-code text-xs text-[#83948f]">// VERIFIED CODEBASES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 */}
          {(activeFilter === 'all' || activeFilter === 'ai-ml') && (
            <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-5 border border-[#3a4a46]/25 hover:border-[#00f0ff]/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#00f0ff]">ML • REGRESSION</span>
                  <span className="material-symbols-outlined text-[#83948f] text-[18px]">
                    query_stats
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#e1e1f1] mb-2">
                  Bengaluru House Price Predictor
                </h4>
                <p className="text-xs sm:text-sm text-[#b9cac4] mb-4 leading-relaxed">
                  Trained a Supervised Machine Learning regression pipeline using Pandas, Scikit-learn, and deployed via a dynamic Streamlit predictive web application.
                </p>
              </div>
              <div className="pt-3 border-t border-[#3a4a46]/15 flex items-center justify-between">
                <span className="font-mono-code text-[11px] text-[#83948f]">
                  Python • Streamlit • ML
                </span>
                <a
                  href="https://github.com/PiyushKumar-0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00f0ff] hover:underline font-mono-code text-xs flex items-center gap-1"
                >
                  <span>View Source</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          )}

          {/* Item 2 */}
          {(activeFilter === 'all' || activeFilter === 'software') && (
            <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-5 border border-[#3a4a46]/25 hover:border-[#a855f7]/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#ddb8ff]">JAVA • SYSTEMS</span>
                  <span className="material-symbols-outlined text-[#83948f] text-[18px]">
                    database
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#e1e1f1] mb-2">
                  Student Management System
                </h4>
                <p className="text-xs sm:text-sm text-[#b9cac4] mb-4 leading-relaxed">
                  Full CRUD database application built in Core Java utilizing JDBC drivers and MySQL schemas for relational storage, transaction reliability, and reporting.
                </p>
              </div>
              <div className="pt-3 border-t border-[#3a4a46]/15 flex items-center justify-between">
                <span className="font-mono-code text-[11px] text-[#83948f]">
                  Java • MySQL • JDBC
                </span>
                <a
                  href="https://github.com/PiyushKumar-0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00f0ff] hover:underline font-mono-code text-xs flex items-center gap-1"
                >
                  <span>View Source</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          )}

          {/* Item 3 */}
          {(activeFilter === 'all' || activeFilter === 'ai-ml') && (
            <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-5 border border-[#3a4a46]/25 hover:border-[#ff2a85]/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#ff2a85]">COMPUTER VISION</span>
                  <span className="material-symbols-outlined text-[#83948f] text-[18px]">
                    visibility
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#e1e1f1] mb-2">
                  Real-Time Face Detection App
                </h4>
                <p className="text-xs sm:text-sm text-[#b9cac4] mb-4 leading-relaxed">
                  Applied computer vision system utilizing Python, OpenCV, and pre-trained Haar Feature-based Cascade Classifiers for multi-face camera tracking.
                </p>
              </div>
              <div className="pt-3 border-t border-[#3a4a46]/15 flex items-center justify-between">
                <span className="font-mono-code text-[11px] text-[#83948f]">
                  Python • OpenCV • Vision
                </span>
                <a
                  href="https://github.com/PiyushKumar-0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00f0ff] hover:underline font-mono-code text-xs flex items-center gap-1"
                >
                  <span>View Source</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          )}

          {/* Item 4 */}
          {(activeFilter === 'all' || activeFilter === 'web-dev') && (
            <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-5 border border-[#3a4a46]/25 hover:border-[#ffb703]/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#ffb703]">FRONTEND WEB</span>
                  <span className="material-symbols-outlined text-[#83948f] text-[18px]">
                    shopping_bag
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#e1e1f1] mb-2">
                  E-Commerce Digital Storefront
                </h4>
                <p className="text-xs sm:text-sm text-[#b9cac4] mb-4 leading-relaxed">
                  Responsive storefront application featuring interactive cart mechanics, product catalog filtering, modal previews, and optimized checkout flow.
                </p>
              </div>
              <div className="pt-3 border-t border-[#3a4a46]/15 flex items-center justify-between">
                <span className="font-mono-code text-[11px] text-[#83948f]">HTML • CSS • JS</span>
                <a
                  href="https://github.com/PiyushKumar-0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00f0ff] hover:underline font-mono-code text-xs flex items-center gap-1"
                >
                  <span>View Source</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          )}

          {/* Item 5 */}
          {(activeFilter === 'all' || activeFilter === 'web-dev') && (
            <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-5 border border-[#3a4a46]/25 hover:border-[#a855f7]/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[11px] text-[#ddb8ff]">REACT UI</span>
                  <span className="material-symbols-outlined text-[#83948f] text-[18px]">
                    smart_display
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#e1e1f1] mb-2">
                  YouTube-Inspired Frontend
                </h4>
                <p className="text-xs sm:text-sm text-[#b9cac4] mb-4 leading-relaxed">
                  High-fidelity video streaming interface clone built with modular React components, custom video feed players, sidebar drawers, and dark mode themes.
                </p>
              </div>
              <div className="pt-3 border-t border-[#3a4a46]/15 flex items-center justify-between">
                <span className="font-mono-code text-[11px] text-[#83948f]">
                  React • Component Design
                </span>
                <a
                  href="https://github.com/PiyushKumar-0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00f0ff] hover:underline font-mono-code text-xs flex items-center gap-1"
                >
                  <span>View Source</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Architecture Modal */}
      <ArchitectureModal isOpen={archModalOpen} onClose={() => setArchModalOpen(false)} />
    </section>
  );
};
