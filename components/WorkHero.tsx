'use client';

import { motion } from 'framer-motion';

export default function WorkHero() {
  const wordAnimate = {
    initial: { y: '100%' },
    animate: (delay: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-[40vh] w-full bg-black flex flex-col justify-end px-6 pb-10 md:px-16 lg:px-24 md:pb-16 pt-32 overflow-hidden border-b border-white/[0.03]">
      {/* Background scan lines */}
      <div className="absolute inset-0 z-0 bg-scan-lines pointer-events-none opacity-40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="font-mono text-xs md:text-sm text-red uppercase tracking-[0.25em] mb-4 block"
        >
          #OUR WORK
        </motion.span>

        {/* Stacked Headline */}
        <h1 className="font-display text-[64px] sm:text-[84px] md:text-[104px] lg:text-[120px] leading-[0.9] tracking-tight uppercase select-none flex flex-col sm:flex-row sm:gap-x-4">
          <span className="overflow-hidden block py-0.5">
            <motion.span
              variants={wordAnimate}
              initial="initial"
              animate="animate"
              custom={0.3}
              className="block text-white"
            >
              THE
            </motion.span>
          </span>
          <span className="overflow-hidden block py-0.5">
            <motion.span
              variants={wordAnimate}
              initial="initial"
              animate="animate"
              custom={0.45}
              className="block text-white"
            >
              REEL
            </motion.span>
          </span>
          <span className="overflow-hidden block py-0.5">
            <motion.span
              variants={wordAnimate}
              initial="initial"
              animate="animate"
              custom={0.6}
              className="block text-red"
            >
              STUFF.
            </motion.span>
          </span>
        </h1>
      </div>
    </section>
  );
}
