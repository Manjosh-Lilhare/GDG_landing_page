import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Stories() {
  const stories = [
    {
      id: 'aniket',
      name: 'Aniket Kulkarni',
      role: 'Google Developer Expert • Mobile Architect',
      location: 'Nagpur Chapter Lead',
      quote: "Presenting my first talk on Flutter and Material 3 at GDG Nagpur gave me the stage confidence I never got in college. Today I lead mobile engineering at a global remote startup from Nagpur.",
      tech: ['Android', 'Jetpack Compose', 'Kotlin'],
      color: '#4285F4'
    },
    {
      id: 'pooja',
      name: 'Pooja Patil',
      role: 'Cloud Architect • WTM Ambassador',
      location: 'MIHAN IT Hub',
      quote: "The Women Techmakers sessions in Nagpur were a game changer for me. Meeting mentors who walked the same journey proved that world-class cloud engineering doesn't require shifting to Bengaluru.",
      tech: ['Google Cloud', 'Kubernetes', 'DevOps'],
      color: '#FD6C00'
    },
    {
      id: 'tanmay',
      name: 'Tanmay Sharma',
      role: 'Co-Founder, BharatHealth • AI Engineer',
      location: 'VNIT Incubator',
      quote: "From hacking our first prototype during DevFest hackathon to raising seed funding, GDG Nagpur was our incubator. The zero-ego culture here is unmatched anywhere in India.",
      tech: ['Gemini API', 'PyTorch', 'Multimodal AI'],
      color: '#34A853'
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
            Real stories from engineers, founders, and campus leads whose journeys began with a single meetup.
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-[#161920] shadow-xl flex flex-col justify-between border border-white/5 relative overflow-hidden group hover:border-[#FD6C00]/40 transition-all"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6 text-[#FD6C00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-white/10 mb-4" />

                <p className="font-sans text-base text-[#E2E2E8] italic leading-relaxed mb-8">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#FD6C00] via-[#4285F4] to-[#34A853] overflow-hidden flex-shrink-0">
                  <img
                    src="/GDG_logo.jpeg"
                    alt={story.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-white leading-tight">
                    {story.name}
                  </h3>
                  <span className="font-mono text-xs text-[#8C909F] block mt-0.5">
                    {story.role}
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {story.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#282A2E] text-[10px] font-mono text-[#C2C6D5]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
