/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      // primary: '#0f172a',
      // gray: '#6b7280',
      black: '#2D3134',
      orange: '#F66F4D',
      beige: '#FAF8ED',
      'orange-pale': '#FFD482',
      'gray-light': '#5B5F62',
      'gray-ultra-light': '#939597',
      'gray-dark': '#2D3134'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      nav: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
