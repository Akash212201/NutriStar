/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['Covered By Your Grace'],
        primary: ['Manrope'],
        fapopin: ['poppins-light']
      },
    },
  },
  plugins: [],
}
