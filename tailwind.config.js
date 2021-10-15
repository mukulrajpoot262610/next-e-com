module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '900': '90vh',
        '750': '75vh',
        '500': '50vh',
        '250': '25vh'
      },
      colors: {
        'secondary': '#FFF5F0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
