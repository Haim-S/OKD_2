/** @type {import('tailwindcss').Config} */
// import { getMyTextColor } from './src/components/accessibility/Accessibility.jsx';

// const myValue = getMyTextColor();

const istrue = false;
const color = istrue ? "yellow" : "black";

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        textmain: color,
      },
      // class:{
      //   contactStyleHe: 'flex items-end justify-end tracking-widest text-[#4A4A4A]',
      //   contactStyleEn: 'py-2 tracking-widest text-[#4A4A4A]'
      // }
    },
  },
  plugins: [],
}
