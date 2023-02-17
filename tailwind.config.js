/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.hbs", "**/*.hbs"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "hsl(var(--color-primary) / 0.8)",
      secondary: "hsl(var(--color-secondary) / 0.8)",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        sm: ".3rem",
        md: ".5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
