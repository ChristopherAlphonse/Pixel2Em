const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f4'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        primary: ['1.25rem', { lineHeight: '1.5' }]
      },
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: []
};
