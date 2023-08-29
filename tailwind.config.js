/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        bp: "575px",
        bp2: "991px",
      },
      keyframes: {
        expand: {
          "0%": { height: "0" },
          "100%": { height: "250px" },
        },
        collapse: {
          "0%": { height: "250px" },
          "100%": { height: "0" },
        },
      },
      animation: {
        expand: "expand 0.3s ease-in-out forwards",
        collapse: "collapse 0.3s ease-in-out forwards",
        'bounce-slow': 'bounce 5s linear infinite',
      },
      fontFamily: {
        Exo: [' "Exo 2" ', "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },

    },
  },
  plugins: [],
};
