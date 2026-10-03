import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, MapPin, Zap, Globe, Cpu, Radio, ShieldCheck, ArrowDown } from 'lucide-react';

export default function SignatureMoment() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Scale and opacity transformations - Always visible (1.0), no blank dark voids
  const scale = useTransform(scrollYProgress, [0.0, 0.5, 1.0], [0.98, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0.0, 0.1, 0.9, 1.0], [1, 1, 1, 1]);

  // Phase 1 (0.0 to 0.33): ROOTED HERE
  const phase1Opacity = useTransform(scrollYProgress, [0.0, 0.25, 0.33], [1, 1, 0]);
  const phase1Scale = useTransform(scrollYProgress, [0.0, 0.25, 0.33], [1, 1, 1.06]);

  // Phase 2 (0.33 to 0.66): CONNECTED EVERYWHERE
  const phase2Opacity = useTransform(scrollYProgress, [0.33, 0.38, 0.58, 0.66], [0, 1, 1, 0]);
  const phase2Scale = useTransform(scrollYProgress, [0.33, 0.38, 0.58, 0.66], [0.94, 1, 1, 1.06]);

  // Phase 3 (0.66 to 1.0): GDG NAGPUR REVEAL
  const phase3Opacity = useTransform(scrollYProgress, [0.66, 0.72, 1.0], [0, 1, 1]);
  const phase3Scale = useTransform(scrollYProgress, [0.66, 0.72, 1.0], [0.94, 1, 1]);

  // Background Interactive Network Canvas inside Signature Moment
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const metroCities = [
      { name: 'MUMBAI', angle: -0.8 * Math.PI, dist: 240, color: '#4285F4' },
      { name: 'DELHI', angle: -0.2 * Math.PI, dist: 260, color: '#EA4335' },
      { name: 'BENGALURU', angle: 0.7 * Math.PI, dist: 250, color: '#34A853' },
      { name: 'HYDERABAD', angle: 0.3 * Math.PI, dist: 210, color: '#FBBC04' },
      { name: 'KOLKATA', angle: 0.05 * Math.PI, dist: 270, color: '#FF6D00' },
      { name: 'PUNE', angle: -0.65 * Math.PI, dist: 200, color: '#A1E5B4' }
    ];

    let time = 0;
    let animId;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw Orbit Radar Rings
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.strokeStyle = '#FF6D00';
      ctx.globalAlpha = 0.16;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 280, 0, Math.PI * 2);
      ctx.strokeStyle = '#4285F4';
      ctx.globalAlpha = 0.12;
      ctx.setLineDash([8, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Beams from Center Hub to Cities
      metroCities.forEach((city) => {
        const targetX = cx + Math.cos(city.angle) * city.dist;
        const targetY = cy + Math.sin(city.angle) * city.dist;

        // Laser Beam
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(targetX, targetY);
        ctx.strokeStyle = city.color;
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Traveling Light Pulse
        const progress = (time * 0.8 + city.angle) % 1;
        const pulseX = cx + (targetX - cx) * progress;
        const pulseY = cy + (targetY - cy) * progress;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
        ctx.fillStyle = city.color;
        ctx.globalAlpha = 0.95;
        ctx.fill();

        // City Node Point
        ctx.beginPath();
        ctx.arc(targetX, targetY, 6, 0, Math.PI * 2);
        ctx.fillStyle = city.color;
        ctx.globalAlpha = 0.85;
        ctx.fill();

        // City Label
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillStyle = '#C2C6D5';
        ctx.globalAlpha = 0.7;
        ctx.fillText(city.name, targetX + 10, targetY + 3);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[180vh] bg-[#0A0C10] flex flex-col justify-between overflow-hidden z-10 border-t border-b border-[#FF6D00]/30"
    >
      {/* =================================================================== */}
      {/* TOP CONNECTOR BANNER (BRIDGES PREVIOUS SECTION Seamlessly) */}
      {/* =================================================================== */}
      <div className="w-full bg-gradient-to-b from-[#12151C] to-[#0A0C10] py-4 px-6 border-b border-white/10 z-20 flex items-center justify-between font-mono text-xs text-[#8C909F]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6D00] animate-ping" />
          <span className="text-white font-bold tracking-wider">ENTERING ZERO MILE TELEMETRY HUB</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[#4285F4]">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>SCROLL TO UNLOCK NETWORK</span>
        </div>
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between p-6 overflow-hidden">

        {/* Network Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

        {/* Ambient Gradient Glows */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#FF6D00]/20 via-[#4285F4]/20 to-[#34A853]/20 blur-[130px] pointer-events-none z-0" />

        {/* TOP HEADER TELEMETRY BAR */}
        <div className="relative z-20 w-full max-w-6xl flex items-center justify-between pt-3 pb-2.5 border-b border-white/10 font-mono text-xs text-[#8C909F] backdrop-blur-md bg-black/40 px-4 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6D00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6D00]" />
            </span>
            <span className="text-white font-bold tracking-wider">NAGPUR CORE ARCHITECTURE</span>
            <span className="text-white/20">|</span>
            <span className="hidden sm:inline text-[#FF6D00] font-semibold">SYSTEM 01 • ZERO MILE ORIGIN</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-[#4285F4]">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>RADAR SCAN ACTIVE</span>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-bold">
              21.1458° N, 79.0882° E
            </span>
          </div>
        </div>

        {/* Corner Crosshair HUD Elements */}
        <div className="absolute top-20 left-8 font-mono text-[10px] text-white/30 pointer-events-none">+ CORNER_NW • DATUM_01</div>
        <div className="absolute top-20 right-8 font-mono text-[10px] text-white/30 pointer-events-none">+ CORNER_NE • RADAR_02</div>
        <div className="absolute bottom-20 left-8 font-mono text-[10px] text-white/30 pointer-events-none">+ CORNER_SW • HUB_03</div>
        <div className="absolute bottom-20 right-8 font-mono text-[10px] text-white/30 pointer-events-none">+ CORNER_SE • CIRCUIT_04</div>

        {/* CENTER MAIN CONTENT DISPLAY */}
        <motion.div style={{ scale, opacity }} className="relative z-10 w-full max-w-5xl px-6 text-center my-auto">

          {/* PHASE 1: ROOTED HERE */}
          <motion.div
            style={{ opacity: phase1Opacity, scale: phase1Scale }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="relative w-40 h-40 mb-5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#FF6D00]/50 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-[#4285F4]/40 border-dashed" />

              <div className="absolute top-2 font-mono text-[10px] text-[#FF6D00] font-bold">N</div>
              <div className="absolute bottom-2 font-mono text-[10px] text-[#FF6D00] font-bold">S</div>
              <div className="absolute left-2 font-mono text-[10px] text-[#FF6D00] font-bold">W</div>
              <div className="absolute right-2 font-mono text-[10px] text-[#FF6D00] font-bold">E</div>

              <div className="w-16 h-16 rounded-full bg-[#FF6D00]/25 border-2 border-[#FF6D00] flex flex-col items-center justify-center shadow-[0_0_35px_#FF6D00]">
                <MapPin className="w-7 h-7 text-[#FF6D00] animate-bounce" />
                <span className="font-mono text-[8px] text-white font-bold tracking-widest mt-0.5">0-MILE</span>
              </div>
            </div>

            <span className="font-mono text-xs text-[#FF6D00] uppercase tracking-[0.3em] mb-2.5 px-3.5 py-1 rounded-full bg-[#FF6D00]/15 border border-[#FF6D00]/40 font-semibold">
              THE GEOGRAPHIC ORIGIN
            </span>

            <h2 className="font-display font-extrabold text-5xl sm:text-7xl text-white tracking-tighter mb-3">
              ROOTED HERE.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#C2C6D5] max-w-md leading-relaxed">
              From Nagpur's Zero Mile Stone — the true geographic center of India.
            </p>

            <div className="flex items-center gap-4 mt-5">
              <div className="px-4 py-2 rounded-xl bg-[#161920] border border-white/10 text-left">
                <span className="font-mono text-[10px] text-[#8C909F] block">LATITUDE</span>
                <span className="font-mono text-sm text-white font-bold">21.1458° N</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#161920] border border-white/10 text-left">
                <span className="font-mono text-[10px] text-[#8C909F] block">LONGITUDE</span>
                <span className="font-mono text-sm text-white font-bold">79.0882° E</span>
              </div>
            </div>
          </motion.div>

          {/* PHASE 2: CONNECTED EVERYWHERE */}
          <motion.div
            style={{ opacity: phase2Opacity, scale: phase2Scale }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5 w-full max-w-3xl">
              <div className="p-4 rounded-2xl bg-[#161920]/90 backdrop-blur-md border border-[#4285F4]/40 text-left shadow-xl">
                <div className="flex items-center gap-2 mb-1.5 text-[#4285F4]">
                  <Network className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Central Hub</span>
                </div>
                <div className="font-display font-bold text-2xl text-white">18+</div>
                <div className="font-mono text-xs text-[#8C909F]">Tech Institutes</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#161920]/90 backdrop-blur-md border border-[#EA4335]/40 text-left shadow-xl">
                <div className="flex items-center gap-2 mb-1.5 text-[#EA4335]">
                  <Globe className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Network</span>
                </div>
                <div className="font-display font-bold text-2xl text-white">5,000+</div>
                <div className="font-mono text-xs text-[#8C909F]">Active Builders</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#161920]/90 backdrop-blur-md border border-[#FBBC04]/40 text-left shadow-xl">
                <div className="flex items-center gap-2 mb-1.5 text-[#FBBC04]">
                  <Cpu className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Corridors</span>
                </div>
                <div className="font-display font-bold text-2xl text-white">120+</div>
                <div className="font-mono text-xs text-[#8C909F]">Events / Sprints</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#161920]/90 backdrop-blur-md border border-[#34A853]/40 text-left shadow-xl">
                <div className="flex items-center gap-2 mb-1.5 text-[#34A853]">
                  <Zap className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Impact</span>
                </div>
                <div className="font-display font-bold text-2xl text-white">100%</div>
                <div className="font-mono text-xs text-[#8C909F]">Open Source</div>
              </div>
            </div>

            <span className="font-mono text-xs text-[#4285F4] uppercase tracking-[0.3em] mb-2.5 px-3.5 py-1 rounded-full bg-[#4285F4]/15 border border-[#4285F4]/40 font-semibold">
              THE RAILWAY & DATA NETWORK
            </span>

            <h2 className="font-display font-extrabold text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#FBBC04] to-[#34A853] tracking-tighter mb-3">
              CONNECTED EVERYWHERE.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#C2C6D5] max-w-lg leading-relaxed">
              Radiating innovation across Central India to global tech ecosystems.
            </p>
          </motion.div>

          {/* PHASE 3: GDG NAGPUR REVEAL */}
          <motion.div
            style={{ opacity: phase3Opacity, scale: phase3Scale }}
            className="flex flex-col items-center justify-center py-4"
          >
            <div className="relative mb-5">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FF6D00] via-[#4285F4] to-[#34A853] blur-2xl opacity-70 animate-pulse" />
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl p-1 bg-gradient-to-tr from-[#FF6D00] via-[#4285F4] to-[#34A853] shadow-2xl flex items-center justify-center overflow-hidden">
                <img src="/GDG_logo.jpeg" alt="GDG Nagpur Official Logo" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>

            <span className="font-mono text-xs text-[#34A853] uppercase tracking-[0.3em] mb-2.5 px-3.5 py-1 rounded-full bg-[#34A853]/15 border border-[#34A853]/40 font-semibold">
              COMMUNITY LANDMARK
            </span>

            <h2 className="font-display font-extrabold text-5xl sm:text-7xl text-white tracking-tight">
              GDG NAGPUR
            </h2>

            <p className="font-display font-bold text-2xl text-[#FF6D00] mt-2 flex items-center gap-2">
              <span className="font-ams-manthan text-3xl">नमस्ते</span> Folks 👋
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <span className="px-3.5 py-1.5 rounded-full bg-[#4285F4]/15 text-[#4285F4] border border-[#4285F4]/30 font-mono text-xs">#GoogleCloud</span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#EA4335]/15 text-[#EA4335] border border-[#EA4335]/30 font-mono text-xs">#AppliedAI</span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#FBBC04]/15 text-[#FBBC04] border border-[#FBBC04]/30 font-mono text-xs">#AndroidCompose</span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#34A853]/15 text-[#6DDD81] border border-[#34A853]/30 font-mono text-xs">#WebPerformance</span>
            </div>
          </motion.div>

        </motion.div>

        {/* BOTTOM FOOTER TELEMETRY BAR & MARQUEE */}
        <div className="relative z-20 w-full max-w-6xl pt-3 pb-3 border-t border-white/10 font-mono text-xs text-[#8C909F] backdrop-blur-md bg-black/40 px-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap max-w-xl">
            <ShieldCheck className="w-4 h-4 text-[#34A853] shrink-0" />
            <span className="text-white/90 font-bold uppercase tracking-wider">SYSTEM STATUS:</span>
            <span className="text-[#FF6D00] animate-pulse font-semibold">ORANGE CITY CIRCUIT ACTIVE</span>
            <span className="text-white/30">•</span>
            <span className="text-[#4285F4]">5,000+ DEVELOPERS CONNECTED</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-2.5 py-1 rounded-md bg-[#34A853]/15 border border-[#34A853]/40 text-[#34A853] font-bold text-[10px]">
              LATENCY: 1.2ms
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#FBBC04]/15 border border-[#FBBC04]/40 text-[#FBBC04] font-bold text-[10px]">
              BANDWIDTH: 100 Gbps
            </span>
          </div>
        </div>

      </div>

      {/* =================================================================== */}
      {/* BOTTOM CONNECTOR BANNER (BRIDGES NEXT SECTION Seamlessly) */}
      {/* =================================================================== */}
      <div className="w-full bg-gradient-to-t from-[#12151C] to-[#0A0C10] py-4 px-6 border-t border-white/10 z-20 flex items-center justify-between font-mono text-xs text-[#8C909F]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34A853] animate-pulse" />
          <span className="text-white font-bold tracking-wider">TRANSITIONING TO HERITAGE BLUEPRINT CIRCUIT</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[#34A853]">
          <span>INDIAN GEOMETRY MORPHING</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
