/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      letterSpacing: {
        widest: ".3em",
      },
      colors: {
        cyan: "hsl(180,66%,49%)",
        cyanLight: `hsl(180,66%,69%)`,
        darkViolet: "hsl(257,27%,26%)",
        red: "hsl(0,87%,67%)",
        grayishViolet: "hsl(257,7%,63%)",
        veryDarkBlue: "hsl(255,11%,22%)",
        veryDarkViolet: "hsl(260,8%,14%)",
        strongCyan: "hsl(171,66%,44%)",
        lightBlue: "hsl(233,100%,69%)",
        darkGrayishBlue: "hsl(210,10%,33%)",
        grayishBlue: "hsl(201,11%,66%)",
        darkBlue: "hsl(217,28%,15%)",
        darkBlue1: "hsl(218,28%,13%)",
        darkBlue2: "hsl(219,53%,9%)",
        darkBlue3: "hsl(219,30%,18%)",
        accentCyan: "hsl(176,68%,64%)",
        accentBlue: "hsl(198,60%,50%)",
        lightRed: "hsl(0,100%,63%)",
      },
      spacing: {
        180: "32rem",
      },
      backgroundImage: theme => ({
        dots: "url(../src/assets/bookmark/bg-dots.svg)",
        "logo-dark-mode": "url('../src/assets/web4/logo-dark-mode.svg')",
        "logo-light-mode": "url('../src/assets/web4/logo-light-mode.svg')",
        "curvy-dark-mode": "url('../src/assets/web4/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('../src/assets/web4/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
