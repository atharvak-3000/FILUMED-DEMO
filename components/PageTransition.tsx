'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const curtainVariants = {
  initial: {
    y: '-100%',
  },
  animate: {
    y: ['-100%', '0%', '0%', '100%'],
    transition: {
      duration: 0.8,
      times: [0, 0.4, 0.6, 1],
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Cache the children so that we can freeze rendering of the old page
  // during the first half of the transition animation.
  const [displayChildren, setDisplayChildren] = useState(children);
  const [curtainKey, setCurtainKey] = useState(0);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // 1. Pathname changed - trigger the curtain animation key
      setCurtainKey(prev => prev + 1);

      // 2. Freeze the displayChildren as the old page.
      // At t = 400ms (when the curtain fully covers the screen),
      // swap displayChildren to the new page content.
      const timer = setTimeout(() => {
        setDisplayChildren(children);
      }, 400);

      prevPathname.current = pathname;
      return () => clearTimeout(timer);
    } else {
      // Keep displayChildren in sync with children for hot reloading / other updates
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <>
      {/* Red curtain overlay — animates on every route change */}
      {curtainKey > 0 && (
        <motion.div
          key={curtainKey}
          variants={curtainVariants}
          initial="initial"
          animate="animate"
          style={{
            position: 'fixed',
            inset: 0,
            background: '#E8000D',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Page content wrapper with stable key to prevent Next.js App Router unmounting bugs */}
      <div>
        {displayChildren}
      </div>
    </>
  );
}
