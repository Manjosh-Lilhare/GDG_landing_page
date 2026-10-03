import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Stages definition with precise normalized time windows (0.0 to 1.0)
const STAGES = [
  { id: 1, title: "नमस्ते Folks 👋", subtitle: "CENTRAL INDIA'S TECH HEARTBEAT", start: 0.0, end: 0.18, color: "#FF6D00" },
  { id: 2, title: "From the heart of India.", subtitle: "ZERO MILE DATUM • 21.1458° N, 79.0882° E", start: 0.18, end: 0.38, color: "#4285F4" },
  { id: 3, title: "Rooted in heritage.", subtitle: "ARCHITECTURAL HARMONY × SCALE", start: 0.38, end: 0.58, color: "#34A853" },
  { id: 4, title: "Born in the Orange City.", subtitle: "GRASSROOTS PROPELLANT FOR CENTRAL INDIA", start: 0.58, end: 0.78, color: "#FF6D00" },
  { id: 5, title: "Where culture meets technology.", subtitle: "LEARN • BUILD • CONNECT • GROW", start: 0.78, end: 0.90, color: "#FBBC04" },
  { id: 6, title: "GDG Nagpur", subtitle: "नमस्ते Folks 👋", start: 0.90, end: 1.0, color: "#4285F4" }
];

