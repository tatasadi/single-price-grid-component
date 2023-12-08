/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: "#C0DF33",
        teal: "#2AB3B1",
        light: "#E6EFF5",
        gray: "#9AA7BE",
      },
    },
    fontFamily: {
      karla: ["Karla", "sans-serif"],
    },
  },
  plugins: [],
}
