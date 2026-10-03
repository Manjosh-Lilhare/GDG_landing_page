import React from 'react';
import { motion } from 'framer-motion';

export default function Values() {
  const values = [
    {
      word: 'LEARN.',
      sub: 'Knowledge & Hands-On Skills',
      color: '#4285F4',
      bgGlow: 'from-[#4285F4]/20',
      particles: '● Codelabs ● Machine Learning ● Gemini API ● Cloud Run'
    },
    {
      word: 'BUILD.',
      sub: 'Zero-to-One Product incubators',
      color: '#EA4335',
      bgGlow: 'from-[#EA4335]/20',
      particles: '■ Hackathons ■ Open Source ■ Architecture ■ Shipping Code'
    },
    {
      word: 'CONNECT.',
      sub: 'Vidarbha & Global Dev Network',
      color: '#FD6C00',
      bgGlow: 'from-[#FD6C00]/20',
      particles: '▲ GDEs ▲ Tech Leads ▲ Organizers ▲ 5K+ Developers'
    },
    {
      word: 'GROW.',
      sub: 'Elevating Regional Trajectory',
      color: '#34A853',
      bgGlow: 'from-[#34A853]/20',
      particles: '◆ Careers ◆ Public Speaking ◆ Startups ◆ Global Reach'
    }
  ];

  return (
    <section className="w-full bg-[#0C0E12] py-24 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FD6C00] font-semibold mb-2 block">
            Core Operating Ethos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Four Words. Infinite Impact.
          </h2>
        </div>

        <div className="space-y-12">
          {values.map((v, idx) => (
            <motion.div
              key={v.word}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="group p-8 sm:p-12 rounded-3xl bg-[#161920] border border-white/5 hover:border-white/15 transition-all relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${v.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                <span className="font-mono text-xs text-[#8C909F] uppercase tracking-widest block mb-2">
                  Pillar 0{idx + 1}
                </span>
                <h3
                  className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none transition-colors"
                  style={{ color: v.color }}
                >
                  {v.word}
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#C2C6D5] font-semibold mt-3">
                  {v.sub}
                </p>
              </div>

              <div className="relative z-10 font-mono text-xs text-[#8C909F] bg-[#0C0E12]/80 px-4 py-3 rounded-xl border border-white/5 max-w-sm">
                <div className="text-white font-semibold mb-1">State Synchronized:</div>
                <div>{v.particles}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
