/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      480: { min: '0px', max: '480px' },
      sm: { min: '0px', max: '767px' },
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        sm: { min: '0px', max: '767px' },
        xs: '480px',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      fontSize: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        0.7: '0.7rem',
        base: '0.9rem',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translate3d(0px,8px,0px)', opacity: 0 },
          '100%': { transform: 'translate3d(0px,0px,0px)', opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        slideUp: 'slideUp 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      backgroundImage: {},
      colors: {
        coffee: {
          50: 'E8D6E0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        },
      },
      gridTemplateColumns: {
        autofit: 'repeat(auto-fit), minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};
