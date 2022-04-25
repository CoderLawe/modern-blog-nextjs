module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'header-brown':'#A2644F',
        'slight-gray':'#FAFAFA',
        'brown-gray':'#F2EAE4',
        'coolYellow':'#ac9a76'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
