import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Users, TrendingUp, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import PixelTransition from '../PixelTransition/PixelTransition';

export default function Values() {
  const values = [
    {
      word: 'LEARN.',
      sub: 'Knowledge & Hands-On Skills',
      color: '#4285F4',
      icon: Terminal,
      desc: 'Master cutting-edge Google tech stacks through hands-on codelabs, workshops, and AI bootcamps.',
      details: [
        'Applied Gemini Multimodal API',
        'Android Jetpack Compose',
        'Google Cloud & Vertex AI',
        'Modern Web Performance'
      ],
      metric: '120+ Codelabs Shipped',
      pixelColor: '#4285F4'
    },
    {
      word: 'BUILD.',
      sub: 'Zero-to-One Product Incubators',
      color: '#EA4335',
      icon: Cpu,
      desc: 'Transform ideas into production software during hackathons, sprint days, and civic tech incubators.',
      details: [
        '48-Hour DevFest Hackathon',
        'Open Source PR Sprints',
        'Civic Tech Solutions',
        'Architecture Reviews'
      ],
      metric: '300+ Open Source PRs',
      pixelColor: '#EA4335'
    },
    {
      word: 'CONNECT.',
      sub: 'Vidarbha & Global Dev Network',
      color: '#FD6C00',
      icon: Users,
      desc: 'Forge lifelong professional connections with engineers, tech leads, campus leads, and founders.',
      details: [
        'Google Developer Experts (GDEs)',
        'MIHAN SEZ Engineers',
        'Campus Tech Lead Network',
        'WTM Ambassadors'
      ],
      metric: '5,000+ Active Builders',
      pixelColor: '#FD6C00'
    },
    {
      word: 'GROW.',
      sub: 'Elevating Regional Trajectory',
      color: '#34A853',
      icon: TrendingUp,
      desc: 'Accelerate career trajectory through public speaking mentorship, resume reviews, and startup guidance.',
      details: [
        'Speaker Coaching',
        'Google Program Referrals',
        'Startup Seed Runway',
        'Career Clinic Audits'
      ],
      metric: '40%+ Career Growth',
      pixelColor: '#34A853'
    }
  ];

  return (
    <section className="w-full bg-[#0C0E12] py-24 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FD6C00] font-semibold mb-2 block">
            Core Operating Ethos
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Four Words. Infinite Impact.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#C2C6D5] mt-3">
            Hover over any pillar to experience the pixel telemetry transition.
          </p>
        </div>

        {/* 4 Ethos Cards with PixelTransition */}
        <div className="space-y-8">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <motion.div
                key={v.word}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <PixelTransition
                  gridSize={12}
                  pixelColor={v.pixelColor}
                  animationStepDuration={0.35}
                  aspectRatio="0%"
                  className="cursor-target border border-white/10 hover:border-white/25 shadow-2xl rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[210px]"
                  firstContent={
                    <div className="w-full h-full p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#161920]">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-xs text-[#8C909F] uppercase tracking-widest block">
                            Pillar 0{idx + 1}
                          </span>
                          <span
                            className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold tracking-widest uppercase border"
                            style={{ color: v.color, borderColor: `${v.color}40`, backgroundColor: `${v.color}15` }}
                          >
                            ACTIVE TELEMETRY
                          </span>
                        </div>
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

                      <div className="relative z-10 font-mono text-xs text-[#8C909F] bg-[#0C0E12]/90 px-5 py-4 rounded-2xl border border-white/10 max-w-md w-full flex items-center justify-between gap-4">
                        <div>
                          <div className="text-white font-bold mb-1 flex items-center gap-2">
                            <IconComp className="w-4 h-4" style={{ color: v.color }} />
                            <span>{v.metric}</span>
                          </div>
                          <div className="text-[11px] text-[#8C909F]">Hover card to dissolve into detail matrix</div>
                        </div>
                        <ArrowRight className="w-5 h-5 shrink-0" style={{ color: v.color }} />
                      </div>
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-[#1A1C20] via-[#161920] to-[#0C0E12] text-white">
                      <div className="space-y-3 max-w-xl">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5" style={{ color: v.color }} />
                          <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: v.color }}>
                            {v.word} • DEEP DIVE MATRIX
                          </span>
                        </div>
                        <p className="font-sans text-sm sm:text-base text-[#E2E2E8] leading-relaxed font-medium">
                          {v.desc}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {v.details.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#C2C6D5]">
                              <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: v.color }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end justify-center shrink-0">
                        <div
                          className="px-5 py-3 rounded-2xl border font-mono text-xs font-bold shadow-lg flex items-center gap-2"
                          style={{ color: v.color, borderColor: `${v.color}50`, backgroundColor: `${v.color}15` }}
                        >
                          <IconComp className="w-4 h-4" />
                          <span>{v.metric}</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
