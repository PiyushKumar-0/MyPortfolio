import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 lg:px-8 transition-all duration-300">
      <div className="max-w-[1360px] mx-auto">
        <div
          className={`w-full flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'bg-[#11131d]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] border border-[#00f0ff]/30 ring-1 ring-[#ff2a85]/20'
              : 'bg-[#11131d]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.65)] border border-[#00f0ff]/25 ring-1 ring-[#ff2a85]/15'
          }`}
        >
          {/* Brand Left */}
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick('hero', e)}
              className="group flex items-center gap-3"
            >
              <div className="h-9 px-2.5 bg-[#1d1f2a] rounded-lg border border-[#00f0ff]/40 flex items-center justify-center shadow-[0_0_18px_rgba(0,240,255,0.25)] group-hover:border-[#00f0ff] transition-colors">
                <span className="font-mono-code text-xs text-[#00f0ff] font-bold tracking-wider">
                  PK.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold text-[#e1e1f1] leading-tight tracking-tight group-hover:text-white transition-colors">
                  PIYUSH.K
                </span>
                <span className="font-mono-code text-[10px] text-[#83948f] uppercase tracking-widest">
                  AI &amp; Systems
                </span>
              </div>
            </a>

            {/* Status Pill on Desktop */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-[#191b26] rounded-full border border-[#00f0ff]/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
              </span>
              <span className="font-mono-code text-[11px] text-[#00f0ff] uppercase tracking-wider font-semibold">
                Open to Internships
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`font-mono-code text-[13px] tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#00f0ff] font-bold drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]'
                      : 'text-[#b9cac4] hover:text-[#00f0ff]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#ff2a85] rounded-full shadow-[0_0_8px_#00f0ff]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ff2a85] text-[#00201a] font-bold text-xs uppercase tracking-wider font-mono-code hover:shadow-[0_0_24px_rgba(0,240,255,0.45)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Let's Talk
            </a>

            <div
              className="w-9 h-9 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.2)]"
              title="Piyush Kumar (Verified Node)"
            >
              <span className="material-symbols-outlined text-[#00f0ff] text-[18px]">person</span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[#1d1f2a] text-[#e1e1f1] border border-outline-variant/30 hover:bg-[#272935] hover:text-[#00f0ff] transition-colors"
              aria-label="Toggle navigation menu"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-[#11131d]/95 backdrop-blur-2xl border border-[#00f0ff]/30 shadow-[0_20px_40px_rgba(0,0,0,0.9)] ring-1 ring-[#ff2a85]/20 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-[#3a4a46]/40 mb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
                </span>
                <span className="font-mono-code text-[11px] text-[#00f0ff] uppercase tracking-wider font-semibold">
                  Open to Internships
                </span>
              </div>
              <span className="font-mono-code text-[10px] text-[#83948f]">PORTFOLIO_NAV</span>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(link.id, e)}
                    className={`px-3 py-2 rounded-lg font-mono-code text-sm transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#00f0ff]/15 text-[#00f0ff] font-bold border border-[#00f0ff]/40'
                        : 'text-[#b9cac4] hover:bg-[#1d1f2a] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined text-xs opacity-60">
                      chevron_right
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="pt-4 mt-3 border-t border-[#3a4a46]/40 flex gap-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick('contact', e)}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#ff2a85] text-[#00201a] font-bold text-xs uppercase tracking-wider font-mono-code shadow-[0_0_16px_rgba(0,240,255,0.3)]"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
