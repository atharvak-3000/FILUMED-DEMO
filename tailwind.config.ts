import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: 'var(--red)',
        'red-dim': 'var(--red-dim)',
        black: 'var(--black)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        gray2: 'var(--gray2)',
      },
      fontFamily: {
        display: ['var(--font-bebas-neue)', 'sans-serif'],
        body: ['var(--font-barlow-condensed)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
