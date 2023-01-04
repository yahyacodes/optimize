/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        // => @media (min-width: 400px) { ... }

        md: "547px",
        // => @media (min-width: 547px) { ... }

        lg: "768px",
        // => @media (min-width: 768px) { ... }

        xl: "1024px",
        // => @media (min-width: 1024px) { ... }

        "2xl": "1680px",
        // => @media (min-width: 1680px) { ... }
      },
      colors: {
        blue: "#2409A6",
        purple: "#340873",
        tale: "#2805EA",
        lightBlue: "#1684E0",
        pinkLight: "#DCC6EA",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      fontFamily: {
        body: ["Noto Sans Symbols"],
        display: ["Merriweather Sans"],
        bodyFont: ["Assistant"],
      },
      plugins: [],
    },
  },
};
