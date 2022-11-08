/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-metal': "url('/images/bgblack.jpg')",
        'gold-metal': "url('/images/bggold.jpg')"
      },
      fontFamily: {
        'sans-serif': ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        xxs: '250px',
        xxsMD: '350px',
        xs: '375px',
        // => @media (min-width: 375px) { ... }

        xsMD: '400px',
        // => @media (min-width: 400px) { ... }

        smXS: '500px',
        // => @media (min-width: 500x) { ... }
        mini: '760px',
        // => @media (min-width: 760x) { ... }

        afterMini: '800px'
        // => @media (min-width: 780x) { ... }
      }
    }
  },
  plugins: []
}
