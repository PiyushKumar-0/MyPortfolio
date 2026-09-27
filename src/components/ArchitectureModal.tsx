import React, { useState } from 'react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<'backend' | 'aiml' | 'fullstack'>('backend');

  if (!isOpen) return null;

  const roleProfiles = {
    backend: {
      title: 'Java Backend Engineer',
      matchScore: 92,
      matched: ['Core Java', 'OOP Principles', 'MySQL / JDBC', 'Multithreading', 'REST APIs', 'Git'],
      missing: ['Docker Containers', 'Microservices Architecture'],
      atsNotes: 'High keyword density for JVM runtime fundamentals and relational persistence.',
    },
    aiml: {
      title: 'AI / ML Engineer',
      matchScore: 84,
      matched: ['Python', 'Streamlit', 'NLP Tokenizer', 'Pandas & NumPy', 'Scikit-Learn', 'OpenCV'],
      missing: ['PyTorch Deep Learning', 'Transformer Embeddings'],
      atsNotes: 'Solid data processing pipeline match; recommended deep learning exposure.',
    },
    fullstack: {
      title: 'Full Stack Web Developer',
      matchScore: 88,
      matched: ['React', 'JavaScript / TypeScript', 'Tailwind CSS', 'Node.js', 'HTML5/CSS3', 'Vercel'],
      missing: ['Next.js SSR', 'GraphQL APIs'],
      atsNotes: 'Strong frontend component modularity with modern CSS framework agility.',
    },
  };

  const currentProfile = roleProfiles[selectedRole];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#11131d] border border-[#00f0ff]/50 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] ring-1 ring-[#ff2a85]/30 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Titlebar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#191b26] border-b border-[#3a4a46]/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
              <span className="material-symbols-outlined text-[18px]">schema</span>
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg text-[#e1e1f1] font-bold leading-tight">
                System Architecture &amp; NLP Pipeline
              </h3>
              <p className="font-mono-code text-[11px] text-[#00f0ff]">
                AI-RESUME-ANALYZER // SPECIFICATION_DIAGRAM
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-[#1d1f2a] text-[#83948f] hover:text-[#e1e1f1] hover:bg-[#272935] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Pipeline Stages Diagram */}
          <div className="bg-[#191b26]/70 rounded-xl p-5 border border-[#3a4a46]/30">
            <span className="font-mono-code text-[11px] text-[#83948f] uppercase block mb-4">
              // DATA FLOW ARCHITECTURE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                {
                  step: '01',
                  title: 'Document Ingestion',
                  desc: 'Extract raw text stream from PDF/DOCX via PyPDF2 and regex format normalizers.',
                  tag: 'PYPDF2 • REGEX',
                  color: 'border-[#00f0ff]/30 text-[#00f0ff]',
                },
                {
                  step: '02',
                  title: 'NLP Tokenization',
                  desc: 'Stopword elimination, lemmatization, and technical entity isolation.',
                  tag: 'SPACY • NLTK',
                  color: 'border-[#a855f7]/30 text-[#ddb8ff]',
                },
                {
                  step: '03',
                  title: 'Vector Cosine Match',
                  desc: 'Compute TF-IDF similarity vectors between candidate resume and target role description.',
                  tag: 'SCIKIT-LEARN',
                  color: 'border-[#ff2a85]/30 text-[#ff2a85]',
                },
                {
                  step: '04',
                  title: 'ATS Scoring Radar',
                  desc: 'Outputs match ratio, missing critical competencies, and optimization checklist.',
                  tag: 'STREAMLIT UI',
                  color: 'border-[#ffb703]/30 text-[#ffb703]',
                },
              ].map((stage) => (
                <div
                  key={stage.step}
                  className="bg-[#11131d] rounded-lg p-3.5 border border-[#3a4a46]/25 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono-code text-[10px] text-[#83948f]">
                        PHASE {stage.step}
                      </span>
                      <span className={`font-mono-code text-[9px] font-bold px-1.5 py-0.5 rounded border ${stage.color}`}>
                        {stage.tag}
                      </span>
                    </div>
                    <div className="font-display text-sm font-semibold text-[#e1e1f1] mb-1">
                      {stage.title}
                    </div>
                    <p className="text-xs text-[#b9cac4] leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Role Benchmark Simulator */}
          <div className="bg-[#191b26]/70 rounded-xl p-5 border border-[#00f0ff]/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#e1e1f1]">
                  Interactive ATS Role Simulator
                </h4>
                <p className="text-xs text-[#83948f]">
                  Select a target benchmark profile to observe the algorithm's matching heuristics.
                </p>
              </div>

              {/* Role Selector Tabs */}
              <div className="flex items-center gap-1.5 bg-[#11131d] p-1 rounded-lg border border-[#3a4a46]/30 self-start">
                {(['backend', 'aiml', 'fullstack'] as const).map((roleKey) => (
                  <button
                    key={roleKey}
                    onClick={() => setSelectedRole(roleKey)}
                    className={`px-3 py-1 text-xs font-mono-code rounded-md transition-all cursor-pointer ${
                      selectedRole === roleKey
                        ? 'bg-[#00f0ff] text-[#00382f] font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                        : 'text-[#83948f] hover:text-[#e1e1f1]'
                    }`}
                  >
                    {roleKey === 'backend' ? 'Java Backend' : roleKey === 'aiml' ? 'AI / ML' : 'Full Stack'}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#11131d] p-4 rounded-xl border border-[#3a4a46]/30">
              <div className="sm:col-span-4 flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-[#3a4a46]/25 pb-3 sm:pb-0 sm:pr-4">
                <div className="w-16 h-16 rounded-full bg-[#191b26] border-2 border-[#00f0ff] flex flex-col items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <span className="font-display text-xl font-extrabold text-[#00f0ff]">
                    {currentProfile.matchScore}%
                  </span>
                  <span className="font-mono-code text-[9px] text-[#83948f]">MATCH</span>
                </div>
                <div>
                  <div className="font-mono-code text-[11px] text-[#83948f] uppercase">
                    SIMULATED ROLE
                  </div>
                  <div className="font-display text-sm font-bold text-[#e1e1f1]">
                    {currentProfile.title}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-8 flex flex-col gap-2">
                <div>
                  <span className="font-mono-code text-[10px] text-[#00f0ff] uppercase block mb-1">
                    ✓ EXTRACTED MATCHED SKILLS ({currentProfile.matched.length})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProfile.matched.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded bg-[#191b26] border border-[#00f0ff]/30 text-[11px] font-mono-code text-[#00f0ff]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-1">
                  <span className="font-mono-code text-[10px] text-[#ffb703] uppercase block mb-1">
                    ▲ RECOMMENDED COMPETENCY DELTAS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProfile.missing.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded bg-[#191b26] border border-[#ffb703]/30 text-[11px] font-mono-code text-[#ffb703]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#83948f] italic mt-1 font-mono-code">
                  "{currentProfile.atsNotes}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#191b26] border-t border-[#3a4a46]/30">
          <span className="font-mono-code text-[11px] text-[#83948f]">
            CORE REPO: github.com/PiyushKumar-0/AI-Resume-Analyzer-System
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://ai-resume-analyzer-system.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#00f0ff] text-[#00382f] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#26fedc] transition-all flex items-center gap-1.5"
            >
              <span>Launch App</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#11131d] border border-[#3a4a46]/40 text-[#e1e1f1] font-mono-code text-xs uppercase tracking-wider hover:bg-[#272935] transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
