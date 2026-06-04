'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRefPos = useRef({ x: 0, y: 0 });

  // Spring physics values
  const vx = useRef(0);
  const vy = useRef(0);
  const stiffness = 200; // custom spring stiffness
  const damping = 20;    // custom spring damping

  useEffect(() => {
    // Check if device supports hover (typically laptops/desktops, not mobile)
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!visible) {
        setVisible(true);
        // Initialize ring position to cursor position on first move to prevent long slide-in
        ringRefPos.current.x = e.clientX;
        ringRefPos.current.y = e.clientY;
      }
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Instant follow for dot
      if (dotRef.current) {
        const dotSize = hovered ? 20 : 12;
        dotRef.current.style.transform = `translate3d(${e.clientX - dotSize / 2}px, ${e.clientY - dotSize / 2}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hover]') ||
        target.closest('[role="button"]')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Spring calculation loop in requestAnimationFrame
    let animationFrameId: number;
    let lastTime = performance.now();

    const updateRing = (time: number) => {
      // Calculate delta time
      const dt = Math.min((time - lastTime) / 1000, 0.1); // cap dt at 100ms
      lastTime = time;

      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // Spring formula: force = (target - current) * stiffness
      const ax = (targetX - ringRefPos.current.x) * stiffness;
      const ay = (targetY - ringRefPos.current.y) * stiffness;

      // Update velocity: v += (force - damping * v) * dt
      vx.current += (ax - damping * vx.current) * dt;
      vy.current += (ay - damping * vy.current) * dt;

      // Update position: p += v * dt
      ringRefPos.current.x += vx.current * dt;
      ringRefPos.current.y += vy.current * dt;

      if (ringRef.current) {
        const ringSize = hovered ? 56 : 36;
        ringRef.current.style.transform = `translate3d(${ringRefPos.current.x - ringSize / 2}px, ${ringRefPos.current.y - ringSize / 2}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hovered, visible]);

  // If not visible, keep invisible
  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 bg-red rounded-full pointer-events-none z-[9999] transition-[width,height] duration-300 ease-out"
        style={{
          width: hovered ? '20px' : '12px',
          height: hovered ? '20px' : '12px',
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 border border-red rounded-full pointer-events-none z-[9999] transition-[width,height] duration-300 ease-out"
        style={{
          width: hovered ? '56px' : '36px',
          height: hovered ? '56px' : '36px',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
