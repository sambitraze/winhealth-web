const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brandon: ['var(--font-brandon)', ...fontFamily.sans],
        proxima: ['var(--font-proxima)', ...fontFamily.sans],
        ptSans: ['var(--font-pt-sans)', ...fontFamily.sans],
      },
      colors: {
        themeBlue: '#00ABC8',
        themeLightBlue: '#7FDBEB',
        themeWhite: '#F2F2F2',
        themeGrey: '#4B4D52',
        themePink: '#EEA1B3',
        themeDarkGrey: '#1D1D1B',
      },
    },
  },
  plugins: [],
};
