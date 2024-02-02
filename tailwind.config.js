/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        background: "#00141B",
        backgroundDark:"#00212D",
        backgroundBlack:"#000D12",
        backgroundLight:"#001A24",
        primary: "#EFF4F5",
        secondary: "#033945",
        light: "#F9FAFB",
        white: "#FFFFFF",
        gray: "#ECE2DC",
        teal: "#CDDEE4",
        pink:"#FBA599",
        green: {
          50: "#42B8BD",
          100: "#285E6A",
          150: "#D0D0D0",
          200: "#024355",
          300: "#F6F6F6",
          400: "#CCCCCC",
          600: "#99A6AB"
        },
        borders: "rgba(0, 20, 27, 0.20)",
        borders2: "rgba(0, 20, 27, 0.80)",
        modal: "rgba(0, 0, 0, 0.50)",

        MODAL_BACKGROUND: "rgba(0, 0, 0, 0.23)",

        primaryColor: "#00141B",
        secondaryColor: "#29CFD6",

        BLACK: {
          _100: "#000"
        },
        
        WHITE: {
          _100: "#FFF"
        },

        RED: {
          _100: "#AF202D"
        }
        
      },
      screens: {
        xs: '300px',  //phones
        sm: '640px', //sm
        md: '768px',
        phone: '700px',
        'mini': '800px',
        'mid': '900px',
        lg: '1024px',
        // 'lg': '1200px',
      },
      // screens: {
      //   'xs': '300px', //'500px'
      //   'sm': '640px', // '600px'
      //   'phone': '768px', // '700px'
      //   'mini': '800px', //
      //   'mid': '900px', // '900px'
      //   'lg': '1024px', // 1000px
      //   'lg': '1280px', // '1200px'

      //   xs: "300px",
      //   sm: "640px",
      //   phone: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      // },
      
      screens: {
        // xs: "300px",  //360px
        // sm: "640px",
        // phone: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1536px",
      },

      fontFamily: {
        'mont': ['Montserrat'],
      },
   
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}