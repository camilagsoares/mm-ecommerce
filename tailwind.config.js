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
      bgBlue: "#265094",
      textVerde: "#88BB76",
      bgFooter: "#041837",
      btnBlue: "#265094",
      textH3: "#323134",
      textCinza: "#66666B"
    },
    },
  },
  plugins: [],
}