import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Absolute Colors
        white: '#FFF',
        black: '#000',

        // Orange Shades (Primary Colors)
        orange: {
          50: '#FF9500', // #FF9500
          70: '#FF8F66', // #FF8F66
          75: '#FFCA80', // #FFCA80
          80: '#FFD499', // #FFD499
          90: '#FFEACC', // #FFEACC
          95: '#FFF4E5', // #FFF4E5
          97: '#FFF9F0', // #FFF9F0
          99: '#FFFDFA', // #FFFDFA
        },
        // White Shades (Light Colors)
        light: {
          90: '#E4E4E7', // #E4E4E7
          95: '#F1F1F3', // #F1F1F3
          97: '#F7F7F8', // #F7F7F8
          99: '#FCFCFD', // #FCFCFD
        },

        // Grey Shades (Dark Colors)
        grey: {
          10: '#191919', // #191919
          15: '#262626', // #262626
          20: '#333333', // #333333
          30: '#4C4C4D', // #4C4C4D
          35: '#59595A', // #59595A
          40: '#656567', // #656567
          60: '#89898A', // #89898A
          70: '#B3B3B3', // #B3B3B3
        },

        // Theme colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
