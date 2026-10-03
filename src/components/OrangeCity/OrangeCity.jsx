import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Network, Sparkles } from 'lucide-react';

export default function OrangeCity() {
  const [digitalMode, setDigitalMode] = useState(false);

  return (
    <section id="orange-city" className="w-full bg-[#0F1115] py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1E2024]/90 via-[#161920] to-[#0C0E12] shadow-2xl relative overflow-hidden border border-white/10">
          
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#FD6C00]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD6C00]/15 text-[#FD6C00] border border-[#FD6C00]/30 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Regional Innovation Corridor</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
                From the Orange City,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD6C00] via-[#FF8F00] to-[#4285F4]">
                  We Build The Future.
                </span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#C2C6D5] max-w-xl leading-relaxed">
                Famous for mandarins and sprawling orchards, Nagpur is quietly evolving into Central India's primary software corridor. GDG Nagpur serves as the grassroots propellant—empowering engineers from tier-2 and tier-3 colleges into global tech creators.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#0C0E12]/60 backdrop-blur-md border border-white/5">
                  <span className="font-display text-3xl font-extrabold text-[#FD6C00]">300+</span>
                  <p className="font-sans text-xs text-[#8C909F] mt-1">Open Source PRs merged during annual hack days</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0C0E12]/60 backdrop-blur-md border border-white/5">
                  <span className="font-display text-3xl font-extrabold text-[#4285F4]">18+</span>
                  <p className="font-sans text-xs text-[#8C909F] mt-1">Colleges & Tech Institutes mapped to chapter</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0C0E12]/60 backdrop-blur-md border border-white/5">
                  <span className="font-display text-3xl font-extrabold text-[#34A853]">40%</span>
                  <p className="font-sans text-xs text-[#8C909F] mt-1">Women in Tech representation across tracks</p>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Rotating Sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div
                onClick={() => setDigitalMode(!digitalMode)}
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-[#0C0E12]/90 p-6 flex flex-col items-center justify-center shadow-inner border border-white/10 cursor-pointer group hover:border-[#FD6C00]/50 transition-all"
              >
                {/* Glowing Sphere Core */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${digitalMode ? 'bg-[#4285F4]/40 scale-125' : 'bg-[#FD6C00]/30 scale-110'}`} />

                  <div className={`w-36 h-36 rounded-full border-2 transition-all duration-700 flex items-center justify-center relative shadow-2xl ${digitalMode ? 'border-[#4285F4] bg-[#4285F4]/20' : 'border-[#FD6C00] bg-[#FD6C00]/30'}`}>
                    
                    {digitalMode ? (
                      <Cpu className="w-16 h-16 text-[#4285F4] animate-pulse" />
                    ) : (
                      <Zap className="w-16 h-16 text-[#FD6C00] animate-bounce" />
                    )}

                    {/* Orbiting Satellite Nodes */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3.5 h-3.5 rounded-full bg-[#4285F4] shadow-[0_0_10px_#4285F4]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3.5 h-3.5 rounded-full bg-[#34A853] shadow-[0_0_10px_#34A853]" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-3.5 h-3.5 rounded-full bg-[#EA4335] shadow-[0_0_10px_#EA4335]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3.5 h-3.5 rounded-full bg-[#FBBC04] shadow-[0_0_10px_#FBBC04]" />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1C20] border border-white/5 text-xs font-mono text-[#C2C6D5] group-hover:text-white">
                  <Network className="w-4 h-4 text-[#FD6C00]" />
                  <span>
                    {digitalMode ? 'State: DIGITAL MATRIX ACTIVE ⚡' : 'Click to Morph: Culture → Technology'}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
