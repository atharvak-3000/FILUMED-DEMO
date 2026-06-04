'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[50vh] bg-black py-24 md:py-36 px-6 overflow-hidden flex flex-col items-center justify-center text-center border-b border-white/[0.03] select-none"
    >
      {/* Ghost background text "FILM" in Bebas Neue at 30vw size and 0.02 opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30vw] text-white pointer-events-none select-none opacity-[0.02] tracking-wider z-0 leading-none">
        FILM
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
      >
        {/* Red mono eyebrow */}
        <motion.span
          variants={itemVariants}
          className="font-mono text-xs md:text-sm text-red uppercase tracking-[0.25em] mb-6 block"
        >
          READY TO BE HEARD?
        </motion.span>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="font-display uppercase text-white mb-10 tracking-tight leading-none"
          style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}
        >
          {"LET'S BUILD "} <span className="text-red">SOMETHING.</span>
        </motion.h2>

        {/* Large red filled button */}
        <motion.div variants={itemVariants}>
          <a
            href="mailto:project@filumed.com?subject=New Project Proposal"
            className="btn-sweep px-8 py-4 md:px-10 md:py-5 bg-red text-white font-mono text-xs md:text-sm uppercase tracking-widest border border-red hover:border-white transition-colors duration-300 block"
          >
            START A PROJECT &rarr;
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
