import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-[#3a4a46]/30 bg-[#0b0e18]/80 backdrop-blur-xl py-10 px-4 lg:px-8 mt-12 z-20">
      <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <div className="h-8 px-2 bg-[#1d1f2a] rounded-lg border border-[#00f0ff]/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.2)]">
            <span className="font-mono-code text-xs text-[#00f0ff] font-bold tracking-wider">
              PK.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold text-[#e1e1f1] leading-tight">
              Piyush Kumar
            </span>
            <span className="font-mono-code text-[10px] text-[#83948f]">
              Software Developer &bull; AI/ML Systems
            </span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 font-mono-code text-xs text-[#b9cac4]">
          <button
            onClick={() => onNavigate('hero')}
            className="hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('skills')}
            className="hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => onNavigate('certifications')}
            className="hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            Certifications
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Back to Top */}
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-[11px] text-[#83948f]">
            &copy; 2026 Piyush Kumar. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-8 h-8 rounded-lg bg-[#191b26] border border-[#3a4a46]/35 text-[#83948f] hover:text-[#00f0ff] hover:border-[#00f0ff]/50 flex items-center justify-center transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
