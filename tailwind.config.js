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
      }
    }
  },
  plugins: []
}
