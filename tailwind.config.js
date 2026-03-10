/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b91c1c", // Red-700
        secondary: "#fbbf24", // Amber-400
      }
    },
  },
  plugins: [],
}
