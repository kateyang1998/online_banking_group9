/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.3s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
