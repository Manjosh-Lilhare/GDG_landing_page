import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

export default function JoinModal({ isOpen, onClose, defaultTitle = 'Join GDG Nagpur' }) {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student / Campus');
  const [track, setTrack] = useState('Applied Gemini AI');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg p-8 rounded-3xl bg-[#161920] border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FD6C00]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src="/GDG_logo.jpeg" alt="GDG Logo" className="h-8 w-8 rounded-lg object-cover" />
              <h3 className="font-display text-xl font-bold text-white">
                {defaultTitle}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#282A2E] text-[#C2C6D5] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
              <p className="text-xs text-[#8C909F] mb-4">
                Become an official member of Central India's premier developer community. Access codelabs, DevFest passes, and mentorship.
              </p>

              <div>
                <label className="block font-mono text-[11px] uppercase text-[#8C909F] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Aditi Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-[#0C0E12] border border-white/10 text-white placeholder-[#424753] focus:outline-none focus:border-[#4285F4] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase text-[#8C909F] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aditi@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0C0E12] border border-white/10 text-white placeholder-[#424753] focus:outline-none focus:border-[#4285F4] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase text-[#8C909F] mb-1">Role / Student</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0C0E12] border border-white/10 text-white focus:outline-none focus:border-[#4285F4] transition-colors"
                  >
                    <option>Student / Campus</option>
                    <option>Software Engineer</option>
                    <option>Cloud / DevOps</option>
                    <option>AI / Data Scientist</option>
                    <option>Founder / Lead</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase text-[#8C909F] mb-1">Primary Track</label>
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0C0E12] border border-white/10 text-white focus:outline-none focus:border-[#4285F4] transition-colors"
                  >
                    <option>Applied Gemini AI</option>
                    <option>Web & Frontend</option>
                    <option>Google Cloud</option>
                    <option>Android & Compose</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FD6C00] to-[#FF8F00] text-black font-display font-bold text-sm shadow-lg hover:shadow-[#FD6C00]/40 transition-all cursor-pointer"
              >
                Confirm Membership 🎉
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#34A853]/20 text-[#34A853] flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">Welcome to GDG Nagpur!</h4>
              <p className="font-sans text-xs text-[#C2C6D5] max-w-xs mx-auto leading-relaxed">
                We've sent a welcome pack and Discord invitation to <span className="text-[#FD6C00] font-mono">{email}</span>. See you at the Zero Mile!
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#282A2E] text-white font-display text-xs font-bold hover:bg-[#333539] transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
