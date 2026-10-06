import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenJoinModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0E12]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        
        {/* Brand & Official Logo */}
        <a href="#hero" className="flex items-center gap-3 group cursor-target">
          <div className="h-10 w-10 rounded-xl p-[2px] bg-gradient-to-tr from-[#4285F4] via-[#FF6D00] to-[#34A853] shadow-md group-hover:scale-105 transition-transform overflow-hidden">
            <img src="/GDG_logo.jpeg" alt="GDG Logo" className="h-full w-full object-cover rounded-lg" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-lg text-white group-hover:text-[#4285F4] transition-colors leading-none">
                GDG Nagpur
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF6D00] animate-pulse" />
            </div>
            <span className="font-mono text-[10px] text-[#8C909F] tracking-widest uppercase mt-1">
              Orange City Tech Hub
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1A1C20]/80 p-1.5 rounded-xl border border-white/5 backdrop-blur-md">
          <a href="#hero" className="cursor-target px-4 py-1.5 text-xs font-medium text-[#C2C6D5] hover:text-white hover:bg-[#282A2E] rounded-lg transition-all">Home</a>
          <a href="#heritage" className="cursor-target px-4 py-1.5 text-xs font-medium text-[#C2C6D5] hover:text-white hover:bg-[#282A2E] rounded-lg transition-all">About</a>
          <a href="#events" className="cursor-target px-4 py-1.5 text-xs font-medium text-[#C2C6D5] hover:text-white hover:bg-[#282A2E] rounded-lg transition-all">Events</a>
          <a href="#community-pillars" className="cursor-target px-4 py-1.5 text-xs font-medium text-[#C2C6D5] hover:text-white hover:bg-[#282A2E] rounded-lg transition-all">Community</a>
          <a href="#orange-city" className="cursor-target px-4 py-1.5 text-xs font-medium text-[#C2C6D5] hover:text-white hover:bg-[#282A2E] rounded-lg transition-all">Orange City</a>
          <a href="#cta" className="cursor-target px-4 py-1.5 text-xs font-medium text-[#C2C6D5] hover:text-white hover:bg-[#282A2E] rounded-lg transition-all">Contact</a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="cursor-target hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FD6C00] to-[#FF8F00] hover:from-[#FF6D00] hover:to-[#FD6C00] text-black font-display font-bold text-xs shadow-[0_0_20px_rgba(253,108,0,0.3)] hover:shadow-[0_0_28px_rgba(253,108,0,0.5)] transition-all cursor-pointer transform active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Community</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#282A2E] text-white hover:text-[#FF6D00] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0E12]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3 font-display">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm text-[#C2C6D5] hover:text-white rounded-lg">Home</a>
            <a href="#heritage" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm text-[#C2C6D5] hover:text-white rounded-lg">About</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm text-[#C2C6D5] hover:text-white rounded-lg">Events</a>
            <a href="#community-pillars" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm text-[#C2C6D5] hover:text-white rounded-lg">Community</a>
            <a href="#orange-city" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm text-[#C2C6D5] hover:text-white rounded-lg">Orange City</a>
            <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm text-[#C2C6D5] hover:text-white rounded-lg">Contact</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="mt-4 w-full py-3 rounded-xl bg-[#FD6C00] text-black font-bold text-center"
            >
              Join Community
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
