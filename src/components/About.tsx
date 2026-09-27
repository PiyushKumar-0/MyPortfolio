import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-16 lg:py-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[2px] bg-[#00f0ff]" />
          <span className="font-mono-code text-[11px] text-[#00f0ff] tracking-widest uppercase font-semibold">
            About Me
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#e1e1f1] font-bold tracking-tight">
          Beyond the Code.
        </h2>
        <p className="text-base sm:text-lg text-[#b9cac4] max-w-3xl mt-1 leading-relaxed">
          I'm Piyush Kumar, a Bachelor of Computer Applications student with a solid foundation in Java, Python, and modern web development. I enjoy building practical software applications, collaborating in dynamic teams, leading hackathon squads, and exploring AI-driven solutions. My goal is to grow as a software engineer by solving real-world challenges and continuously expanding my technical depth.
        </p>
      </div>

      {/* 4 Glassmorphic Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Card 1: Education */}
        <div className="group bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#00f0ff]/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.12)] hover:-translate-y-1 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-[#1d1f2a] flex items-center justify-center text-[#00f0ff] mb-4 border border-[#00f0ff]/25 group-hover:scale-105 group-hover:border-[#00f0ff]/50 transition-all">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <h3 className="font-display text-lg text-[#e1e1f1] font-semibold mb-2">
              Education
            </h3>
            <p className="text-sm text-[#b9cac4] leading-relaxed">
              BCA Student (2024–2027) at Dr. Virendra Swarup Institute Of Computer Studies.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-[#3a4a46]/20 flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-[#83948f]">CGPA</span>
            <span className="font-bold text-[#00f0ff]">8.66 / 10.0</span>
          </div>
        </div>

        {/* Card 2: Technical Focus */}
        <div className="group bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#a855f7]/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.12)] hover:-translate-y-1 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-[#1d1f2a] flex items-center justify-center text-[#ddb8ff] mb-4 border border-[#a855f7]/30 group-hover:scale-105 group-hover:border-[#a855f7]/60 transition-all">
              <span className="material-symbols-outlined text-[24px]">terminal</span>
            </div>
            <h3 className="font-display text-lg text-[#e1e1f1] font-semibold mb-2">
              Technical Focus
            </h3>
            <p className="text-sm text-[#b9cac4] leading-relaxed">
              Core Java Architecture, Object-Oriented Design, Modern Web Applications &amp; Applied AI/ML.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-[#3a4a46]/20 font-mono-code text-[11px] text-[#83948f]">
            <span>STACK: JVM • FULL-STACK • NLP</span>
          </div>
        </div>

        {/* Card 3: Core Strengths */}
        <div className="group bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#ff2a85]/50 hover:shadow-[0_10px_30px_rgba(255,42,133,0.15)] hover:-translate-y-1 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-[#1d1f2a] flex items-center justify-center text-[#ff2a85] mb-4 border border-[#ff2a85]/30 group-hover:scale-105 group-hover:border-[#ff2a85]/60 transition-all">
              <span className="material-symbols-outlined text-[24px]">groups</span>
            </div>
            <h3 className="font-display text-lg text-[#e1e1f1] font-semibold mb-2">
              Core Strengths
            </h3>
            <p className="text-sm text-[#b9cac4] leading-relaxed">
              Hackathon Team Leadership, Clear Technical Communication, and Algorithmic Execution.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-[#3a4a46]/20 font-mono-code text-[11px] text-[#83948f]">
            <span>ROLE: COLLABORATOR • LEADER</span>
          </div>
        </div>

        {/* Card 4: Career Goal */}
        <div className="group bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#ffb703]/50 hover:shadow-[0_10px_30px_rgba(255,183,3,0.15)] hover:-translate-y-1 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-[#1d1f2a] flex items-center justify-center text-[#ffb703] mb-4 border border-[#ffb703]/30 group-hover:scale-105 group-hover:border-[#ffb703]/60 transition-all">
              <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
            </div>
            <h3 className="font-display text-lg text-[#e1e1f1] font-semibold mb-2">
              Career Goal
            </h3>
            <p className="text-sm text-[#b9cac4] leading-relaxed">
              Targeting High-Impact Software Engineering &amp; Development Internship Opportunities.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-[#3a4a46]/20 font-mono-code text-[11px] text-[#ffb703] font-semibold">
            <span>ACTIVE APPLICANT</span>
          </div>
        </div>
      </div>

      {/* Interactive Journey Timeline */}
      <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-2xl border border-[#3a4a46]/35 p-6 lg:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-[#00f0ff] text-[22px]">timeline</span>
          <h3 className="font-display text-lg sm:text-xl text-[#e1e1f1] font-bold">
            Engineering Pathway Timeline
          </h3>
        </div>

        <div className="relative pl-6 md:pl-8 border-l-2 border-[#00f0ff]/40 space-y-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#11131d] border-2 border-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <span className="font-display text-base sm:text-lg text-[#e1e1f1] font-semibold">
                Intermediate (Class XII) — 81% Distinction
              </span>
              <span className="font-mono-code text-xs text-[#83948f]">2023 – 2024</span>
            </div>
            <p className="text-sm text-[#b9cac4] leading-relaxed">
              Mary Jesus Education Centre. Graduated with academic excellence in Computer Science and Mathematics, laying the algorithmic basis for systems programming.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#11131d] border-2 border-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.6)] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <span className="font-display text-base sm:text-lg text-[#e1e1f1] font-semibold">
                Started BCA • Dr. Virendra Swarup Institute of Computer Studies
              </span>
              <span className="font-mono-code text-xs text-[#00f0ff] font-semibold">
                2024 – PRESENT
              </span>
            </div>
            <p className="text-sm text-[#b9cac4] leading-relaxed">
              Pursuing Bachelor of Computer Applications while maintaining a consistent 8.66 CGPA. Core course mastery in Object-Oriented Programming, Data Structures, Relational Database Systems, and Architecture.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#11131d] border-2 border-[#ff2a85] shadow-[0_0_12px_rgba(255,42,133,0.6)] group-hover:scale-125 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <span className="font-display text-base sm:text-lg text-[#e1e1f1] font-semibold">
                Hackathon Leadership &amp; Industry Simulations
              </span>
              <span className="font-mono-code text-xs text-[#ff2a85] font-semibold">
                2024 – 2026
              </span>
            </div>
            <p className="text-sm text-[#b9cac4] leading-relaxed">
              Served as Team Leader for MindMatrix in engineering <span className="text-[#e1e1f1] font-medium">SafeRoute India</span>; co-developed the <span className="text-[#e1e1f1] font-medium">Jal-Rakshak</span> water analytics portal. Completed virtual job simulations with JP Morgan Chase, Deloitte, and Tata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