export default function NagpurLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);

  const DURATION = 6800; // Total loader duration in ms

  // Particle System & Stage Morphing Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const PARTICLE_COUNT = 140;
    
    // Initialize particles with organic noise properties
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
      return {
        x: width / 2 + Math.cos(angle) * (20 + Math.random() * 50),
        y: height / 2 + Math.sin(angle) * (20 + Math.random() * 50),
        targetX: width / 2,
        targetY: height / 2,
        radius: Math.random() * 2 + 1.2,
        color: i % 4 === 0 ? '#FF6D00' : i % 4 === 1 ? '#4285F4' : i % 4 === 2 ? '#34A853' : '#FBBC04',
        alpha: Math.random() * 0.7 + 0.3,
        seed: Math.random() * 100,
        speed: 0.04 + Math.random() * 0.04
      };
    });

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);

      // Determine active stage index
      const stageIdx = STAGES.findIndex(s => p >= s.start && p < s.end);
      if (stageIdx !== -1) setCurrentStageIndex(stageIdx);

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const timeSec = elapsed * 0.001;

      // Compute target positions for particles based on current progress p
      particles.forEach((pt, i) => {
        let tx = cx;
        let ty = cy;

        if (p < 0.18) {
          // STAGE 1: Pulsing central beacon & orbit ring
          const radius = 40 + Math.sin(timeSec * 3 + pt.seed) * 15;
          const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + timeSec * 0.8;
          tx = cx + Math.cos(angle) * radius;
          ty = cy + Math.sin(angle) * radius;
        } else if (p < 0.38) {
          // STAGE 2: Zero Mile Crosshair & Target Coordinate Matrix
          const side = i % 4;
          const dist = ((i % 35) / 35) * 160 - 80;
          if (side === 0) { tx = cx + dist; ty = cy; }
          else if (side === 1) { tx = cx; ty = cy + dist; }
          else if (side === 2) {
            const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
            tx = cx + Math.cos(angle) * 70;
            ty = cy + Math.sin(angle) * 70;
          } else {
            const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
            tx = cx + Math.cos(angle) * 120;
            ty = cy + Math.sin(angle) * 120;
          }
        } else if (p < 0.58) {
          // STAGE 3: Deekshabhoomi Dome Arch & Concentric Ripples
          const archT = (i / PARTICLE_COUNT) * Math.PI;
          const archR = 140 + Math.sin(timeSec * 2 + i) * 10;
          tx = cx + Math.cos(archT - Math.PI / 2) * archR;
          ty = cy + 40 - Math.sin(archT) * (archR * 0.75);
        } else if (p < 0.78) {
          // STAGE 4: 3D Rotating Orange Sphere
          const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
          const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi + timeSec * 1.2;
          const radius = 95;
          const sphereX = radius * Math.cos(theta) * Math.sin(phi);
          const sphereY = radius * Math.sin(theta) * Math.sin(phi);
          const sphereZ = radius * Math.cos(phi);
          
          // Perspective projection
          const scale = 300 / (300 + sphereZ);
          tx = cx + sphereX * scale;
          ty = cy + sphereY * scale;
        } else if (p < 0.90) {
          // STAGE 5: Expanding Digital Network Mesh
          const row = Math.floor(i / 12);
          const col = i % 12;
          tx = cx + (col - 5.5) * 36 + Math.sin(timeSec * 2 + row) * 10;
          ty = cy + (row - 5.5) * 28 + Math.cos(timeSec * 2 + col) * 10;
        } else {
          // STAGE 6: Converging onto GDG Logo Perimeter & Outward Burst
          const radius = 130 + (p - 0.90) * 800; // Burst outward as transition completes
          const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + timeSec * 0.5;
          tx = cx + Math.cos(angle) * radius;
          ty = cy + Math.sin(angle) * radius;
        }

        // Fluid spring lerp to target position
        pt.x += (tx - pt.x) * pt.speed;
        pt.y += (ty - pt.y) * pt.speed;

        // Render particle
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.alpha * (p > 0.94 ? (1 - p) / 0.06 : 1);
        ctx.fill();

        // Connect neighboring nodes smoothly during stage 2, 4, 5
        if ((p >= 0.18 && p < 0.38) || (p >= 0.58 && p < 0.90)) {
          for (let j = i + 1; j < PARTICLE_COUNT; j += 4) {
            const p2 = particles[j];
            const dx = pt.x - p2.x;
            const dy = pt.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 85) {
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = p >= 0.58 && p < 0.78 ? '#FF6D00' : '#4285F4';
              ctx.globalAlpha = (1 - dist / 85) * 0.25;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      });

      if (p < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    onComplete();
  };

  const currentStage = STAGES[currentStageIndex] || STAGES[0];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#0A0C10] text-[#E2E2E8] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Dynamic Background Ambient Glow */}
      <div 
        className="absolute inset-0 opacity-25 transition-colors duration-1000 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentStage.color} 0%, transparent 65%)`
        }}
      />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Top Bar: Live Coordinates & Skip */}
      <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3 font-mono text-xs text-[#8C909F]">
          <span className="w-2 h-2 rounded-full bg-[#FF6D00] animate-ping" />
          <span>NAGPUR DATUM</span>
          <span className="text-white/30">•</span>
          <span className="text-white/70">{(progress * 100).toFixed(0)}%</span>
        </div>

        <button
          onClick={handleSkip}
          className="text-xs font-mono text-[#A8ABB9] hover:text-[#FF6D00] transition-all px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg hover:border-[#FF6D00]/40 cursor-pointer shadow-lg active:scale-95"
        >
          Skip Intro ➔
        </button>
      </div>

      {/* Center Cinematic Stage Typography */}
      <div className="relative z-20 w-full max-w-2xl px-6 text-center flex flex-col items-center justify-center min-h-[340px]">
        <AnimatePresence mode="wait">
          
          {/* STAGE 1: 0.0 - 0.18 */}
          {currentStageIndex === 0 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 1.04 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
                <span className="font-ams-manthan text-[#FF6D00] inline-block font-normal transform hover:scale-105 transition-transform mr-2">नमस्ते</span> Folks <span className="inline-block animate-bounce">👋</span>
              </h1>
              <p className="text-sm font-mono text-[#FF6D00] mt-4 uppercase tracking-[0.25em] font-semibold">
                Central India's Tech Heartbeat
              </p>
            </motion.div>
          )}

          {/* STAGE 2: 0.18 - 0.38 */}
          {currentStageIndex === 1 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 1.04 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              <span className="text-xs font-mono text-[#4285F4] px-3 py-1 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/30 mb-4 tracking-widest">
                ZERO MILE DATUM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                From the heart of India.
              </h2>
              <p className="text-xs font-mono text-[#8C909F] mt-3">
                GEOGRAPHIC CENTER • 21.1458° N, 79.0882° E
              </p>
            </motion.div>
          )}

          {/* STAGE 3: 0.38 - 0.58 */}
          {currentStageIndex === 2 && (
            <motion.div
              key="s3"
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 1.04 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              <span className="text-xs font-mono text-[#34A853] px-3 py-1 rounded-full bg-[#34A853]/10 border border-[#34A853]/30 mb-4 tracking-widest">
                DEEKSHABHOOMI HARMONY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                Rooted in heritage.
              </h2>
              <p className="text-xs font-mono text-[#A1E5B4] mt-3">
                Architectural Dome Symmetry × Microservices Architecture
              </p>
            </motion.div>
          )}

          {/* STAGE 4: 0.58 - 0.78 */}
          {currentStageIndex === 3 && (
            <motion.div
              key="s4"
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 1.04 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              <span className="text-xs font-mono text-[#FF6D00] px-3 py-1 rounded-full bg-[#FF6D00]/10 border border-[#FF6D00]/30 mb-4 tracking-widest">
                ORANGE CITY IDENTITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#FF6D00] via-[#FFA066] to-[#FFD0B3] tracking-tight">
                Born in the Orange City.
              </h2>
              <p className="text-xs font-mono text-[#8C909F] mt-3">
                Grassroots Propellant for Central India
              </p>
            </motion.div>
          )}

          {/* STAGE 5: 0.78 - 0.90 */}
          {currentStageIndex === 4 && (
            <motion.div
              key="s5"
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 1.04 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#FBBC04]">
                <span className="px-2.5 py-1 rounded-md bg-[#4285F4]/15 border border-[#4285F4]/30 text-[#4285F4]">LEARN</span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded-md bg-[#EA4335]/15 border border-[#EA4335]/30 text-[#EA4335]">BUILD</span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FBBC04]/15 border border-[#FBBC04]/30 text-[#FBBC04]">CONNECT</span>
                <span>•</span>
                <span className="px-2.5 py-1 rounded-md bg-[#34A853]/15 border border-[#34A853]/30 text-[#34A853]">GROW</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                Where culture meets technology.
              </h2>
              <p className="text-xs font-mono text-[#8C909F] mt-3">
                Connecting 5,000+ Builders & 18+ Tech Institutes
              </p>
            </motion.div>
          )}

          {/* STAGE 6: 0.90 - 1.0 */}
          {currentStageIndex === 5 && (
            <motion.div
              key="s6"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-[#4285F4] via-[#FF6D00] to-[#34A853] shadow-[0_0_50px_rgba(255,109,0,0.3)] mb-5 flex items-center justify-center overflow-hidden">
                <img
                  src="/GDG_logo.jpeg"
                  alt="GDG Nagpur Official Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                GDG Nagpur
              </h1>
              <p className="text-base font-display text-[#FF6D00] mt-2 font-bold tracking-wide">
                <span className="font-ams-manthan text-xl font-normal mr-1">नमस्ते</span> Folks 👋
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Continuous Timeline Progress Bar */}
      <div className="absolute bottom-10 z-20 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#FF6D00] via-[#4285F4] to-[#34A853] rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </motion.div>
  );
}
