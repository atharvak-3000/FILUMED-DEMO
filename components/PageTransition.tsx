'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const curtainVariants = {
  initial: {
    scaleY: 0,
    originY: '0%',
  },
  animate: {
    scaleY: [0, 1, 1, 0],
    originY: ['0%', '0%', '100%', '100%'],
    transition: {
      duration: 0.8,
      times: [0, 0.4, 0.6, 1],
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Instantly hide the page content when navigating
    setOpacity(0);
    
    // Fade it back in after the curtain covers the screen (0.4s delay)
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Red curtain overlay — animates on every route change */}
      <motion.div
        key={pathname + '-curtain'}
        variants={curtainVariants}
        initial="initial"
        animate="animate"
        style={{
          position: 'fixed',
          inset: 0,
          background: '#E8000D',
          zIndex: 9999,
          pointerEvents: 'none',
          transformOrigin: 'top',
        }}
      />

      {/* Page content wrapper with stable key to prevent Next.js App Router unmounting bugs */}
      <div
        style={{
          opacity: opacity,
          transition: 'opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
        }}
      >
        {children}
      </div>
    </>
  );
}
