'use client';

import { motion } from 'framer-motion';

type FilterType = 'all' | 'brand' | 'commercial' | 'social' | 'music' | 'doc';

interface FilterBarProps {
  activeFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export default function FilterBar({ activeFilter, setFilter }: FilterBarProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'ALL' },
    { value: 'brand', label: 'BRAND FILMS' },
    { value: 'commercial', label: 'COMMERCIALS' },
    { value: 'social', label: 'SOCIAL' },
    { value: 'music', label: 'MUSIC VIDEOS' },
    { value: 'doc', label: 'DOCUMENTARY' },
  ];

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-3 py-8 px-6 md:px-12 bg-black relative z-10">
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setFilter(filter.value)}
              className="relative font-mono text-[11px] uppercase tracking-widest px-5 py-3 border transition-colors duration-300 cursor-none select-none overflow-hidden"
              style={{
                borderColor: isActive ? 'var(--red)' : 'rgba(255, 255, 255, 0.12)',
                color: isActive ? 'var(--white)' : 'rgba(245, 245, 245, 0.6)',
              }}
            >
              {/* Sliding red background indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute inset-0 bg-red z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              {/* Button text (must sit on top of the indicator) */}
              <span className="relative z-10">{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
