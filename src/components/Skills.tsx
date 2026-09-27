import React, { useState } from 'react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterMatches = (text: string) => {
    if (!searchQuery.trim()) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase().trim());
  };

  return (
    <section id="skills" className="relative w-full py-16 lg:py-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#00f0ff]" />
            <span className="font-mono-code text-[11px] text-[#00f0ff] tracking-widest uppercase font-semibold">
              Technical Arsenal
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#e1e1f1] font-bold tracking-tight">
            Verified Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-[#83948f]">
            Strictly calibrated proficiencies based on hands-on codebase execution, hackathons, and certified training.
          </p>
        </div>

        {/* Live Filter / Quick Lookup */}
        <div className="relative min-w-[240px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#83948f]">
            <span className="material-symbols-outlined text-[18px]">search</span>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Java, React)..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#191b26] border border-[#3a4a46]/40 text-xs font-mono-code text-[#e1e1f1] placeholder:text-[#83948f] focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#83948f] hover:text-[#00f0ff]"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Categorized Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Programming Languages */}
        <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#00f0ff]/50 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#3a4a46]/20 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f0ff] text-[20px]">code</span>
                <h3 className="font-display text-lg text-[#e1e1f1] font-semibold">Languages</h3>
              </div>
              <span className="font-mono-code text-[11px] text-[#83948f]">4 CORE</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Java (Intermediate)', highlight: 'border-[#00f0ff]/40 text-[#e1e1f1]', dot: 'bg-[#00f0ff]' },
                { name: 'Python (Basic)', highlight: 'border-[#a855f7]/40 text-[#e1e1f1]', dot: 'bg-[#a855f7]' },
                { name: 'C Language', highlight: 'border-[#3a4a46]/30 text-[#b9cac4]' },
                { name: 'C++', highlight: 'border-[#3a4a46]/30 text-[#b9cac4]' },
              ].map((skill) => {
                const matches = filterMatches(skill.name);
                return (
                  <div
                    key={skill.name}
                    className={`px-3.5 py-1.5 rounded-lg bg-[#1d1f2a] border font-mono-code text-xs flex items-center gap-2 transition-all ${
                      skill.highlight
                    } ${matches ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                  >
                    {skill.dot && <span className={`w-2 h-2 rounded-full ${skill.dot}`} />}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#3a4a46]/15 font-mono-code text-[10px] text-[#83948f]">
            OBJECT-ORIENTED &amp; LOW-LEVEL FOUNDATIONS
          </div>
        </div>

        {/* 2. Web Development */}
        <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#a855f7]/50 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#3a4a46]/20 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ddb8ff] text-[20px]">web</span>
                <h3 className="font-display text-lg text-[#e1e1f1] font-semibold">Web Development</h3>
              </div>
              <span className="font-mono-code text-[11px] text-[#83948f]">FRONTEND + RUNTIMES</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { name: 'HTML5' },
                { name: 'CSS3' },
                { name: 'JavaScript (Basic)' },
                { name: 'TypeScript (Beginner)' },
                { name: 'React', active: true },
                { name: 'Node.js' },
                { name: 'Tailwind CSS' },
              ].map((skill) => {
                const matches = filterMatches(skill.name);
                return (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 rounded bg-[#1d1f2a] border font-mono-code text-xs transition-all ${
                      skill.active
                        ? 'border-[#00f0ff]/40 text-[#00f0ff] font-semibold shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                        : 'border-[#3a4a46]/30 text-[#e1e1f1]'
                    } ${matches ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#3a4a46]/15 font-mono-code text-[10px] text-[#83948f]">
            RESPONSIVE SPAS &amp; COMPONENT ARCHITECTURES
          </div>
        </div>

        {/* 3. AI, ML & Data */}
        <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#00f0ff]/50 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#3a4a46]/20 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f0ff] text-[20px]">neurology</span>
                <h3 className="font-display text-lg text-[#e1e1f1] font-semibold">AI, ML &amp; Data</h3>
              </div>
              <span className="font-mono-code text-[11px] text-[#00f0ff]">DATA_SCIENCE</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { name: 'NumPy', color: 'border-[#00f0ff]/35 text-[#00f0ff]' },
                { name: 'Pandas', color: 'border-[#00f0ff]/35 text-[#00f0ff]' },
                { name: 'NLP Fundamentals', color: 'border-[#3a4a46]/30 text-[#e1e1f1]' },
                { name: 'Streamlit', color: 'border-[#ff2a85]/40 text-[#ff2a85] font-semibold' },
                { name: 'Scikit-Learn Basics', color: 'border-[#3a4a46]/30 text-[#e1e1f1]' },
                { name: 'OpenCV (Haar Cascades)', color: 'border-[#3a4a46]/30 text-[#e1e1f1]' },
              ].map((skill) => {
                const matches = filterMatches(skill.name);
                return (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 rounded bg-[#1d1f2a] border font-mono-code text-xs transition-all ${
                      skill.color
                    } ${matches ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#3a4a46]/15 font-mono-code text-[10px] text-[#83948f]">
            PREDICTIVE MODELING &amp; VISION ALGORITHMS
          </div>
        </div>

        {/* 4. Databases & Storage */}
        <div className="bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#a855f7]/50 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#3a4a46]/20 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ddb8ff] text-[20px]">database</span>
                <h3 className="font-display text-lg text-[#e1e1f1] font-semibold">Databases &amp; Storage</h3>
              </div>
              <span className="font-mono-code text-[11px] text-[#83948f]">RDBMS</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'MySQL', icon: 'table_chart', iconColor: 'text-[#ddb8ff]', border: 'border-[#a855f7]/30' },
                { name: 'Relational DBMS Principles', icon: 'hub', iconColor: 'text-[#83948f]', border: 'border-[#3a4a46]/30' },
                { name: 'JDBC Connector', icon: 'link', iconColor: 'text-[#83948f]', border: 'border-[#3a4a46]/30' },
              ].map((skill) => {
                const matches = filterMatches(skill.name);
                return (
                  <div
                    key={skill.name}
                    className={`px-3.5 py-1.5 rounded-lg bg-[#1d1f2a] border font-mono-code text-xs text-[#e1e1f1] flex items-center gap-2 transition-all ${
                      skill.border
                    } ${matches ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                  >
                    <span className={`material-symbols-outlined text-[16px] ${skill.iconColor}`}>
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#3a4a46]/15 font-mono-code text-[10px] text-[#83948f]">
            SCHEMA DESIGN, TRANSACTIONS &amp; CRUD PIPELINES
          </div>
        </div>

        {/* 5. Tools, Environments & Cloud Deployment (Spans 2 cols on lg) */}
        <div className="lg:col-span-2 bg-[#11131d]/90 backdrop-blur-xl rounded-xl p-6 border border-[#3a4a46]/30 hover:border-[#00f0ff]/50 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#3a4a46]/20 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f0ff] text-[20px]">construction</span>
                <h3 className="font-display text-lg text-[#e1e1f1] font-semibold">
                  Tools, Environments &amp; Cloud Deployment
                </h3>
              </div>
              <span className="font-mono-code text-[11px] text-[#83948f]">DEV_OPS • TOOLING</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Git & GitHub', icon: 'merge_type', iconColor: 'text-[#00f0ff]' },
                { name: 'VS Code', icon: 'terminal', iconColor: 'text-[#ddb8ff]' },
                { name: 'Google Colab', icon: 'cloud', iconColor: 'text-[#00f0ff]' },
                { name: 'Jupyter Notebook', icon: 'menu_book', iconColor: 'text-[#ddb8ff]' },
                { name: 'Vercel', icon: 'rocket', iconColor: 'text-[#ff2a85]' },
                { name: 'Netlify', icon: 'language', iconColor: 'text-[#83948f]' },
                { name: 'Render', icon: 'memory', iconColor: 'text-[#83948f]' },
                { name: 'Streamlit Cloud', icon: 'speed', iconColor: 'text-[#00f0ff]' },
              ].map((tool) => {
                const matches = filterMatches(tool.name);
                return (
                  <div
                    key={tool.name}
                    className={`p-2.5 bg-[#1d1f2a] rounded-lg border border-[#3a4a46]/25 flex items-center gap-2 transition-all hover:border-[#00f0ff]/40 ${
                      matches ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[16px] ${tool.iconColor}`}>
                      {tool.icon}
                    </span>
                    <span className="font-mono-code text-xs text-[#e1e1f1] truncate">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#3a4a46]/15 font-mono-code text-[10px] text-[#83948f] flex items-center justify-between">
            <span>VERSION CONTROL • CLOUD WORKFLOWS • CI/CD PRODUCTION RUNTIMES</span>
            <span className="text-[#00f0ff]">8 TOOLSETS VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
