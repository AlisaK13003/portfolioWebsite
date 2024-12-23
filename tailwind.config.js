const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      
      height: {
        'full': '100%',
      },
      borderRadius: {
        '20px': '20px',
      },
      padding: {
        '4': '1rem',
      },
      size: {
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
      },
      colors: {
        primary: '#E8EEE7',
        secondary: '#C1BFAB',
        accent: '#215142',
        black: '#000000',
        white: '#FFFFFF',
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      height: ['group-hover'],
      borderRadius: ['group-hover'],
      padding: ['group-hover'],
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
