import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Award, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import PixelTransition from '../PixelTransition/PixelTransition';

export default function Stories() {
  const stories = [
    {
      id: 'aniket',
      name: 'Aniket Kulkarni',
      role: 'Google Developer Expert • Mobile Architect',
      location: 'Nagpur Chapter Lead',
      quote: "Presenting my first talk on Flutter and Material 3 at GDG Nagpur gave me the stage confidence I never got in college. Today I lead mobile engineering at a global remote startup from Nagpur.",
      stats: '1,200+ Engineers Mentored',
      badge: 'GDE • MOBILE',
      tech: ['Android', 'Jetpack Compose', 'Kotlin'],
      color: '#4285F4',
      pixelColor: '#4285F4'
    },
    {
      id: 'pooja',
      name: 'Pooja Patil',
      role: 'Cloud Architect • WTM Ambassador',
      location: 'MIHAN IT Hub',
      quote: "The Women Techmakers sessions in Nagpur were a game changer for me. Meeting mentors who walked the same journey proved that world-class cloud engineering doesn't require shifting to Bengaluru.",
      stats: '15+ WTM Cloud Cohorts',
      badge: 'WTM AMBASSADOR',
      tech: ['Google Cloud', 'Kubernetes', 'DevOps'],
      color: '#FD6C00',
      pixelColor: '#FD6C00'
    },
    {
      id: 'tanmay',
      name: 'Tanmay Sharma',
      role: 'Co-Founder, BharatHealth • AI Engineer',
      location: 'VNIT Incubator',
      quote: "From hacking our first prototype during DevFest hackathon to raising seed funding, GDG Nagpur was our incubator. The zero-ego culture here is unmatched anywhere in India.",
      stats: '$250K+ Seed Raised',
      badge: 'STARTUP FOUNDER',
      tech: ['Gemini API', 'PyTorch', 'Multimodal AI'],
      color: '#34A853',
      pixelColor: '#34A853'
    }
  ];

  return (
    <section id="stories" className="w-full bg-[#0C0E12] py-24 border-t border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#34A853] font-semibold mb-3 block">
            Voices of Vidarbha
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built by the community.
          </h2>
          <p className="font-sans text-base text-[#C2C6D5] mt-3 leading-relaxed">
            Hover over any story card to reveal their achievement telemetry & verified impact.
          </p>
        </motion.div>

        {/* Pixel Transition Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <PixelTransition
                gridSize={10}
                pixelColor={story.pixelColor}
                animationStepDuration={0.35}
                aspectRatio="125%"
                className="cursor-target border border-white/10 hover:border-[#FD6C00]/50 shadow-2xl rounded-2xl overflow-hidden"
                firstContent={
                  <div className="w-full h-full p-7 flex flex-col justify-between bg-[#161920]">
                    <div>
                      {/* Rating stars */}
                      <div className="flex items-center gap-1 mb-4 text-[#FD6C00]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <Quote className="w-7 h-7 text-white/10 mb-3" />

                      <p className="font-sans text-sm text-[#E2E2E8] italic leading-relaxed mb-6 line-clamp-4">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#FD6C00] via-[#4285F4] to-[#34A853] overflow-hidden flex-shrink-0">
                        <img
                          src="/GDG_logo.jpeg"
                          alt={story.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      <div>
                        <h3 className="font-display text-sm font-bold text-white leading-tight">
                          {story.name}
                        </h3>
                        <span className="font-mono text-[11px] text-[#8C909F] block mt-0.5">
                          {story.role}
                        </span>
                      </div>
                    </div>
                  </div>
                }
                secondContent={
                  <div className="w-full h-full p-7 flex flex-col justify-between bg-gradient-to-br from-[#1E2024] via-[#161920] to-[#0C0E12] text-white">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="px-2.5 py-1 rounded-md font-mono text-[10px] font-bold tracking-widest uppercase border"
                          style={{ color: story.color, borderColor: `${story.color}40`, backgroundColor: `${story.color}15` }}
                        >
                          {story.badge}
                        </span>
                        <CheckCircle2 className="w-5 h-5" style={{ color: story.color }} />
                      </div>

                      <h4 className="font-display font-bold text-lg text-white mb-1">
                        {story.name}
                      </h4>
                      <p className="font-mono text-xs text-[#8C909F] mb-4">
                        {story.location}
                      </p>

                      <div className="p-3 rounded-xl bg-[#0C0E12]/80 border border-white/5 font-mono text-xs text-[#E2E2E8] mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 shrink-0" style={{ color: story.color }} />
                        <span>{story.stats}</span>
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase text-[#8C909F] block mb-2">Primary Tech Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {story.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#282A2E] text-xs font-mono font-semibold"
                            style={{ color: story.color }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
