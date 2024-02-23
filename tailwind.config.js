/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px'
    },
    extend: {
      fontFamily: {
        primary: 'Poppins'
      },
      colors: {
        textBlue: '#1CBCCF',
        textGray: '#2e2d2d',
        textRed: '#eb4d42',
        textLight: '#dbdbdb'
      },
      backgroundImage: {
        myGradient: 'linear-gradient(79deg, #76caf4 0%, #dbdbff 100%);'
      },
      transform: {
        '-50': '-50%'
      },
      scale: {
        '0': '0'
      },
    },
  },
  plugins: [],
}

