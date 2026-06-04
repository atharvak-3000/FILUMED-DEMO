'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '@/lib/data';

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for hover effects on individual rows
  const rowVariants = {
    initial: { paddingLeft: '0px' },
    hover: { 
      paddingLeft: '16px',
      transition: { duration: 0.3, ease: 'easeOut' as const }
    }
  };

  const bgSweepVariants = {
    initial: { scaleX: 0 },
    hover: { 
      scaleX: 1,
      transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] as const }
    }
  };

  const arrowVariants = {
    initial: { opacity: 0, x: -10 },
    hover: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' as const }
    }
  };

  return (
    <section
      id="services"
      ref={ref}
      className="w-full bg-black py-20 px-6 md:py-32 md:px-12 flex justify-center items-center relative z-10 border-b border-white/[0.03]"
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
          className="font-display leading-none uppercase mb-16 tracking-tight text-white select-none"
          style={{ fontSize: 'clamp(60px, 7vw, 120px)' }}
        >
          WHAT WE <span className="text-red">DO</span>
        </motion.h2>

        {/* Services Rows List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col border-t border-white/[0.08]"
        >
          {services.map((service) => (
            <motion.div
              key={service.num}
              variants={rowVariants}
              initial="initial"
              whileHover="hover"
              className="relative overflow-hidden w-full border-b border-white/[0.08] py-6 md:py-8 flex items-center group"
            >
              {/* Background Red Tint Sweep */}
              <motion.div
                variants={bgSweepVariants}
                className="absolute inset-0 bg-red/[0.06] z-0 origin-left"
              />

              {/* Row Content Container */}
              <div className="relative z-10 flex items-center w-full justify-between pr-4">
                <div className="flex items-center">
                  {/* Fixed 60px width number */}
                  <span className="font-mono text-xs md:text-sm text-red w-[60px] block shrink-0 select-none">
                    {service.num}
                  </span>
                  
                  {/* Service name */}
                  <span
                    className="font-display leading-none tracking-wide text-white group-hover:text-red transition-colors duration-300 select-none"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
                  >
                    {service.name}
                  </span>
                </div>

                {/* Hover Arrow */}
                <motion.span
                  variants={arrowVariants}
                  className="font-mono text-2xl md:text-3xl text-red block mr-2"
                >
                  &rarr;
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
