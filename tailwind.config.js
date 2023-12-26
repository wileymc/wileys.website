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
        background: "#0a0e13",
        glass: "#1822326d",
        cobalt: "#354cfb",
        lagoon: "rgb(29, 170, 189)",
        "lagoon-200": "rgb(165, 237, 247)",
      },
      fontFamily: {
        sans: ["var(--font-yanone)"],
        serif: ["var(--font-merriweather)"],
      },
    },
  },
  plugins: [],
};
