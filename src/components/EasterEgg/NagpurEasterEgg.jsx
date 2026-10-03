import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NagpurEasterEgg() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="relative">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setHovered(!hovered)}
          className="w-9 h-9 rounded-full bg-[#FD6C00]/20 border border-[#FD6C00]/40 flex items-center justify-center text-[#FD6C00] shadow-lg hover:scale-110 transition-transform cursor-pointer"
          aria-label="Nagpur Easter Egg"
        >
          🍊
        </button>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-12 left-0 w-64 p-4 rounded-xl bg-[#161920] border border-[#FD6C00]/40 shadow-2xl backdrop-blur-xl text-left"
            >
              <div className="font-display font-bold text-sm text-white mb-1">
                Namaste from Nagpur 👋
              </div>
              <p className="font-mono text-xs text-[#C2C6D5]">
                Latitude 21.1458° N • Longitude 79.0882° E
              </p>
              <p className="font-sans text-xs text-[#8C909F] mt-2 border-t border-white/5 pt-2">
                "Central India's tech epicenter. True Center, Pure Code!"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
