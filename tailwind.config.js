/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#0a0e13",
        "glass": "#1b23316f",
      },
      fontFamily: {
        sans: ["var(--font-arimo)"],
        serif: ["var(--font-merriweather)"],
      }
    },
  },
  plugins: [],
}
