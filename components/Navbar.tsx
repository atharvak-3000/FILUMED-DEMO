'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);
    
    // Also check on scroll to see if we scrolled past sections
    const handleScroll = () => {
      const aboutSec = document.getElementById('about');
      const servicesSec = document.getElementById('services');
      const scrollPos = window.scrollY + 200;

      if (servicesSec && scrollPos >= servicesSec.offsetTop) {
        setActiveHash('#services');
      } else if (aboutSec && scrollPos >= aboutSec.offsetTop) {
        setActiveHash('#about');
      } else {
        if (pathname === '/') {
          setActiveHash('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/work' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && activeHash === '';
    }
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      return pathname === '/' && activeHash === hash;
    }
    return pathname === href;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-5 md:px-12 md:py-6 flex items-center justify-between"
      style={{
        background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.5) 70%, transparent 100%)',
      }}
    >
      {/* Left: Logo */}
      <Link href="/" className="group flex items-center">
        <span className="font-display text-[28px] text-white tracking-wider transition-colors duration-300">
          FILUMED
        </span>
        <span className="font-display text-[28px] text-red">.</span>
      </Link>

      {/* Right: Nav Links + CTA */}
      <div className="flex items-center gap-8 md:gap-12">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 relative py-1 ${
                    active ? 'text-red' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-red"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <a
          href="mailto:contact@filumed.com"
          className="btn-sweep px-5 py-2.5 bg-red text-white font-mono text-[11px] uppercase tracking-widest border border-red hover:border-white transition-colors duration-300"
        >
          Get In Touch
        </a>
      </div>
    </motion.nav>
  );
}
