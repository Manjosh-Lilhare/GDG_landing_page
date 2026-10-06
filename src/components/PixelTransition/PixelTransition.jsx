import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './PixelTransition.css';

export default function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 12,
  pixelColor = '#F57C00',
  animationStepDuration = 0.5,
  className = '',
  style = {},
  once = false,
  aspectRatio = '16/9'
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const [activeContent, setActiveContent] = useState('first');
  const [isMobile, setIsMobile] = useState(false);
  const isAnimatingRef = useRef(false);
  const hasTriggeredOnce = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const triggerTransition = (targetState) => {
    if (isAnimatingRef.current) return;
    if (once && hasTriggeredOnce.current) return;
    if (activeContent === targetState) return;

    const pixels = pixelGridRef.current ? Array.from(pixelGridRef.current.children) : [];
    if (!pixels.length) {
      setActiveContent(targetState);
      return;
    }

    isAnimatingRef.current = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setActiveContent(targetState);
      isAnimatingRef.current = false;
      if (once) hasTriggeredOnce.current = true;
      return;
    }

    // Shuffle pixel elements for organic matrix breakup
    const shuffledPixels = [...pixels].sort(() => Math.random() - 0.5);

    gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        if (once && targetState === 'second') {
          hasTriggeredOnce.current = true;
        }
      }
    })
      // Phase 1: Cover grid with pixels
      .to(shuffledPixels, {
        opacity: 1,
        duration: 0.04,
        stagger: {
          amount: animationStepDuration * 0.45,
          from: 'random'
        },
        ease: 'power2.inOut',
        onComplete: () => {
          setActiveContent(targetState);
        }
      })
      // Phase 2: Uncover grid to reveal new content
      .to(shuffledPixels, {
        opacity: 0,
        duration: 0.04,
        stagger: {
          amount: animationStepDuration * 0.45,
          from: 'random'
        },
        ease: 'power2.inOut'
      });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      triggerTransition('second');
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !once) {
      triggerTransition('first');
    }
  };

  const handleClick = () => {
    if (isMobile || once) {
      const nextState = activeContent === 'first' ? 'second' : 'first';
      triggerTransition(nextState);
    }
  };

  const totalCells = gridSize * gridSize;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          triggerTransition(activeContent === 'first' ? 'second' : 'first');
        }
      }}
      className={`pixel-transition-container cursor-target relative overflow-hidden select-none outline-none focus:ring-2 focus:ring-[#F57C00] ${className}`}
      style={{ aspectRatio, ...style }}
      data-cursor-color={pixelColor}
    >
      {/* Content Layer */}
      <div className="pixel-transition-content relative w-full h-full z-10">
        {activeContent === 'first' ? firstContent : secondContent}
      </div>

      {/* Pixel Grid Overlay */}
      <div
        ref={pixelGridRef}
        className="pixel-transition-grid absolute inset-0 z-20 pointer-events-none grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`
        }}
      >
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            className="pixel-cell opacity-0"
            style={{ backgroundColor: pixelColor }}
          />
        ))}
      </div>
    </div>
  );
}
