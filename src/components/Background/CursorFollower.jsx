import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full mix-blend-screen hidden sm:block"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 350,
        mass: 0.1
      }}
      style={{
        width: 40,
        height: 40,
        background: 'radial-gradient(circle, rgba(255,109,0,0.4) 0%, rgba(66,133,244,0.15) 60%, transparent 100%)',
        boxShadow: '0 0 25px rgba(255,109,0,0.3)',
        border: '1px solid rgba(255,109,0,0.3)'
      }}
    />
  );
}
