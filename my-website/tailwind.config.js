/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./blog/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        blue: "#04a8f5",
        textGray: "#9497af",
        textTitle: "#202b50",
      },
      backgroundColor: {
        bgBlue: "#04a8f5",
        bgGray: "#ecf0ff",
      },
      borderColor: {
        lineGray: "f0f0fa",
      },
    },
  },
  plugins: [],
};
