/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rocknroll: ["RocknRoll One", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        notoSans: ["Noto Sans", "sans-serif"],
      },

      backgroundImage: {
        "main-color":
          "linear-gradient(90deg, #FF69B4, rgb(134, 123, 205), rgb(106, 90, 171), #3B82F6)",
      },
    },
  },
  plugins: [],
};
