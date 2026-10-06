import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Landmark, Waves, Train, Shield, Flame } from 'lucide-react';

export default function Heritage() {
  const heritageNodes = [
    {
      id: 'zero-mile',
      title: 'Zero Mile Stone',
      metaphor: 'Coordinate System & Baseline',
      icon: Navigation,
      color: '#FD6C00',
      coords: '21.1458° N, 79.0882° E',
      desc: 'The British GTS origin stone of India transformed into our developer coordinate datum. Every pull request originates from the true center.',
      svg: (
        <svg className="w-32 h-32 text-[#FD6C00]/40 group-hover:text-[#FD6C00]/80 transition-colors" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.75" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
          <line x1="5" y1="95" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="4" fill="currentColor" className="animate-ping" />
        </svg>
      )
    },
    {
      id: 'deekshabhoomi',
      title: 'Deekshabhoomi',
      metaphor: 'Circular Architecture & Concurrency',
      icon: Landmark,
      color: '#4285F4',
      coords: 'Architectural Stupa',
      desc: "Nagpur's globally revered monument inspired our architectural principles of radial symmetry, community inclusion, and high-scale microservices.",
      svg: (
        <svg className="w-36 h-28 text-[#4285F4]/40 group-hover:text-[#4285F4]/80 transition-colors" fill="none" viewBox="0 0 120 80">
          <path d="M10 75 Q60 5 110 75" stroke="currentColor" strokeWidth="1.5" />
          <path d="M25 75 Q60 20 95 75" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1" />
          <path d="M40 75 Q60 35 80 75" stroke="currentColor" strokeWidth="0.75" />
          <line x1="60" y1="5" x2="60" y2="75" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="5" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'futala-lake',
      title: 'Futala Lake',
      metaphor: 'Fluid Streams & Data Streams',
      icon: Waves,
      color: '#34A853',
      coords: 'Lakeside Incubator Node',
      desc: 'From waterfront evening hackathons to Asia’s vibrant fountain lightshows, Nagpur’s waters symbolize smooth data flow and reactive programming.',
      svg: (
        <svg className="w-36 h-28 text-[#34A853]/40 group-hover:text-[#34A853]/80 transition-colors" fill="none" viewBox="0 0 120 70">
          <path d="M10 50 Q35 30 60 50 T110 50" stroke="currentColor" strokeWidth="1.25" />
          <path d="M15 35 Q40 15 65 35 T115 35" opacity="0.6" stroke="currentColor" strokeWidth="1" />
          <circle cx="25" cy="40" fill="currentColor" r="3" />
          <circle cx="60" cy="50" fill="currentColor" r="4" />
          <circle cx="95" cy="45" fill="currentColor" r="3" />
        </svg>
      )
    },
    {
      id: 'railway-crossing',
      title: 'Diamond Railway Crossing',
      metaphor: 'High Throughput Route Nodes',
      icon: Train,
      color: '#EA4335',
      coords: 'Asia’s Rail Center Node',
      desc: 'Where North-South and East-West railway arteries cross in Nagpur, inspiring our event routing and multi-track conference orchestration.',
      svg: (
        <svg className="w-36 h-28 text-[#EA4335]/40 group-hover:text-[#EA4335]/80 transition-colors" fill="none" viewBox="0 0 120 70">
          <line x1="10" y1="10" x2="110" y2="60" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="60" x2="110" y2="10" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="60,25 70,35 60,45 50,35" fill="currentColor" opacity="0.7" />
        </svg>
      )
    },
    {
      id: 'sitabuldi-fort',
      title: 'Sitabuldi Fort',
      metaphor: 'Architectural Security & Resilience',
      icon: Shield,
      color: '#FBBC04',
      coords: 'Historic Defense Mesh',
      desc: 'Perched on double hillocks, the fort represents zero-trust security architecture, fail-over resilience, and enduring community defense.',
      svg: (
        <svg className="w-36 h-28 text-[#FBBC04]/40 group-hover:text-[#FBBC04]/80 transition-colors" fill="none" viewBox="0 0 120 70">
          <rect x="20" y="30" width="80" height="35" rx="4" stroke="currentColor" strokeWidth="1.25" />
          <polyline points="20,30 35,15 50,30 60,15 70,30 85,15 100,30" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 'orange-city',
      title: 'Orange Orchards',
      metaphor: 'Glowing Particle Energy Matrix',
      icon: Flame,
      color: '#FD6C00',
      coords: 'Mandarin Ecosystem',
      desc: 'Nagpur’s famous citrus orchards transform into an energetic particle matrix fueling grassroots innovation and warm Indian hospitality.',
      svg: (
        <svg className="w-32 h-32 text-[#FD6C00]/40 group-hover:text-[#FD6C00]/80 transition-colors" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="heritage" className="w-full bg-[#0C0E12] py-24 relative border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FD6C00] font-semibold mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Cultural & Technical Foundations</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Rooted in Nagpur.
            </h2>
          </div>
          <p className="font-sans text-base text-[#C2C6D5] max-w-lg leading-relaxed">
            Technology may connect the world, but every community has a place it calls home. Here, cultural heritage transforms into visual tech metaphors.
          </p>
        </motion.div>

        {/* 6 Metaphor Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageNodes.map((item, idx) => {
            const IconComp = item.icon;
            // Map item ID to cursor attributes
            const cursorType = item.id === 'zero-mile' ? 'zero-mile'
              : item.id === 'deekshabhoomi' ? 'deekshabhoomi'
              : item.id === 'futala-lake' ? 'futala'
              : item.id === 'railway-crossing' ? 'railway'
              : item.id === 'sitabuldi-fort' ? 'sitabuldi'
              : 'orange-city';

            const cursorLabel = item.id === 'zero-mile' ? 'ZERO MILE (0.00km)'
              : item.id === 'deekshabhoomi' ? 'DEEKSHABHOOMI'
              : item.id === 'futala-lake' ? 'FUTALA LAKE'
              : item.id === 'railway-crossing' ? 'RAILWAY HUB'
              : item.id === 'sitabuldi-fort' ? 'SITABULDI FORT'
              : 'ORANGE CITY';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="cursor-target group relative rounded-2xl bg-[#161920] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-white/5 hover:border-[#FD6C00]/40"
                data-cursor-type={cursorType}
                data-cursor-label={cursorLabel}
              >
                <div className="absolute -right-8 -top-8 w-36 h-36 bg-[#FD6C00]/5 rounded-full blur-2xl group-hover:bg-[#FD6C00]/15 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-[#282A2E] flex items-center justify-center border border-white/5 text-[#FD6C00]">
                      <IconComp className="w-6 h-6" />
                    </span>
                    <span className="font-mono text-[11px] text-[#8C909F] bg-[#1A1C20] px-3 py-1 rounded-md border border-white/5">
                      {item.coords}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-[#FD6C00] uppercase tracking-wider block mb-3">
                    {item.metaphor}
                  </span>
                  <p className="font-sans text-sm text-[#C2C6D5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-center">
                  {item.svg}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
