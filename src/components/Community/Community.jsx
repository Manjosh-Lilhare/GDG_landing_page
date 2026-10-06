import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, Users, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Community({ onOpenJoinModal }) {
  const pillars = [
    {
      id: 'learn',
      title: 'LEARN',
      tagline: 'Explore new technologies and sharpen your skills.',
      desc: 'Hands-on technical codelabs in Applied Gemini AI, Cloud Run, Modern Web APIs, and Compose Multiplatform.',
      icon: BookOpen,
      color: '#4285F4',
      bgOpacity: 'bg-[#4285F4]/15',
      borderColor: 'hover:border-[#4285F4]/50'
    },
    {
      id: 'build',
      title: 'BUILD',
      tagline: 'Turn ideas into real products and experiences.',
      desc: 'Hackathons, 48-hour build-sprints, and zero-to-one product incubators solving real regional civic problems.',
      icon: Terminal,
      color: '#EA4335',
      bgOpacity: 'bg-[#EA4335]/15',
      borderColor: 'hover:border-[#EA4335]/50'
    },
    {
      id: 'connect',
      title: 'CONNECT',
      tagline: 'Meet developers, creators and technology enthusiasts.',
      desc: 'Networking with industry leads from MIHAN Tech SEZ, startup founders, Google Developer Experts, and campus leads.',
      icon: Users,
      color: '#FD6C00',
      bgOpacity: 'bg-[#FD6C00]/15',
      borderColor: 'hover:border-[#FD6C00]/50'
    },
    {
      id: 'grow',
      title: 'GROW',
      tagline: 'Grow together through collaboration and knowledge.',
      desc: 'Career roadmaps, resume and portfolio clinics, conference speaker coaching, and direct access to global Google programs.',
      icon: TrendingUp,
      color: '#34A853',
      bgOpacity: 'bg-[#34A853]/15',
      borderColor: 'hover:border-[#34A853]/50'
    }
  ];

  return (
    <section id="community-pillars" className="w-full bg-[#0C0E12] py-24 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#4285F4] font-semibold mb-3 block">
            Our Four Cornerstones
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            More than a community.
          </h2>
          <p className="font-sans text-base text-[#C2C6D5] mt-3 leading-relaxed">
            Built according to Google's developer ethos, scaled for Nagpur's unstoppable ambition.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={onOpenJoinModal}
                className={`cursor-target p-8 rounded-2xl bg-[#161920] hover:bg-[#1A1C20] transition-all duration-300 shadow-md flex flex-col justify-between group border border-white/5 ${pillar.borderColor} cursor-pointer`}
                data-cursor-label={`PILLAR: ${pillar.title}`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bgOpacity} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`} style={{ color: pillar.color }}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-xs uppercase font-bold tracking-wider" style={{ color: pillar.color }}>
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-white my-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <h4 className="font-sans text-sm font-semibold text-[#E2E2E8] mb-3 leading-snug">
                    "{pillar.tagline}"
                  </h4>
                  <p className="font-sans text-xs text-[#8C909F] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between font-mono text-xs font-semibold" style={{ color: pillar.color }}>
                  <span>Explore Track</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
