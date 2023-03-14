/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shine: 'brightness 0.5s 0s linear',
      },
      boxShadow: {
        '3xl': '0 0 30px 5px rgba(0, 142, 236, 0.816)',
        '4xl': '0 0 50px 30px #fff',
      },
      keyframes: {
        brightness: {
          0: {
            opacity: '0',
            left: '0%',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            left: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};
