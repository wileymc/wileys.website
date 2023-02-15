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
        "glass": "#1822326d",
        "cobalt": "rgb(32, 73, 238)",
        
        "lagoon": "rgb(29, 170, 189)"
      },
      fontFamily: {
        sans: ["var(--font-arimo)"],
        serif: ["var(--font-merriweather)"],
      }
    },
  },
  plugins: [],
}
