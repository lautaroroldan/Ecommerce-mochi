/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'amatic': ['Amatic SC', 'sans-serif'],
      'barlow' : ['Barlow', 'sans-serif'],
      'dancingscript' : ['Dancing Script', 'sans-serif'],
      'shadowsintolight' : ['Shadows Into Light', 'sans-serif'],
      'indieflower' : ['Indie Flower', 'sans-serif'],
      'nabla' : ['Nabla', 'sans-serif'],
      'bethellen' : ['Beth Ellen', 'sans-serif'],
      'gloriahallelujah' : ['Gloria Hallelujah', 'sans-serif'],
      'merienda' : ['Merienda', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
