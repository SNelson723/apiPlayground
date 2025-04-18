/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx, html}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(-100%)" },
          "90%": [{ transform: "translateX(5%)" }],
          "100%": { transform: "translateX(0)" },
        },
        slideout: {
          "0%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(150%)", opacity: "0"},
        },
      },
      animation: {
        slidein: "slidein 0.5s ease-in-out",
        slideout: "slideout 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
