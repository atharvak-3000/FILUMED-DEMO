import React from 'react';

export default function MarqueeBand() {
  const items = [
    'BRAND FILMS',
    'SOCIAL REELS',
    'TV COMMERCIALS',
    'MUSIC VIDEOS',
    'DOCUMENTARY',
    'MOTION GRAPHICS',
    'EVENTS',
  ];

  // Double items to create a seamless infinite loop
  const doubledItems = [...items, ...items];

  return (
    <div className="w-full bg-red py-4 overflow-hidden border-y border-red-dim relative z-10 select-none">
      <div className="flex whitespace-nowrap min-w-full animate-marquee">
        {doubledItems.map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="font-display text-base text-white tracking-[4px]">
              {item}
            </span>
            <span className="mx-8 text-[10px] text-red-dim">
              ●
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
