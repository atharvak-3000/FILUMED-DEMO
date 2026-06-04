'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Page content animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }}
        >
          {children}
        </motion.div>

        {/* 
          Entry Overlay: 
          When the page mounts, it scales down from 1 to 0. 
          Its origin is top (0), causing it to slide up and disappear.
        */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-red pointer-events-none z-[9999]"
          style={{ originY: 0 }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }}
        />

        {/* 
          Exit Overlay: 
          When the page exits, it scales up from 0 to 1.
          Its origin is bottom (1), causing it to slide up from the bottom and cover the screen.
        */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-red pointer-events-none z-[9999]"
          style={{ originY: 1 }}
          initial={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
