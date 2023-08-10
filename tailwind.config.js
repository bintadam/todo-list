/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-green':{
          light :'#80A7AA',
          default: '#134F53',
          dark:'#0B3D40'
        }
      }
    },
  },
  plugins: [],
}

