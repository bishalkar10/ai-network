/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      expand: {
        "0%": { height: "0" },
        "100%": { height: "200px" },
      },
      collapse: {
        "0%": { height: "200px" },
        "100%": { height: "0" },
      },
    },
    animation: {
      expand: "expand 0.3s ease-in-out forwards",
      collapse: "collapse 0.3s ease-in-out forwards",
    },
  },
  plugins: [],
};
