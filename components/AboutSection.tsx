'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger reveal when section is 100px in viewport
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
    hidden: { opacity: 0, y: 40 },
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
      id="about"
      ref={ref}
      className="w-full bg-black py-20 px-6 md:py-32 md:px-12 flex justify-center items-center relative z-10 border-b border-white/[0.03]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
      >
        {/* Left Column */}
        <motion.div variants={itemVariants} className="flex flex-col justify-start">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-red mb-6 block">
            {"// WHO WE ARE"}
          </span>
          <h2 className="font-display text-[44px] sm:text-[54px] md:text-[68px] leading-[0.95] tracking-tight uppercase text-white">
            {"WE DON'T JUST SHOOT VIDEO."} <br />
            WE CRAFT <span className="text-red">SIGNALS.</span>
          </h2>
        </motion.div>

        {/* Right Column */}
        <motion.div variants={itemVariants} className="flex flex-col justify-between">
          <div className="space-y-6 mb-12">
            <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed tracking-wider">
              At FILUMED PRODUCTION, we operate at the intersection of cinema and culture. 
              We believe that in a saturated digital landscape, raw footage is not enough. 
              We combine deep editorial strategy with visual weight to build messages that refuse to be ignored.
            </p>
            <p className="font-body text-base md:text-lg text-white/50 leading-relaxed tracking-wider">
              We construct tailormade visual ecosystems for forward-thinking brands. 
              From global commercial campaigns to high-velocity social reels, our objective is to cut 
              through the static and make sure your frequency is heard loud and clear.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.06]">
            {/* Stat 1 */}
            <div>
              <div className="font-display text-5xl md:text-[56px] leading-none text-white mb-2 select-none">
                120<span className="text-red">+</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Projects Completed
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="font-display text-5xl md:text-[56px] leading-none text-white mb-2 select-none">
                40<span className="text-red">+</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Happy Clients
              </div>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="font-display text-5xl md:text-[56px] leading-none text-white mb-2 select-none">
                5<span className="text-red">+</span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Years Active
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
