module.exports = {
  theme: {
    extend: {
      keyframes: {
        logoScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "logo-scroll": "logoScroll 45s linear infinite",
      },
    },
  },
};
