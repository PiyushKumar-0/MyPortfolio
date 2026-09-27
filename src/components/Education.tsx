import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative w-full py-16 lg:py-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[2px] bg-[#00f0ff]" />
          <span className="font-mono-code text-[11px] text-[#00f0ff] tracking-widest uppercase font-semibold">
            Academic Foundation
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#e1e1f1] font-bold tracking-tight">
          Education &amp; Core Coursework
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Primary Degree (7 Cols) */}
        <div className="lg:col-span-7 bg-[#11131d]/90 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-[#3a4a46]/30 flex flex-col justify-between hover:border-[#00f0ff]/40 transition-all shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="font-mono-code text-xs text-[#00f0ff] uppercase font-semibold">
                  Current Degree • 2024 – 2027
                </span>
                <h3 className="font-display text-2xl text-[#e1e1f1] font-bold mt-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-base text-[#ddb8ff] font-medium mt-0.5">
                  Dr. Virendra Swarup Institute Of Computer Studies (VSICS), Kanpur
                </p>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-[#1d1f2a] border border-[#00f0ff]/40 text-center shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <span className="font-mono-code text-[10px] text-[#83948f] block uppercase">
                  CURRENT CGPA
                </span>
                <span className="font-display text-2xl text-[#00f0ff] font-extrabold">8.66</span>
              </div>
            </div>

            <div className="mt-6">
              <span className="font-mono-code text-[11px] text-[#83948f] uppercase tracking-wider block mb-3">
                Rigorous Key Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Database Management Systems',
                  'Object-Oriented Programming (Java)',
                  'Operating Systems',
                  'Computer Networks',
                  'Software Engineering',
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg bg-[#1d1f2a] text-[#e1e1f1] font-mono-code text-xs border border-[#3a4a46]/30 hover:border-[#00f0ff]/40 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#3a4a46]/20 flex items-center justify-between font-mono-code text-xs text-[#83948f]">
            <span>AFFILIATION: CSJM UNIVERSITY</span>
            <span className="text-[#00f0ff] font-semibold">CONTINUOUS HONORS ENROLLED</span>
          </div>
        </div>

        {/* High School & Intermediate (5 Cols) */}
        <div className="lg:col-span-5 bg-[#11131d]/90 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-[#3a4a46]/30 flex flex-col justify-between hover:border-[#a855f7]/40 transition-all shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
          <div>
            <span className="font-mono-code text-xs text-[#ddb8ff] uppercase font-semibold">
              Higher Secondary • 2023 – 2024
            </span>
            <h3 className="font-display text-2xl text-[#e1e1f1] font-bold mt-1">
              Intermediate (Class XII)
            </h3>
            <p className="text-base text-[#b9cac4] font-medium mt-0.5">
              Mary Jesus Education Centre
            </p>

            <div className="mt-6 p-4 bg-[#1d1f2a] rounded-xl border border-[#3a4a46]/25 flex items-center justify-between shadow-inner">
              <div>
                <span className="font-mono-code text-[10px] text-[#83948f] uppercase">
                  ACADEMIC RESULT
                </span>
                <div className="font-display text-xl text-[#e1e1f1] font-bold">
                  81.0% Distinction
                </div>
              </div>
              <span className="material-symbols-outlined text-[#ffb703] text-[32px]">
                military_tech
              </span>
            </div>

            <p className="text-sm text-[#83948f] mt-4 leading-relaxed">
              Core focus in Mathematics, Computer Applications, and Physics foundations.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-[#3a4a46]/20 font-mono-code text-xs text-[#83948f]">
            <span>RECORD ID: MJEC_2024_DISTINCTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};
