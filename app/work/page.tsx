'use client';

import { useState } from 'react';
import WorkHero from '@/components/WorkHero';
import FeaturedReel from '@/components/FeaturedReel';
import FilterBar from '@/components/FilterBar';
import WorkGrid from '@/components/WorkGrid';
import ReelsStrip from '@/components/ReelsStrip';
import CtaSection from '@/components/CtaSection';

type FilterType = 'all' | 'brand' | 'commercial' | 'social' | 'music' | 'doc';

export default function WorkPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <div className="bg-black text-white min-h-screen">
      {/* 40vh Header with animated typography */}
      <WorkHero />

      {/* Cinematic Vimeo/YouTube Showcase Showreel */}
      <FeaturedReel />

      {/* Navigation Filter Segment Controls */}
      <FilterBar activeFilter={filter} setFilter={setFilter} />

      {/* 3-Column Responsive Work Cards Grid */}
      <WorkGrid activeFilter={filter} />

      {/* Horizontal Carousel for Social Reels/Clips */}
      <ReelsStrip />

      {/* Watermarked Call to Action footer block */}
      <CtaSection />
    </div>
  );
}
