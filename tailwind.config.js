import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      colors: {
        lf: '#00aeef',
        asa: '#152c53',
        tig: '#B3272D',
        adv: '#f59433',
        math: '#002B49',
        fx5: '#ba9c75',
        wild: '#0d334c',
        yardzen: '#4e5a44',
        chestnut: {
          DEFAULT: '#BD584C',
          50: '#EED5D2',
          100: '#E9C7C3',
          200: '#DEABA5',
          300: '#D39088',
          400: '#C8746A',
          500: '#BD584C',
          600: '#994338',
          700: '#703129',
          800: '#471F1A',
          900: '#1E0D0B',
          950: '#090403',
        },
        bossanova: {
          DEFAULT: '#432951',
          50: '#A377BA',
          100: '#9A6AB3',
          200: '#8652A2',
          300: '#704487',
          400: '#59376C',
          500: '#432951',
          600: '#24162C',
          700: '#160E1B',
          800: '#110B14',
          900: '#0B070E',
          950: '#000000',
        },
      },
      fontFamily: {
        serif: 'Domine',
        hobo: 'BudgetHobo',
      },
      screens: {
        md: '810px',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        h1: {
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.4xl'),
        },
        h2: {
          fontFamily: theme('fontFamily.serif'),
        },
        h3: {
          fontFamily: theme('fontFamily.serif'),
        },
        h4: {
          fontFamily: theme('fontFamily.serif'),
        },
        h5: {
          fontFamily: theme('fontFamily.serif'),
        },
        h6: {
          fontFamily: theme('fontFamily.serif'),
        },
        a: {
          color: theme('colors.blue.600'),
        },
      });
    }),
  ],
};
