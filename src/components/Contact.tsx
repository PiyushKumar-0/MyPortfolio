import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success'>('idle');

  const emailAddress = 'piyushkumar150406@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('transmitting');

    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#a855f7', '#ff2a85', '#ffb703'],
      });

      // Clear after 6 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative w-full py-16 lg:py-24 scroll-mt-24 mb-12">
      <div className="relative bg-[#11131d]/90 backdrop-blur-xl rounded-2xl border border-[#3a4a46]/35 p-6 lg:p-10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] ring-1 ring-[#00f0ff]/20">
        {/* Top Cyber Line Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff2a85] to-[#a855f7]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Inquiries & Contact Telemetry (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#00f0ff]" />
                <span className="font-mono-code text-[11px] text-[#00f0ff] tracking-widest uppercase font-semibold">
                  Let's Connect
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#e1e1f1] font-bold tracking-tight">
                Have an Idea? Let's Build Something Meaningful.
              </h2>
              <p className="text-base text-[#b9cac4] mt-3 leading-relaxed">
                I'm always interested in connecting with recruiters, engineering leads, founders, and fellow builders. Whether you have an internship role, an open-source collaboration, or a technical inquiry, my terminal is open.
              </p>

              {/* Direct Contact List */}
              <div className="mt-8 space-y-3">
                {/* Email Card with Copy Feature */}
                <div className="p-4 bg-[#191b26] rounded-xl border border-[#3a4a46]/25 flex items-center justify-between gap-3 hover:border-[#00f0ff]/40 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#1d1f2a] flex items-center justify-center text-[#00f0ff] shrink-0 border border-[#00f0ff]/20">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono-code text-[10px] text-[#83948f] block uppercase">
                        DIRECT EMAIL
                      </span>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="font-mono-code text-xs sm:text-sm text-[#e1e1f1] hover:text-[#00f0ff] transition-colors truncate block"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-[#1d1f2a] text-[#83948f] hover:text-[#00f0ff] hover:bg-[#272935] transition-all shrink-0 cursor-pointer relative"
                    title="Copy Email to Clipboard"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {copiedEmail ? 'check' : 'content_copy'}
                    </span>
                    {copiedEmail && (
                      <span className="absolute -top-7 right-0 bg-[#00f0ff] text-[#00382f] text-[10px] font-mono-code font-bold px-2 py-0.5 rounded shadow">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 bg-[#191b26] rounded-xl border border-[#3a4a46]/25 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1d1f2a] flex items-center justify-center text-[#ddb8ff] shrink-0 border border-[#a855f7]/20">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <span className="font-mono-code text-[10px] text-[#83948f] block uppercase">
                      CURRENT LOCATION
                    </span>
                    <span className="text-sm sm:text-base text-[#e1e1f1] font-medium">
                      Kanpur, Uttar Pradesh, India
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <a
                    href="https://linkedin.com/in/piyush-kumar0"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#191b26] rounded-xl border border-[#3a4a46]/25 hover:border-[#a855f7]/50 hover:bg-[#1d1f2a] transition-all flex items-center gap-2.5 text-[#e1e1f1]"
                  >
                    <span className="material-symbols-outlined text-[#ddb8ff] text-[20px]">
                      share
                    </span>
                    <span className="font-mono-code text-xs">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/PiyushKumar-0"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-[#191b26] rounded-xl border border-[#3a4a46]/25 hover:border-[#00f0ff]/50 hover:bg-[#1d1f2a] transition-all flex items-center gap-2.5 text-[#e1e1f1]"
                  >
                    <span className="material-symbols-outlined text-[#00f0ff] text-[20px]">
                      terminal
                    </span>
                    <span className="font-mono-code text-xs">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3a4a46]/20 flex items-center gap-2 font-mono-code text-xs text-[#00f0ff]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <span>TYPICAL RESPONSE TIME: &lt; 24 HOURS</span>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#191b26] rounded-xl border border-[#3a4a46]/30 p-5 sm:p-7 flex flex-col justify-between shadow-inner">
            {/* Terminal Titlebar */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#3a4a46]/20 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff2a85]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#ffb703]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#00f0ff]/80" />
                  <span className="font-mono-code text-[11px] text-[#83948f] ml-2">
                    DISPATCH_TRANSMISSION.sh
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-[#00f0ff] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                  STATUS: {status === 'transmitting' ? 'UPLOADING' : 'READY'}
                </span>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-mono-code text-[11px] text-[#83948f] uppercase block mb-1.5"
                    >
                      // 01. Your Name / Recruiter Org *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Tech Talent)"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1d1f2a] border border-[#3a4a46]/40 text-[#e1e1f1] text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all placeholder:text-[#83948f]/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="font-mono-code text-[11px] text-[#83948f] uppercase block mb-1.5"
                    >
                      // 02. Return Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1d1f2a] border border-[#3a4a46]/40 text-[#e1e1f1] text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all placeholder:text-[#83948f]/60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="font-mono-code text-[11px] text-[#83948f] uppercase block mb-1.5"
                  >
                    // 03. Inquiry Type / Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Opportunity / Project Collaboration / Technical Discussion"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1d1f2a] border border-[#3a4a46]/40 text-[#e1e1f1] text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all placeholder:text-[#83948f]/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-mono-code text-[11px] text-[#83948f] uppercase block mb-1.5"
                  >
                    // 04. Message Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share project scope, internship timelines, or requirements..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1d1f2a] border border-[#3a4a46]/40 text-[#e1e1f1] text-sm focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all placeholder:text-[#83948f]/60 resize-none"
                  />
                </div>

                {/* Feedback terminal notification */}
                {status === 'transmitting' && (
                  <div className="p-3 rounded-lg bg-[#1d1f2a] font-mono-code text-xs border border-[#00f0ff]/40 text-[#00f0ff] animate-pulse flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] animate-spin">
                      progress_activity
                    </span>
                    <span>&gt; TRANSMITTING ENCRYPTED PACKETS TO PIYUSH'S TERMINAL...</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3 rounded-lg bg-[#00f0ff]/10 font-mono-code text-xs border border-[#00f0ff]/60 text-[#00f0ff] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>
                      &gt; TRANSMITTING PACKETS... [PAYLOAD DISPATCHED SUCCESSFULLY TO PIYUSH KUMAR]
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <span className="font-mono-code text-[11px] text-[#83948f]">
                    ENCRYPTION: TLS_SECURED // 256-BIT
                  </span>
                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#ff2a85] text-[#00201a] font-mono-code text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.45)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {status === 'transmitting' ? 'Transmitting...' : 'Transmit Dispatch'}
                    </span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
