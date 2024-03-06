/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        blue: "#04a8f5",
        textGray: "#9497af",
      },
      backgroundColor: {
        bgBlue: "#04a8f5",
      },
      borderColor: {
        lineGray: "f0f0fa",
      },
    },
  },
  plugins: [],
};
