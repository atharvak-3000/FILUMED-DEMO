export interface Service {
  num: string;
  name: string;
}

export interface WorkItem {
  id: number;
  title: string;
  brand: string;
  category: 'brand' | 'commercial' | 'social' | 'music' | 'doc';
  wide: boolean;
}

export interface ReelItem {
  id: number;
  brand: string;
  name: string;
}

export const services: Service[] = [
  { num: '01', name: 'BRAND FILMS' },
  { num: '02', name: 'TV COMMERCIALS' },
  { num: '03', name: 'SOCIAL MEDIA REELS' },
  { num: '04', name: 'MUSIC VIDEOS' },
  { num: '05', name: 'DOCUMENTARY & FILM' },
  { num: '06', name: 'MOTION GRAPHICS & VFX' },
  { num: '07', name: 'EVENTS & INTERVIEWS' },
];

export const clients: string[] = [
  'NIKE',
  'PUMA',
  'ZARA',
  'RED BULL',
  'SAMSUNG',
  'SONY',
  'NETFLIX',
  'APPLE'
];

export const workItems: WorkItem[] = [
  { id: 1, title: 'SEASON OF THE BOLD', brand: 'NIKE', category: 'brand', wide: true },
  { id: 2, title: 'FEEL THE RUSH', brand: 'RED BULL', category: 'commercial', wide: false },
  { id: 3, title: 'SUMMER DROP', brand: 'ZARA', category: 'social', wide: false },
  { id: 4, title: 'MIDNIGHT NEON', brand: '', category: 'music', wide: false },
  { id: 5, title: 'THE CRAFT BEHIND THE LENS', brand: '', category: 'doc', wide: true },
  { id: 6, title: 'LAUNCH DAY', brand: 'SAMSUNG', category: 'brand', wide: false },
  { id: 7, title: 'NEW WAVE', brand: 'PUMA', category: 'commercial', wide: false },
];

export const reels: ReelItem[] = [
  { id: 1, brand: 'ZARA / SS25', name: 'SUMMER DROP REEL' },
  { id: 2, brand: 'RED BULL / SPORT', name: 'FEEL THE RUSH' },
  { id: 3, brand: 'NIKE / FW24', name: 'SEASON OF THE BOLD' },
  { id: 4, brand: 'SONY / AUDIO', name: 'PURE SOUND CAMPAIGN' },
  { id: 5, brand: 'SAMSUNG / TECH', name: 'LAUNCH DAY' },
];
