const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        lf: '#00aeef',
        asa: '#152c53',
        int: '#B3272D',
        adv: '#f59433',
        math: '#002B49',
        fx5: '#ba9c75',
        wild: '#0d334c',
      },
      fontFamily: {
        serif: 'Domine',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.4xl'), 
        },
        'h2': {
          fontFamily: theme('fontFamily.serif'),
        },
        'h3': {
          fontFamily: theme('fontFamily.serif'),
        },
        'h4': {
          fontFamily: theme('fontFamily.serif'),
        },
        'h5': {
          fontFamily: theme('fontFamily.serif'),
        },
        'h6': {
          fontFamily: theme('fontFamily.serif'),
        },
        'a': {
          color: theme('colors.blue.600'),
        },
      });
    }),
  ],
}
