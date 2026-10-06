'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import './PixelTransition.css';

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = '100%',
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);
  const defaultRef = useRef(null);
  const activeRef = useRef(null);
  const pixelGridRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches);

  const buildSquarePixelGrid = useCallback(() => {
    const container = containerRef.current;
    const pixelGridEl = pixelGridRef.current;
    if (!container || !pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    const rect = container.getBoundingClientRect();
    const width = rect.width || 300;
    const height = rect.height || 300;

    // Calculate columns & rows to ensure pixel blocks are true 1:1 squares
    const targetPixelSize = Math.max(12, width / (gridSize * 1.5));
    const cols = Math.max(1, Math.ceil(width / targetPixelSize));
    const rows = Math.max(1, Math.ceil(height / targetPixelSize));

    const pixelW = 100 / cols;
    const pixelH = 100 / rows;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.style.backgroundColor = pixelColor;
        pixel.style.width = `calc(${pixelW}% + 0.5px)`;
        pixel.style.height = `calc(${pixelH}% + 0.5px)`;
        pixel.style.left = `${col * pixelW}%`;
        pixel.style.top = `${row * pixelH}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  useEffect(() => {
    buildSquarePixelGrid();

    const handleResize = () => {
      buildSquarePixelGrid();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [buildSquarePixelGrid]);

  const animatePixels = activate => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const defaultEl = defaultRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !defaultEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    // Step 1: Pixels fill the grid randomly
    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    // Step 2: At midpoint (when screen is covered by pixels), swap content visibility to prevent text overlap
    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      if (activate) {
        defaultEl.style.display = 'none';
        activeEl.style.display = 'block';
        activeEl.style.pointerEvents = '';
      } else {
        activeEl.style.display = 'none';
        defaultEl.style.display = 'block';
        defaultEl.style.pointerEvents = '';
      }
    });

    // Step 3: Pixels disappear randomly to reveal the new content
    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleEnter = () => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = () => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = () => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  return (
    <div
      ref={containerRef}
      className={`pixelated-image-card ${className}`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      {aspectRatio !== '0%' && <div style={{ paddingTop: aspectRatio }} />}
      <div className="pixelated-image-card__default" ref={defaultRef} aria-hidden={isActive}>
        {firstContent}
      </div>
      <div className="pixelated-image-card__active" ref={activeRef} aria-hidden={!isActive}>
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
}

export default PixelTransition;
