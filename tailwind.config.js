/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         keyframes: {
            particles: {
               "0%": { transform: "translateY(120vh) scale(0) rotate(0deg)" },
               "20%": { transform: "translateY(100vh) scale(1) rotate(0deg)" },
               "100%": { transform: "translateY(-50vh) scale(0.5) rotate(360deg)" },
            },
         },

         colors: {
            "light-orchid": {
               50: "#fcf7fc",
               100: "#faedfa",
               200: "#f3dbf2",
               300: "#e9bee6",
               400: "#dfa1da",
               500: "#c86dc1",
               600: "#ab4ea1",
               700: "#8d3e83",
               800: "#74346b",
               900: "#602f59",
               950: "#3d1536",
            },
         },
      },
   },
   plugins: [require("prettier-plugin-tailwindcss")],
};
