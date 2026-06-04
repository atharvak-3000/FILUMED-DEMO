'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturedReelProps {
  videoUrl?: string;
}

export default function FeaturedReel({ videoUrl }: FeaturedReelProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Default to a premium cinematic Vimeo showcase video if no URL is provided
  const embedUrl = videoUrl || 'https://player.vimeo.com/video/927237039';

  return (
    <section className="w-full px-6 py-12 md:px-12 md:py-16 bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[16/7] min-h-[340px] md:min-h-[450px] bg-gradient-to-br from-[#1a0000] to-[#0a0a0a] border border-white/[0.06] overflow-hidden flex items-center justify-center group">
          
          <AnimatePresence>
            {!isPlaying ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                {/* Overlapping vertical line texture */}
                <div
                  className="absolute inset-0 z-0 opacity-30"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(232, 0, 13, 0.08) 1px, transparent 1px)',
                    backgroundSize: '24px 100%',
                  }}
                />

                {/* Ambient glow in background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Bottom-left overlay */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 text-left">
                  <span className="font-mono text-[10px] md:text-xs text-red uppercase tracking-[0.2em] mb-2 block">
                    FILUMED PRODUCTION
                  </span>
                  <h3 className="font-display text-3xl md:text-[42px] leading-none text-white tracking-wide">
                    SHOWREEL 2025
                  </h3>
                </div>

                {/* Centered red-bordered circle play button (80px) */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full border border-red flex items-center justify-center bg-black/50 group/play cursor-none"
                  aria-label="Play Showreel"
                >
                  {/* Hover sweep/fill background */}
                  <div className="absolute inset-0 rounded-full bg-red scale-0 group-hover/play:scale-100 transition-transform duration-350 ease-out origin-center z-0" />
                  
                  {/* SVG Play Icon */}
                  <svg
                    className="w-6 h-6 text-white group-hover/play:text-black transition-colors duration-300 relative z-10 translate-x-[2px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full z-20"
              >
                {/* Inline Iframe */}
                <iframe
                  src={`${embedUrl}?autoplay=1&autopause=0`}
                  className="w-full h-full border-none"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="FILUMED PRODUCTION Showreel"
                />

                {/* Close Button overlay */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-30 px-3 py-1.5 bg-black/85 text-red hover:text-white font-mono text-[10px] uppercase tracking-widest border border-white/10 hover:border-red transition-colors duration-300 cursor-none"
                >
                  CLOSE VIDEO
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
