'use client';

import { motion } from 'framer-motion';
import { workItems } from '@/lib/data';

type FilterType = 'all' | 'brand' | 'commercial' | 'social' | 'music' | 'doc';

interface WorkGridProps {
  activeFilter: FilterType;
}

export default function WorkGrid({ activeFilter }: WorkGridProps) {
  // Gradients for dark look per card
  const gradients = [
    'from-[#1a1a1a] to-[#060606]',
    'from-[#240c0e] to-[#060606]', // Reddish
    'from-[#0c1a24] to-[#060606]', // Bluish
    'from-[#13240c] to-[#060606]', // Greenish
    'from-[#1e0c24] to-[#060606]', // Purplish
    'from-[#241b0c] to-[#060606]', // Orangey
    'from-[#11241f] to-[#060606]', // Tealish
  ];

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1, 
      transition: { duration: 0.3 } 
    }
  };

  const playCircleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    hover: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] as const } 
    }
  };

  const detailsVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] as const } 
    }
  };

  return (
    <section className="w-full px-6 py-6 md:px-12 bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          {workItems.map((item) => {
            const isMatch = activeFilter === 'all' || item.category === activeFilter;
            const bgGradient = gradients[(item.id - 1) % gradients.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                animate={{
                  opacity: isMatch ? 1 : 0.15,
                  pointerEvents: isMatch ? 'auto' : 'none',
                }}
                whileHover="hover"
                className={`relative overflow-hidden group select-none w-full flex items-center justify-center bg-gradient-to-br ${bgGradient} border border-white/[0.03] ${
                  item.wide ? 'md:col-span-2 aspect-[16/9] md:aspect-[8/3]' : 'col-span-1 aspect-[4/3]'
                }`}
              >
                {/* Visual grid line overlay inside card for premium technical styling */}
                <div className="absolute inset-0 bg-scan-lines opacity-[0.15] z-0 pointer-events-none" />

                {/* Ambient Center Glow */}
                <div className="absolute w-[120px] h-[120px] bg-red/5 rounded-full blur-[40px] pointer-events-none z-0" />

                {/* Dark Vignette Overlay on Hover */}
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10 pointer-events-none"
                />

                {/* Center Play Icon */}
                <motion.div
                  variants={playCircleVariants}
                  className="absolute z-20 w-16 h-16 rounded-full border border-red bg-red/10 flex items-center justify-center text-red pointer-events-none"
                >
                  <svg className="w-5 h-5 fill-current translate-x-[1px]" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>

                {/* Card Title & Category Tag Bottom-Left */}
                <motion.div
                  variants={detailsVariants}
                  className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 text-left pointer-events-none"
                >
                  {/* Category in red Space Mono */}
                  <span className="font-mono text-[9px] md:text-[10px] text-red uppercase tracking-[0.2em] mb-1.5 block">
                    {item.brand ? `${item.brand} / ` : ''}{item.category}
                  </span>
                  
                  {/* Title in Bebas Neue */}
                  <h4 className="font-display text-2xl md:text-3xl text-white tracking-wide">
                    {item.title}
                  </h4>
                </motion.div>

                {/* Red edge-line detail on Hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-red scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left z-20 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
