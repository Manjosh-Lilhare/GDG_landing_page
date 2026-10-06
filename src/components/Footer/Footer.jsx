import React from 'react';
import { Compass, Linkedin, Instagram, Twitter, Github } from 'lucide-react';

export default function Footer({ onOpenJoinModal }) {
  return (
    <footer className="w-full bg-[#0C0E12] text-[#C2C6D5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl p-[2px] bg-[#1E2024] border border-white/10 overflow-hidden flex items-center justify-center">
                <img src="/GDG_logo.jpeg" alt="GDG Logo" className="h-full w-full object-cover rounded-lg" />
              </div>
              <span className="font-display font-extrabold text-xl text-white">GDG Nagpur</span>
            </div>

            <p className="font-sans text-sm text-[#8C909F] max-w-md leading-relaxed">
              Bridging Google's engineering innovation with the vibrant maker culture of Central India. Fostering developers, students, researchers, and builders from the Heart of the Nation.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1C20] font-mono text-xs text-[#FFDBCB] border border-white/5">
              <Compass className="w-3.5 h-3.5 text-[#FD6C00]" />
              <span><span className="font-ams-manthan text-[#FF6D00] text-sm">नमस्ते</span> Folks 👋 Zero Mile Stone • 21.1458° N</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-white font-bold tracking-wider block">
              Navigation
            </span>
            <div className="flex flex-col space-y-2 font-sans text-sm">
              <a href="#hero" className="cursor-target hover:text-white transition-colors">Home</a>
              <a href="#heritage" className="cursor-target hover:text-white transition-colors">About</a>
              <a href="#events" className="cursor-target hover:text-white transition-colors">Events</a>
              <a href="#community-pillars" className="cursor-target hover:text-white transition-colors">Community</a>
              <a href="#cta" className="cursor-target hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 4: Engage & Socials */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-white font-bold tracking-wider block">
              Engage
            </span>
            <div className="flex flex-col space-y-2 font-sans text-sm">
              <a href="#events" className="cursor-target hover:text-[#4285F4] transition-colors">Upcoming DevFests</a>
              <a href="#stories" className="cursor-target hover:text-[#4285F4] transition-colors">Community Stories</a>
              <a href="#heritage" className="cursor-target hover:text-[#4285F4] transition-colors">Nagpur Ecosystem</a>
              <button onClick={onOpenJoinModal} className="cursor-target hover:text-[#FD6C00] transition-colors text-left cursor-pointer">Become an Organizer</button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-xs text-[#8C909F]">
            Made with ❤️ by the GDG Nagpur community.
          </p>

          <div className="flex items-center gap-4 text-[#8C909F]">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-target hover:text-white transition-colors" aria-label="LinkedIn" data-cursor-label="LINKEDIN">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-target hover:text-white transition-colors" aria-label="Instagram" data-cursor-label="INSTAGRAM">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-target hover:text-white transition-colors" aria-label="X / Twitter" data-cursor-label="X / TWITTER">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cursor-target hover:text-white transition-colors" aria-label="GitHub" data-cursor-label="GITHUB">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
