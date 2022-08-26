/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C4745D',
        secondary: '#6A6A6A'
      }
    },
    screens: {
      sm: { min: '320px', max: '359px' },
      md: { min: '360px', max: '374px' },
      lg: { min: '375px', max: '413px' },
      xl: { min: '414px', max: '767px' },
      '2xl': { min: '768px', max: '1024px' },
      '3xl': { min: '1025px', max: '1279px' },
      '4xl': { min: '1280px', max: '1535px' },
      '5xl': { min: '1536px' }
    },
    plugins: []
  }
}
