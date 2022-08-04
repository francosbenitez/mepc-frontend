/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "arrow-left": "url('/icons/arrow-left.svg')",
      },
      colors: {
        primary: "#004aad",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
