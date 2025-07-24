/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/html/*.html", "./src/js/*.js", "./src/*.js"],
  theme: {
    screens: {
      sm: "240px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    container: {
      // center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
    extend: {
      fontSize: {
        calc1: "calc(2rem + 2.5vw)",
        calc2: "calc(1.3rem + 6.7vw)",
        calc3: "calc(1.6rem + 1.2vw)",
        calc4: "calc(50% - 20px)"
      },
      colors: {
        "gold-crayon": "#e4c590",
        "quick-silver": "#a6a6a6",
        "davys-grey": "#595754",
        "smoky-black-1": "#0e0d0b",
        "smoky-black-2": "#0e0d0c",
        "smoky-black-3": "#121111",
        "eerie-black-1": "#161718",
        "eerie-black-2": "#1b1c1d",
        "eerie-black-3": "#141515",
        "eerie-black-4": "#212121",
        "white-alpha-20": "#ffffff33",
        "white-alpha-10": "#ffffff1a",
        "black-alpha-80": "#000000cc",
        "black-alpha-15": "#00000026",
      },
      fontFamily: {
        Forum: ["Forum", "cursive"],
        DMSans: ["DM Sans", "sans-serif"],
      },
      borderColor: {
        "block-start": "#121111",
      },
      backgroundImage: {
        "loading-text-gradient":
          "linear-gradient(90deg, transparent 0% 16.66%, #121111 33.33% 50%, transparent 66.66% 75%)",
      },
      keyframes: {
        loadingText: {
          "0%": {
            backgroundPosition: "100%",
          },
          "100%": {
            backgroundPosition: "0%",
          },
        },
        menuBtn: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0.5)",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0.5)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1.0)",
          },
        },
        smoothScale: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.15)",
          },
        },
        moveUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
        rotatingDiv: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "12.5%": {
            transform: "rotate(45deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "37.5%": {
            transform: "rotate(135deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "62.5%": {
            transform: "rotate(225deg)",
          },
          "75%": {
            transform: "rotate(270deg)",
          },
          "87.5%": {
            transform: "rotate(315deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        bouncing: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(30px)",
          },
        },
      },
      animation: {
        loadingText: "loadingText 2s linear infinite",
        menuBtn: "menuBtn 400ms ease-in-out alternate infinite",
        scaleUp: "scaleUp 200ms ease-in-out alternate",
        backgroundImageScale: "smoothScale 7s ease-in-out alternate infinite",
        moveUp: "moveUp 2s ease forwards",
        rotatingDiv: "rotatingDiv 7s ease-in-out infinite forwards",
        bouncing: "bouncing 3s ease-in-out infinite alternate",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};
