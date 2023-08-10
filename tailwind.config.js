/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custome-green':{
          light :'#80A7AA',
          DEFAULT: '#134F53'
        }
      }
    },
  },
  plugins: [],
}

