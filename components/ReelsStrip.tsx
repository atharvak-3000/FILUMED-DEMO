'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { reels } from '@/lib/data';

export default function ReelsStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 340; // reel card width
      const gap = 24; // gap-6 is 24px
      const scrollAmount = (cardWidth + gap) * 2; // scroll two cards at a time
      
      const container = scrollRef.current;
      const target = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

      container.scrollTo({
        left: target,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full bg-black py-20 px-6 md:py-28 md:px-12 relative z-10 border-b border-white/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] leading-none uppercase tracking-tight text-white select-none">
            SOCIAL <span className="text-red">CUTS</span>
          </h2>

          {/* Left/Right Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-red hover:bg-red text-white hover:text-black transition-all duration-300 cursor-none select-none rounded-none"
              aria-label="Scroll Left"
            >
              &larr;
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-red hover:bg-red text-white hover:text-black transition-all duration-300 cursor-none select-none rounded-none"
              aria-label="Scroll Right"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Reels Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth w-full py-4 cursor-none select-none no-scrollbar"
        >

          {reels.map((reel, idx) => {
            const gradients = [
              'from-[#240c0e] to-[#0a0a0a]', // Reddish
              'from-[#0c1a24] to-[#0a0a0a]', // Bluish
              'from-[#1e0c24] to-[#0a0a0a]', // Purplish
              'from-[#11241f] to-[#0a0a0a]', // Tealish
              'from-[#241a0c] to-[#0a0a0a]', // Orangey
            ];
            const bgGradient = gradients[idx % gradients.length];

            return (
              <div
                key={reel.id}
                className="w-[340px] shrink-0 flex flex-col group"
              >
                {/* Thumbnail Aspect 9:16 */}
                <motion.div
                  whileHover="hover"
                  className={`w-full aspect-[9/16] bg-gradient-to-b ${bgGradient} border border-white/[0.06] relative overflow-hidden flex items-center justify-center transition-all duration-350 hover:border-red/40`}
                >
                  {/* Subtle Scan Lines */}
                  <div className="absolute inset-0 bg-scan-lines opacity-[0.2] z-0 pointer-events-none" />

                  {/* Play circle fades in */}
                  <motion.div
                    variants={{
                      initial: { scale: 0.8, opacity: 0 },
                      hover: { scale: 1, opacity: 1 }
                    }}
                    initial="initial"
                    className="w-14 h-14 rounded-full border border-red bg-red/10 flex items-center justify-center text-red z-10 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 fill-current translate-x-[1px]" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>

                  {/* Top-right Reel Label */}
                  <div className="absolute top-4 right-4 bg-red/10 border border-red/20 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-red">
                    9:16 REEL
                  </div>
                </motion.div>

                {/* Details below thumbnail */}
                <div className="mt-4 text-left pl-1">
                  <span className="font-mono text-[9px] text-red uppercase tracking-[0.2em] mb-1 block">
                    {reel.brand}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide uppercase">
                    {reel.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
