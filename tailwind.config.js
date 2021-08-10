module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        reggae: ['Reggae One'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
