import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Montserrat"', '"Raleway"', 'sans-serif']
      },
      colors: {
        accent: '#FACC15'
      }
    }
  },
  plugins: []
};

export default config;
