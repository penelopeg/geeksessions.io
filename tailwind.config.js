const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      }
    },
    fontFamily: {
      'sans': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
