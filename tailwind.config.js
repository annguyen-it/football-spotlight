const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: [
    './src/**/*.html',
    './src/**/*.{js, ts}'
  ],
  theme: {
    fontFamily: false,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#37003c',
      white: '#ffffff',
      gray: colors.trueGray,
      pinkRed: '#e90052',
      purple: {
        light: '#4e0056',
      },
      pinkPurple: {
        light: '#ff2882',
        DEFAULT: '#cb33c1',
        dark: '#963cff',
        100: '#ff2882',
        200: '#f22a91',
        300: '#e52ca1',
        400: '#d82fb0',
        500: '#cb33c1',
        600: '#be35d0',
        700: '#b138e1',
        800: '#a43af0',
        900: '#963cff',
      }
    },
    minWidth: {
      '0': '0',
      '36': '9rem',
      'full': '100%'
    },
    fontSize: {
      // base
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      // custom
      'base-sm': 'calc(1rem - 1px)',
      'base-lg': 'calc(1rem + 1px)',
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {},
  plugins: [],
}
