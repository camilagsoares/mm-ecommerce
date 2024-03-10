/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
      customGreen: '#304F4E',
      customColor: '#122F5D',
      customWhite: '#ebebeb',
      textVerde: "#88BB76",
      bgFooter: "#041837",
      textCinza: "#66666B"
      // customGreenText: '#88BB76'
      
    },
    },
  },
  plugins: [],
}