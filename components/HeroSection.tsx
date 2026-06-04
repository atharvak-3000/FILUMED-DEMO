'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const lineAnimate = {
    initial: { y: '100%' },
    animate: (delay: number) => ({
      y: 0,
      transition: {
        duration: 0.95,
        delay,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  };

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden bg-black pt-[100px] pb-[60px] px-4 md:px-12">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-50" />
      <div className="absolute inset-0 z-0 bg-noise opacity-[0.04] pointer-events-none" />

      {/* Red 3px vertical accent line on the far left animating height: 0 -> 340px */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 340 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] as const }}
        className="absolute left-3 md:left-12 top-[80px] md:top-[120px] w-[2px] md:w-[3px] bg-red origin-top z-10"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center mt-16 md:mt-8">
        
        {/* 1. Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] as const }}
          className="font-mono text-[10px] md:text-[11px] text-red uppercase tracking-[2px] md:tracking-[5px] text-center px-4 mb-8 select-none"
        >
          FILUMED PRODUCTION — EST. 2019
        </motion.div>

        {/* 2. Main Headline */}
        <h1 
          className="font-display tracking-tight uppercase mb-8 select-none text-white text-center w-full"
          style={{ fontSize: 'clamp(36px, 8vw, 76px)', lineHeight: '1.05' }}
        >
          <div className="overflow-hidden block py-1">
            <motion.span
              variants={lineAnimate}
              initial="initial"
              animate="animate"
              custom={0.5}
              className="block text-white"
            >
              BRANDS TALK.
            </motion.span>
          </div>
          <div className="overflow-hidden block py-1">
            <motion.span
              variants={lineAnimate}
              initial="initial"
              animate="animate"
              custom={0.65}
              className="block text-red"
            >
              WE MAKE PEOPLE LISTEN.
            </motion.span>
          </div>
        </h1>

        {/* 3. Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.76, 0, 0.24, 1] as const }}
          className="font-body text-[15px] md:text-[18px] uppercase tracking-[1px] md:tracking-[2px] text-white/55 text-center max-w-[560px] mx-auto px-4 md:px-0 mb-[52px] leading-relaxed"
        >
          A creative video agency built to make your brand impossible to ignore.
        </motion.p>

        {/* 4. CTA Row (Touching, no border-radius, side-by-side) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-6 sm:px-0 sm:max-w-[540px]"
        >
          {/* Left Button — VIEW OUR WORK */}
          <Link
            href="/work"
            className="btn-sweep w-full sm:w-auto flex-1 text-center py-[14px] px-6 sm:py-[12px] sm:px-11 bg-red text-white font-mono text-[12px] uppercase tracking-[3px] border-2 border-red hover:border-white transition-colors duration-300 rounded-none z-10 select-none"
          >
            VIEW OUR WORK &rarr;
          </Link>

          {/* Right Button — EXPLORE SERVICES */}
          <Link
            href="#services"
            className="btn-sweep-red w-full sm:w-auto flex-1 text-center py-[14px] px-6 sm:py-[12px] sm:px-11 bg-transparent text-white font-mono text-[12px] uppercase tracking-[3px] border-none hover:border-red transition-colors duration-300 rounded-none z-10 select-none"
          >
            EXPLORE SERVICES
          </Link>
        </motion.div>

        {/* 5. Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
          className="mt-16 flex flex-col items-center gap-2 hidden md:flex"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
            className="w-[1px] bg-white opacity-20"
          />
          <span className="font-mono text-[9px] uppercase text-white/30 tracking-[4px] select-none">
            SCROLL
          </span>
        </motion.div>

      </div>
    </section>
  );
}
