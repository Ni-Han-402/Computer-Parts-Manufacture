module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a2b3f9",
          "secondary": "#188196",
          "accent": "#f9c85c",
          "neutral": "#151A1E",
          "base-100": "#EDE7F3",
          "info": "#9BB7F3",
          "success": "#28B888",
          "warning": "#FAB952",
          "error": "#ED3557",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}