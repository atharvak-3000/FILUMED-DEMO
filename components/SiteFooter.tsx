import Link from 'next/link';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-12 md:px-12 md:py-10 border-t border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <span className="font-display text-[22px] text-white tracking-wider">
            FILUMED
          </span>
          <span className="font-display text-[22px] text-red">.</span>
        </div>

        {/* Center: Nav links (Space Mono 10px) */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300"
          >
            Work
          </Link>
        </div>

        {/* Right: Copyright (Space Mono 10px) */}
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 text-center md:text-right">
          &copy; {currentYear} FILUMED PRODUCTION. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
