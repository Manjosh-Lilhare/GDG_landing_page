import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Code, Compass } from 'lucide-react';

export default function Hero({ onOpenJoinModal }) {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#0F1115] pt-32 pb-24 min-h-[90vh] flex flex-col justify-center">
      {/* Background Ambient Glowing Orbits */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#FD6C00]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#4285F4]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#34A853]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E2024]/80 backdrop-blur-md border border-white/10 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD6C00] opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#FD6C00]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#C2C6D5]">Google Developer Groups</span>
            <span className="text-[#424753]">•</span>
            <span className="font-mono text-xs text-[#FFDBCB] font-semibold">Central India Hub</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1C20]/80 font-mono text-xs text-[#8C909F] border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-[#4285F4]" />
            <span>Zero Mile • 21.1458° N, 79.0882° E</span>
          </div>
        </motion.div>

        {/* Hero Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
                <span className="font-ams-manthan text-[#FF6D00] font-normal inline-block hover:scale-105 transition-transform duration-300 mr-2">नमस्ते</span> Folks
              </h1>
              <span className="text-4xl sm:text-6xl animate-bounce">👋</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#4285F4] tracking-tight mb-6 mt-1">
              Welcome to GDG Nagpur
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#C2C6D5] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              A community of developers, creators, innovators and technology enthusiasts learning, building and growing together from India's geographical epicenter.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FD6C00] via-[#FF8F00] to-[#FD6C00] text-black font-display font-bold text-sm shadow-[0_0_24px_rgba(253,108,0,0.3)] hover:shadow-[0_0_36px_rgba(253,108,0,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Join the Community</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#282A2E]/80 hover:bg-[#333539] text-white font-display font-semibold text-sm backdrop-blur-md border border-white/10 transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#4285F4]" />
                <span>Explore Events</span>
              </a>
            </div>

            {/* Track Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-[#4285F4]/15 text-[#4285F4] border border-[#4285F4]/20 font-mono text-xs">#WebDev</span>
              <span className="px-3 py-1 rounded-full bg-[#EA4335]/15 text-[#EA4335] border border-[#EA4335]/20 font-mono text-xs">#GoogleCloud</span>
              <span class="px-3 py-1 rounded-full bg-[#34A853]/15 text-[#6DDD81] border border-[#34A853]/20 font-mono text-xs">#AndroidCompose</span>
              <span className="px-3 py-1 rounded-full bg-[#FD6C00]/15 text-[#FFB692] border border-[#FD6C00]/20 font-mono text-xs">#AppliedGemini</span>
            </div>
          </motion.div>

          {/* Right Column - Official Logo Podium & Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Concentric Orbits */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow shadow-inner" />
              <div className="absolute inset-6 rounded-full bg-[#1A1C20]/40 backdrop-blur-sm border border-white/5" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-[#FD6C00]/10 via-[#4285F4]/10 to-[#34A853]/10 animate-pulse" />

              {/* 4 Track Dots */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#EA4335] shadow-[0_0_12px_#EA4335]" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FD6C00] shadow-[0_0_12px_#FD6C00]" />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#4285F4] shadow-[0_0_12px_#4285F4]" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#34A853] shadow-[0_0_12px_#34A853]" />

              {/* Glass Podium with GDG_logo.jpeg */}
              <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-gradient-to-br from-[#333539] via-[#1E2024] to-[#0C0E12] shadow-2xl flex items-center justify-center group cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0C0E12] flex items-center justify-center p-3 relative border border-white/10 shadow-inner">
                  <img
                    src="/GDG_logo.jpeg"
                    alt="GDG Nagpur Official Insignia Logo"
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_8px_24px_rgba(253,108,0,0.35)]"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#FD6C00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              {/* Runway Badge Float */}
              <div className="absolute -bottom-4 bg-[#282A2E]/90 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 z-20">
                <Compass className="w-4 h-4 text-[#FD6C00] animate-pulse" />
                <span className="font-mono text-xs text-white font-semibold tracking-wider">NAG • 0-MILE RUNWAY</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
