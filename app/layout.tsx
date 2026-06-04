import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Bebas_Neue, Barlow_Condensed, Space_Mono } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';
import SiteFooter from '@/components/SiteFooter';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'FILUMED PRODUCTION | Brands talk. We make sure people listen.',
  description: 'FILUMED PRODUCTION is a premium media production agency creating high-impact brand films, commercial ads, social media reels, documentaries, and visual assets.',
  keywords: 'FILUMED, film production, media production agency, brand films, commercials, social reels, music videos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${spaceMono.variable} font-body bg-black text-white antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            <Suspense fallback={<div style={{ background: '#0a0a0a', minHeight: '100vh' }} />}>
              {children}
            </Suspense>
          </main>
        </PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
