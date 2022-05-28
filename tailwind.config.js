module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        pcHouseTheme: {
          primary: "#29375B",
          secondary: "#39223F",
          accent: "#FDE68A",
          neutral: "#151A1E",
          "base-100": "#ffffff",
          info: "#9BB7F3",
          success: "#28B888",
          warning: "#FAB952",
          error: "#ED3557",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
