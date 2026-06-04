'use client';

import { motion, AnimatePresence } from 'framer-motion';
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

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.5, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' as const },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Red curtain overlay — animates on every route change */}
      <AnimatePresence mode="wait">
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
      </AnimatePresence>

      {/* Page content fades in after curtain drops */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
