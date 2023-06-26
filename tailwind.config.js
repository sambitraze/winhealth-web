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
    },
  },
  plugins: [],
};
