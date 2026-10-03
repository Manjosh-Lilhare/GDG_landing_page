import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Terminal } from 'lucide-react';

export default function CTA({ onOpenJoinModal }) {
  return (
    <section id="cta" className="w-full bg-[#0F1115] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0F1115] to-[#0F1115] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-2xl p-1 bg-[#1E2024] border border-[#FD6C00]/40 mx-auto mb-6 shadow-2xl overflow-hidden"
        >
          <img src="/GDG_logo.jpeg" alt="GDG Insignia" className="w-full h-full object-cover rounded-xl" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4"
        >
          Ready to build with us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-lg sm:text-xl text-[#C2C6D5] max-w-xl mx-auto mb-10"
        >
          <span className="font-ams-manthan text-[#FF6D00] text-2xl mr-1">नमस्ते</span> Folks. Your next idea could start here at the Zero Mile datum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FD6C00] to-[#FF8F00] text-black font-display font-bold text-sm shadow-[0_0_24px_rgba(253,108,0,0.3)] hover:shadow-[0_0_36px_rgba(253,108,0,0.5)] hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Join the Community</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://gdg.community.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#282A2E] hover:bg-[#333539] text-white font-display font-semibold text-sm border border-white/10 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#FD6C00]" />
            <span>Join Discord / WhatsApp</span>
          </a>
        </motion.div>

        {/* Command Easter Egg Box */}
        <div className="inline-block p-1 rounded-2xl bg-[#161920] shadow-xl border border-white/10 text-left max-w-xl w-full">
          <div className="px-6 py-3 rounded-xl bg-[#1E2024] flex items-center justify-between gap-4 font-mono text-xs text-[#8C909F]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#FD6C00]" />
              <span>./gdg_nagpur_init.sh</span>
            </div>
            <span className="text-[#34A853] font-bold">STATUS: READY ⚡</span>
          </div>
        </div>

      </div>
    </section>
  );
}
