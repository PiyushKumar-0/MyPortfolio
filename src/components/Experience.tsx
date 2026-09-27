import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full py-16 lg:py-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[2px] bg-[#00f0ff]" />
          <span className="font-mono-code text-[11px] text-[#00f0ff] tracking-widest uppercase font-semibold">
            Practical Exposure
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#e1e1f1] font-bold tracking-tight">
          My Journey &amp; Experience
        </h2>
        <p className="text-sm sm:text-base text-[#83948f]">
          A clear, honest record separating rigorous algorithmic practice, hackathon teamwork, and industry-standard virtual job simulations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Hands-on Technical Practice */}
        <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#3a4a46]/30 flex flex-col gap-5 hover:border-[#00f0ff]/40 transition-all">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#3a4a46]/20">
            <span className="material-symbols-outlined text-[#00f0ff] text-[22px]">code_blocks</span>
            <h3 className="font-display text-lg text-[#e1e1f1] font-bold">Hands-on Practice</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/20 hover:border-[#00f0ff]/30 transition-all">
              <div className="font-display text-base text-[#e1e1f1] font-semibold">
                Algorithmic Problem Solving
              </div>
              <p className="text-sm text-[#b9cac4] mt-1.5 leading-relaxed">
                Intensive daily practice across Core Java and Python: Arrays, Recursion, Strings, Object-Oriented Principles, and Complexity Optimization.
              </p>
              <div className="mt-3 font-mono-code text-[10px] text-[#00f0ff]">
                STATUS: CONTINUOUS REPOSITORY LOGS
              </div>
            </div>

            <div className="p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/20 hover:border-[#ff2a85]/30 transition-all">
              <div className="font-display text-base text-[#e1e1f1] font-semibold">
                Hackathon Squad Leadership
              </div>
              <p className="text-sm text-[#b9cac4] mt-1.5 leading-relaxed">
                Team Leader for <span className="text-[#e1e1f1] font-medium">MindMatrix</span> during rapid hackathon sprints. Guided application architecture, Git coordination, and final product pitch for SafeRoute India.
              </p>
              <div className="mt-3 font-mono-code text-[10px] text-[#ff2a85]">
                ROLE: TEAM LEAD • FULL-STACK
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Virtual Job Simulations */}
        <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#3a4a46]/30 flex flex-col gap-5 hover:border-[#a855f7]/40 transition-all">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#3a4a46]/20">
            <span className="material-symbols-outlined text-[#ddb8ff] text-[22px]">domain</span>
            <h3 className="font-display text-lg text-[#e1e1f1] font-bold">
              Virtual Job Simulations
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/20 hover:border-[#ddb8ff]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-display text-base text-[#e1e1f1] font-semibold">
                  JPMorgan Chase &amp; Co.
                </span>
                <span className="font-mono-code text-[10px] text-[#83948f] bg-[#191b26] px-2 py-0.5 rounded border border-[#3a4a46]/30">
                  FORAGE
                </span>
              </div>
              <div className="font-mono-code text-[11px] text-[#ddb8ff] mt-0.5">
                Software Architecture Simulation
              </div>
              <p className="text-sm text-[#b9cac4] mt-2 leading-relaxed">
                Analyzed distributed enterprise architecture specifications, designed data-flow components, and addressed security &amp; performance tradeoffs.
              </p>
            </div>

            <div className="p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/20 hover:border-[#ddb8ff]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-display text-base text-[#e1e1f1] font-semibold">Deloitte</span>
                <span className="font-mono-code text-[10px] text-[#83948f] bg-[#191b26] px-2 py-0.5 rounded border border-[#3a4a46]/30">
                  FORAGE
                </span>
              </div>
              <div className="font-mono-code text-[11px] text-[#ddb8ff] mt-0.5">
                Cyber Security Simulation
              </div>
              <p className="text-sm text-[#b9cac4] mt-2 leading-relaxed">
                Explored forensic log analysis, cyber attack surface mitigation strategies, and enterprise threat governance frameworks.
              </p>
            </div>

            <div className="p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/20 hover:border-[#ffb703]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-display text-base text-[#e1e1f1] font-semibold">Tata Group</span>
                <span className="font-mono-code text-[10px] text-[#83948f] bg-[#191b26] px-2 py-0.5 rounded border border-[#3a4a46]/30">
                  FORAGE
                </span>
              </div>
              <div className="font-mono-code text-[11px] text-[#ffb703] mt-0.5">
                GenAI Powered Data Analytics
              </div>
              <p className="text-sm text-[#b9cac4] mt-2 leading-relaxed">
                Leveraged generative intelligence prompts and analytics pipelines to extract executive business insights from raw operational data.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Professional Training & Bootcamps */}
        <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#3a4a46]/30 flex flex-col gap-5 hover:border-[#00f0ff]/40 transition-all">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#3a4a46]/20">
            <span className="material-symbols-outlined text-[#00f0ff] text-[22px]">
              workspace_premium
            </span>
            <h3 className="font-display text-lg text-[#e1e1f1] font-bold">Training &amp; Bootcamps</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/20 hover:border-[#00f0ff]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-display text-base text-[#e1e1f1] font-semibold">
                  SKDeft Technologies
                </span>
                <span className="font-mono-code text-[10px] text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/30 font-bold">
                  VERIFIED
                </span>
              </div>
              <div className="font-mono-code text-[11px] text-[#b9cac4] mt-0.5">
                Full Stack Web &amp; AI/ML Training
              </div>
              <p className="text-sm text-[#b9cac4] mt-2 leading-relaxed">
                Completed structured hands-on modules in React component design, Node runtimes, machine learning data modeling with Pandas/NumPy, and API integrations.
              </p>
            </div>

            <div className="p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/20 hover:border-[#00f0ff]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-display text-base text-[#e1e1f1] font-semibold">
                  Infosys Springboard
                </span>
                <span className="font-mono-code text-[10px] text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/30 font-bold">
                  CERTIFIED
                </span>
              </div>
              <div className="font-mono-code text-[11px] text-[#b9cac4] mt-0.5">
                Java Fundamentals &amp; Object Orientation
              </div>
              <p className="text-sm text-[#b9cac4] mt-2 leading-relaxed">
                Formal certification covering JVM internal mechanics, multithreading basics, exception handling hierarchies, and structured OOP best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
