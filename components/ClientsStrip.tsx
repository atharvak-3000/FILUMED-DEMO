'use client';

import { motion } from 'framer-motion';
import { clients } from '@/lib/data';

export default function ClientsStrip() {
  return (
    <section className="w-full bg-black py-16 px-6 border-b border-white/[0.03] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Label */}
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8 select-none">
          TRUSTED BY BRANDS
        </div>

        {/* Brand Names List */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 max-w-5xl">
          {clients.map((brand) => (
            <motion.span
              key={brand}
              whileHover={{ 
                color: 'rgba(245, 245, 245, 0.7)',
                scale: 1.05,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="font-display text-[22px] md:text-2xl tracking-[0.15em] text-white/15 cursor-none select-none transition-colors duration-300"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
