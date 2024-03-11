/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
      colors: {
        strongCyan: "hsl(171,66%,44%)",
        lightBlue: "hsl(233,100%,69%)",
        darkGrayishBlue: "hsl(210,10%,33%)",
        grayishBlue: "hsl(201,11%,66%)",
      },
    },
  },
  plugins: [],
};
