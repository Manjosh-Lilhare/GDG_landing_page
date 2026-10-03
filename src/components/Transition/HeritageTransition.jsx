import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Cpu, Sparkles } from 'lucide-react';

export default function HeritageTransition() {
  return (
    <section className="w-full bg-[#0F1115] py-20 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 rounded-3xl bg-gradient-to-r from-[#1A1C20] via-[#161920] to-[#1A1C20] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Animated Mandala to Circuit Graphic */}
          <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
            <svg className="w-full h-full text-[#FD6C00] animate-spin-slow opacity-80" viewBox="0 0 200 200" fill="none">
              {/* Outer Mandala Geometry Ring */}
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
              <polygon points="100,10 120,40 160,40 130,70 140,110 100,85 60,110 70,70 40,40 80,40" stroke="#4285F4" strokeWidth="1" />
              <circle cx="100" cy="100" r="45" stroke="#34A853" strokeWidth="1" />
              {/* Center Circuit Chip */}
              <rect x="85" y="85" width="30" height="30" rx="4" fill="#0C0E12" stroke="#FD6C00" strokeWidth="2" />
            </svg>
            <Cpu className="w-8 h-8 text-[#FD6C00] absolute inset-auto" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD6C00]/15 text-[#FD6C00] border border-[#FD6C00]/30 font-mono text-xs uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Heritage Becomes Innovation</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Indian Cultural Geometry × Digital Microarchitecture
          </h3>
          
          <p className="font-sans text-sm text-[#C2C6D5] max-w-lg mt-3 leading-relaxed">
            Transforming centuries of Indian mathematical design, symmetry, and architectural precision into open-source code and scalable cloud infrastructure.
          </p>

          <div className="flex items-center gap-4 mt-6 font-mono text-xs text-[#8C909F]">
            <span className="flex items-center gap-1"><Binary className="w-3.5 h-3.5 text-[#4285F4]" /> Pattern Matrix</span>
            <span>➔</span>
            <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-[#34A853]" /> Circuit Topology</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
