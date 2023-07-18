/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.65rem',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/container-queries')],
};
