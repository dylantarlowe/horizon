/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'horizon': '#FE5A4C',
        'gray-400': '#A0A7B3',
        'gray-300': '#F2F6FC'
      },
    extend: {},
  },
  plugins: [],
}
