module.exports = {
  purge:{
    enabled:true,
    content: [
      './src/*.html',
      './src/*.ejs',
      './src/pages/*.ejs',
      './src/partials/*.ejs',
      './src/js/*.js',
      './src/*.js',
    ]

  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#ff6363',
        secondary:{
          100: '#e2e2d5',
          200: '#888883'
        }
      },
      fontFamily:{
        montserrat:['Quicksand']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
