import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

export default function TargetCursor({
  targetSelector = '.cursor-target',
  spinDuration = 2.5,
  cursorColor = '#ffffff',
  cursorColorOnTarget = '#F57C00',
  parallaxOn = true,
  active = true
}) {
  const wrapperRef = useRef(null);
  const dotRef = useRef(null);
  const bracketsRef = useRef(null);
  const labelRef = useRef(null);
  const spinRef = useRef(null);

  // Corner bracket refs
  const tlRef = useRef(null);
  const trRef = useRef(null);
  const blRef = useRef(null);
  const brRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [specialType, setSpecialType] = useState(null);

  // GSAP position quickTo setters
  const xTo = useRef(null);
  const yTo = useRef(null);

  // State refs
  const targetElRef = useRef(null);
  const isLockedRef = useRef(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const spinTween = useRef(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Main Cursor Initialization & GSAP Setup
  useEffect(() => {
    if (isMobile || !active) return;

    // Add body class to hide native cursor on desktop
    document.body.classList.add('custom-cursor-active');

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // QuickTo for high 60fps tracking without React re-renders
    xTo.current = gsap.quickTo(wrapper, 'x', { duration: 0.15, ease: 'power2.out' });
    yTo.current = gsap.quickTo(wrapper, 'y', { duration: 0.15, ease: 'power2.out' });

    // Idle rotation animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && spinRef.current) {
      spinTween.current = gsap.to(spinRef.current, {
        rotation: 360,
        duration: spinDuration,
        repeat: -1,
        ease: 'none'
      });
    }

    // Initial intentional entry sequence: Fade & expand from small point
    gsap.fromTo(
      wrapper,
      { scale: 0.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
    );

    let currentTarget = null;

    const updateTargetLock = (x, y) => {
      if (!currentTarget || !document.body.contains(currentTarget)) {
        if (isLockedRef.current) {
          releaseTarget();
        }
        return;
      }

      const rect = currentTarget.getBoundingClientRect();
      const padding = 6;

      const targetX = rect.left + rect.width / 2;
      const targetY = rect.top + rect.height / 2;

      // Parallax effect
      let offsetX = 0;
      let offsetY = 0;
      if (parallaxOn && !prefersReducedMotion) {
        offsetX = (x - targetX) * 0.12;
        offsetY = (y - targetY) * 0.12;
      }

      // Smoothly position wrapper at target center + parallax
      xTo.current(targetX + offsetX);
      yTo.current(targetY + offsetY);

      // Expand 4 corner brackets to lock onto bounding rect
      const halfW = rect.width / 2 + padding;
      const halfH = rect.height / 2 + padding;

      gsap.to(tlRef.current, { x: -halfW, y: -halfH, duration: 0.2, ease: 'power2.out' });
      gsap.to(trRef.current, { x: halfW, y: -halfH, duration: 0.2, ease: 'power2.out' });
      gsap.to(blRef.current, { x: -halfW, y: halfH, duration: 0.2, ease: 'power2.out' });
      gsap.to(brRef.current, { x: halfW, y: halfH, duration: 0.2, ease: 'power2.out' });
    };

    const lockTarget = (el, x, y) => {
      currentTarget = el;
      targetElRef.current = el;
      isLockedRef.current = true;

      // Pause rotation & align brackets horizontally
      if (spinTween.current) {
        spinTween.current.pause();
        gsap.to(spinRef.current, { rotation: 0, duration: 0.2 });
      }

      // Check special attributes
      const special = el.getAttribute('data-cursor-type');
      setSpecialType(special || null);

      // Color transition to Nagpur Orange (#F57C00) or custom accent
      const customColor = el.getAttribute('data-cursor-color') || cursorColorOnTarget;

      const elementsToColor = [tlRef.current, trRef.current, blRef.current, brRef.current].filter(Boolean);
      gsap.to(elementsToColor, {
        borderColor: customColor,
        duration: 0.2
      });
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          backgroundColor: customColor,
          duration: 0.2
        });
      }

      updateTargetLock(x, y);
    };

    const releaseTarget = () => {
      currentTarget = null;
      targetElRef.current = null;
      isLockedRef.current = false;
      setSpecialType(null);

      // Return corner brackets to default idle square
      const defaultSize = 12;
      const elementsToMove = [
        { ref: tlRef.current, x: -defaultSize, y: -defaultSize },
        { ref: trRef.current, x: defaultSize, y: -defaultSize },
        { ref: blRef.current, x: -defaultSize, y: defaultSize },
        { ref: brRef.current, x: defaultSize, y: defaultSize }
      ];

      elementsToMove.forEach(({ ref, x, y }) => {
        if (ref) gsap.to(ref, { x, y, duration: 0.25, ease: 'power2.out' });
      });

      // Transition color back to white
      const elementsToColor = [tlRef.current, trRef.current, blRef.current, brRef.current].filter(Boolean);
      gsap.to(elementsToColor, {
        borderColor: cursorColor,
        duration: 0.25
      });
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          backgroundColor: cursorColor,
          duration: 0.25
        });
      }

      // Resume idle spin rotation
      if (spinTween.current && !prefersReducedMotion) {
        spinTween.current.resume();
      }
    };

    const handlePointerMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const targetElement = e.target && e.target.closest ? e.target.closest(targetSelector) : null;

      if (targetElement) {
        if (targetElement !== currentTarget) {
          lockTarget(targetElement, e.clientX, e.clientY);
        } else {
          updateTargetLock(e.clientX, e.clientY);
        }
      } else {
        if (isLockedRef.current) {
          releaseTarget();
        }
        xTo.current(e.clientX);
        yTo.current(e.clientY);
      }
    };

    const handleScrollOrResize = () => {
      if (isLockedRef.current && currentTarget) {
        updateTargetLock(mousePos.current.x, mousePos.current.y);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (spinTween.current) spinTween.current.kill();
    };
  }, [isMobile, active, targetSelector, spinDuration, cursorColor, cursorColorOnTarget, parallaxOn]);

  if (isMobile || !active) return null;

  return (
    <div ref={wrapperRef} className="target-cursor-wrapper">
      {/* Center Dot */}
      <div
        ref={dotRef}
        className={`target-cursor-dot ${specialType ? `special-${specialType}` : ''}`}
      />

      {/* Rotating Brackets Container */}
      <div ref={spinRef} className="target-cursor-spin-container">
        <div ref={tlRef} className="target-cursor-corner corner-tl" />
        <div ref={trRef} className="target-cursor-corner corner-tr" />
        <div ref={blRef} className="target-cursor-corner corner-bl" />
        <div ref={brRef} className="target-cursor-corner corner-br" />
      </div>

      {/* Special Heritage Effect Overlays */}
      {specialType === 'futala' && (
        <div className="target-cursor-ripple animate-ping" />
      )}
    </div>
  );
}
