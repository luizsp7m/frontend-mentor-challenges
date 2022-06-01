module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "soft-red": "hsl(10, 79%, 65%)",
      "cyan": "hsl(186, 34%, 60%)",
      "brown": {
        50: "hsl(33, 100%, 98%)",
        100: "hsl(27, 66%, 92%)",
        500: "hsl(28, 10%, 53%)",
        900: "hsl(25, 47%, 15%)",
      }
    },

    fontFamily: {
      "sans": ["DM Sans", "sans-serif"],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}