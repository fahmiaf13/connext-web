/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      pacifico: ["Pacifico", "sans-serif"],
    },
    extend: {
      colors: {
        tosca: "#55B88B",
        darker: {
          200: "#1A1D26",
          100: "#182A41",
        },
        whiter: {
          100: "#F5F5F5",
          200: "#e5e5ea",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
