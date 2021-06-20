const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      // 'speind-black': '#222831',
      // 'speind-gray': '#393E46',
      // 'speind-yellow': '#FFD369',
      // 'speind-white': '#EEEEEE',
      'speind-black': '#18191c',
      'speind-gray': '#222831',
      'speind-yellow': '#FFD369',
      'speind-red': '#ec4357',
      'speind-white': '#fff',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
