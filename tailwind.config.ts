import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-main': 'rgba(239,231,216,0.83)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        rubius: ['var(--font-studio-pro)', 'sans-serif'],
        leksapro: ['var(--font-leksa-pro)', 'sans-serif'],
      },
      keyframes: {
        'scale-from-0-to-100': {
          '0%': {
            scale: '0.7',
          },
          '100%': {
            scale: '1',
          },
        },
        'scale-from-100-to-0': {
          '0%': {
            scale: '1',
          },
          '100%': {
            scale: '0.7',
          },
        },
      },
      animation: {
        'scale-from-0-to-100': 'scale-from-0-to-100 0.5s ease-in-out',
        'scale-from-100-to-0': 'scale-from-100-to-0 0.5s ease-in-out',
      },
      /*      screens: {
        xs: '375px',
      },*/
    },
  },
  plugins: [
    daisyui,
    // @ts-ignore: add type late
    function ({ addUtilities }) {
      const newUtilities = {
        '.btn-header': {
          'backgroundColor': 'rgba(239,231,216,0)',
          'border': 'none',
          'borderRadius': '0',
          '&:hover': {
            backgroundColor: 'rgba(93,93,89,0.2)',
            borderColor: 'rgba(93,93,89,0.2)',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.pastel,
          'color-main': 'color-main',
        },
      },
    ],
  },
};
