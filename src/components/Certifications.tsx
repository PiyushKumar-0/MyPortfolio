import React, { useState } from 'react';

interface CredentialDetail {
  issuer: string;
  title: string;
  sub: string;
  tags: string;
  badge: string;
  badgeColor: string;
  icon: string;
  summary: string;
  skillsVerified: string[];
}

export const Certifications: React.FC = () => {
  const [selectedCred, setSelectedCred] = useState<CredentialDetail | null>(null);

  const credentials: CredentialDetail[] = [
    {
      issuer: 'INFOSYS',
      title: 'Java Fundamentals',
      sub: 'Infosys Springboard',
      tags: 'OOP • CORE JAVA',
      badge: 'VERIFIED',
      badgeColor: 'text-[#00f0ff] border-[#00f0ff]/40',
      icon: 'verified',
      summary: 'Comprehensive evaluation of Java Virtual Machine mechanics, class structures, memory models, multithreading, and OOP design patterns.',
      skillsVerified: ['Core Java', 'Polymorphism & Inheritance', 'Exception Handling', 'JVM Memory Management'],
    },
    {
      issuer: 'SKDEFT',
      title: 'AI / ML Certification',
      sub: 'SKDeft Technologies',
      tags: 'NUMPY • ML MODELS',
      badge: 'VERIFIED',
      badgeColor: 'text-[#00f0ff] border-[#00f0ff]/40',
      icon: 'verified',
      summary: 'Practical training covering applied machine learning, statistical regressions, exploratory data analysis with Pandas, and algorithmic models.',
      skillsVerified: ['NumPy & Pandas', 'Supervised Learning', 'Model Evaluation & Cross-validation', 'Data Wrangling'],
    },
    {
      issuer: 'SKDEFT',
      title: 'Full Stack Web Dev',
      sub: 'SKDeft Technologies',
      tags: 'REACT • NODE • DB',
      badge: 'VERIFIED',
      badgeColor: 'text-[#00f0ff] border-[#00f0ff]/40',
      icon: 'verified',
      summary: 'End-to-end development of modern web applications, state management, REST API orchestration, and full-stack integration.',
      skillsVerified: ['React SPA Architecture', 'Node.js Express', 'RESTful Endpoints', 'Database Schema Wiring'],
    },
    {
      issuer: 'SKDEFT',
      title: 'Web Development',
      sub: 'SKDeft Technologies',
      tags: 'FRONTEND • JS',
      badge: 'VERIFIED',
      badgeColor: 'text-[#00f0ff] border-[#00f0ff]/40',
      icon: 'verified',
      summary: 'Fundamental web programming principles, responsive CSS layouts, DOM events, and modern JavaScript syntax.',
      skillsVerified: ['HTML5 Semantic Markup', 'Modern CSS & Flexbox/Grid', 'ES6+ JavaScript', 'DOM Manipulation'],
    },
    {
      issuer: 'JP MORGAN CHASE',
      title: 'Software Architecture',
      sub: 'Forage Virtual Simulation',
      tags: 'SYSTEMS DESIGN',
      badge: 'CREDENTIAL',
      badgeColor: 'text-[#ddb8ff] border-[#ddb8ff]/40',
      icon: 'verified',
      summary: 'Simulation exploring enterprise software architecture, system trade-offs, service decomposition, and financial-grade resilience.',
      skillsVerified: ['Distributed Architecture', 'High Availability Design', 'Data Flow Component Mapping', 'Performance Tradeoffs'],
    },
    {
      issuer: 'DELOITTE',
      title: 'Cyber Security',
      sub: 'Forage Virtual Simulation',
      tags: 'THREAT FORENSICS',
      badge: 'CREDENTIAL',
      badgeColor: 'text-[#ddb8ff] border-[#ddb8ff]/40',
      icon: 'verified',
      summary: 'Virtual job simulation evaluating security operations center alerts, threat vector identification, log forensics, and vulnerability triage.',
      skillsVerified: ['Network Log Forensics', 'Attack Surface Analysis', 'Security Information Systems', 'Governance Standards'],
    },
    {
      issuer: 'TATA',
      title: 'GenAI Data Analytics',
      sub: 'Forage Virtual Simulation',
      tags: 'INSIGHT EXTRACTION',
      badge: 'CREDENTIAL',
      badgeColor: 'text-[#ffb703] border-[#ffb703]/40',
      icon: 'verified',
      summary: 'Applied artificial intelligence prompts and predictive analytical pipelines to extract strategic insights from raw enterprise datasets.',
      skillsVerified: ['Prompt Engineering for Analytics', 'Executive Insight Generation', 'Pattern Identification', 'Business Intelligence'],
    },
    {
      issuer: 'HACKATHON',
      title: 'Team Lead Recognition',
      sub: 'MindMatrix / SafeRoute India',
      tags: 'LEADERSHIP',
      badge: 'VERIFIED',
      badgeColor: 'text-[#ff2a85] border-[#ff2a85]/50',
      icon: 'emoji_events',
      summary: 'Recognized for outstanding leadership, rapid agile sprint management, and successful full-stack delivery of the SafeRoute India civic project.',
      skillsVerified: ['Squad Technical Direction', 'Hackathon Sprint Pitching', 'Git Branch Management', 'Rapid Prototyping'],
    },
  ];

  return (
    <section id="certifications" className="relative w-full py-16 lg:py-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[2px] bg-[#00f0ff]" />
          <span className="font-mono-code text-[11px] text-[#00f0ff] tracking-widest uppercase font-semibold">
            Authenticity Verified
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[#e1e1f1] font-bold tracking-tight">
          Certifications &amp; Credentials
        </h2>
        <p className="text-sm sm:text-base text-[#83948f]">
          Real-world simulations, course certifications, and skill accreditations.
        </p>
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {credentials.map((cred) => (
          <div
            key={cred.title + cred.issuer}
            onClick={() => setSelectedCred(cred)}
            className="group bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-5 border border-[#3a4a46]/25 hover:border-[#00f0ff]/50 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-code text-[11px] text-[#00f0ff] font-semibold tracking-wider">
                  {cred.issuer}
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#00f0ff] group-hover:scale-110 transition-transform">
                  {cred.icon}
                </span>
              </div>
              <h4 className="font-display text-base font-bold text-[#e1e1f1] group-hover:text-white transition-colors">
                {cred.title}
              </h4>
              <p className="font-mono-code text-xs text-[#83948f] mt-1">{cred.sub}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#3a4a46]/20 font-mono-code text-[11px] text-[#b9cac4] flex items-center justify-between">
              <span>{cred.tags}</span>
              <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${cred.badgeColor}`}>
                {cred.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Credential Inspector Modal */}
      {selectedCred && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCred(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#11131d] border border-[#00f0ff]/50 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="font-mono-code text-[11px] text-[#00f0ff] font-bold uppercase tracking-wider">
                  {selectedCred.issuer} // CREDENTIAL_RECORD
                </span>
                <h3 className="font-display text-xl font-bold text-[#e1e1f1] mt-1">
                  {selectedCred.title}
                </h3>
                <p className="text-sm text-[#ddb8ff]">{selectedCred.sub}</p>
              </div>
              <button
                onClick={() => setSelectedCred(null)}
                className="w-8 h-8 rounded-lg bg-[#191b26] text-[#83948f] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-sm text-[#b9cac4] leading-relaxed mb-4">
              {selectedCred.summary}
            </p>

            <div className="bg-[#191b26] rounded-xl p-4 border border-[#3a4a46]/30 mb-5">
              <span className="font-mono-code text-[10px] text-[#83948f] uppercase block mb-2">
                VERIFIED SKILLS &amp; COMPETENCIES
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCred.skillsVerified.map((sk) => (
                  <span
                    key={sk}
                    className="px-2.5 py-1 rounded bg-[#11131d] border border-[#00f0ff]/30 text-xs font-mono-code text-[#00f0ff]"
                  >
                    ✓ {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="font-mono-code text-[11px] text-[#83948f]">
                STATUS: {selectedCred.badge}
              </span>
              <button
                onClick={() => setSelectedCred(null)}
                className="px-4 py-2 rounded-lg bg-[#00f0ff] text-[#00382f] font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-[#26fedc] transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
