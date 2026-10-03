import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function Events({ onOpenRSVPModal }) {
  const [filter, setFilter] = useState('all');

  const eventsList = [
    {
      id: 'devfest',
      category: 'devfest',
      badge: 'FLAGSHIP ANNUAL SUMMIT',
      title: 'DevFest Nagpur 2026',
      date: 'DECEMBER 2026',
      desc: "Central India's largest developer congregation. 1,500+ attendees, 3 parallel technical tracks, keynotes by Google engineers, and a startup demo runway.",
      location: 'Vasantrao Deshpande Hall, Civil Lines',
      attendees: '1,500+ Expected',
      status: 'TICKETS OPENING SOON',
      cta: 'Notify Me',
      color: '#FD6C00'
    },
    {
      id: 'io-extended',
      category: 'devfest',
      badge: 'COMMUNITY EXTENDED',
      title: 'Google I/O Extended Nagpur',
      date: 'JULY 2026',
      desc: 'Unpacking major announcements from Mountain View: Gemini multimodal API updates, Android 16, Chrome runtime evolutions, and Firebase App Hosting.',
      location: 'VNIT Campus Auditorium, Nagpur',
      attendees: '600 Attendees',
      status: 'FREE ENTRY (RSVP REQUIRED)',
      cta: 'Reserve Seat',
      color: '#4285F4'
    },
    {
      id: 'build-ai',
      category: 'ai',
      badge: 'HANDS-ON WORKSHOP',
      title: 'Build with AI & Vertex Workshop',
      date: 'MONTHLY WORKSHOP',
      desc: 'Practical RAG architectures, prompt engineering using Gemma and Gemini Pro, with cloud credits granted to all verified attendees.',
      location: 'MIHAN Tech Park Center',
      attendees: 'BYOD Lab • 120 Seats',
      status: 'LIMITED SEATS',
      cta: 'Apply to Attend',
      color: '#34A853'
    },
    {
      id: 'wtm-summit',
      category: 'wtm',
      badge: 'WTM SPECIAL EDITION',
      title: 'Women Techmakers Nagpur',
      date: 'SEPTEMBER 2026',
      desc: 'Celebrating women leading engineering, product, and AI research in Vidarbha. Inspiring keynotes, leadership panels, and portfolio reviews.',
      location: 'Chitnavis Centre, Civil Lines',
      attendees: '400+ Women Builders',
      status: 'CALL FOR SPEAKERS OPEN',
      cta: 'Submit Talk',
      color: '#EA4335'
    }
  ];

  const filteredEvents = eventsList.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="events" className="w-full bg-[#0F1115] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header with Category Filter Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FD6C00] font-semibold mb-3 block">
              What's Happening?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Upcoming & Flagship Summits
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 bg-[#1A1C20] p-1.5 rounded-xl border border-white/5 overflow-x-auto">
            {['all', 'devfest', 'ai', 'wtm'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#333539] text-white shadow-md'
                    : 'text-[#8C909F] hover:text-white hover:bg-[#282A2E]'
                }`}
              >
                {cat === 'all' ? 'All Events' : cat === 'devfest' ? 'DevFest' : cat === 'ai' ? 'AI & Cloud' : 'WTM'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Cards Grid / Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((ev) => (
              <motion.div
                key={ev.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-[#161920] hover:bg-[#1A1C20] transition-all duration-300 shadow-lg flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-[#FD6C00]/40"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FD6C00]/5 rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-white/10"
                      style={{ color: ev.color, backgroundColor: `${ev.color}15` }}
                    >
                      {ev.badge}
                    </span>
                    <span className="font-mono text-xs text-[#8C909F] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" style={{ color: ev.color }} />
                      {ev.date}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#FFDBCB] transition-colors mb-3">
                    {ev.title}
                  </h3>
                  <p className="font-sans text-sm text-[#C2C6D5] mb-6 leading-relaxed">
                    {ev.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 font-sans text-xs text-[#8C909F] mb-6">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#FD6C00]" />
                      {ev.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#4285F4]" />
                      {ev.attendees}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="font-mono text-xs font-semibold" style={{ color: ev.color }}>
                    {ev.status}
                  </span>
                  <button
                    onClick={() => onOpenRSVPModal(ev.title)}
                    className="px-5 py-2.5 rounded-xl bg-[#282A2E] hover:bg-[#FD6C00] text-white hover:text-black font-display text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>{ev.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
