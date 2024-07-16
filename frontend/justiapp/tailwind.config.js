const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          // Este es el nombre de tu tema personalizado
          primary: "#5664C4",
          neutral: "#374151",
          base: "#D1D5DB",
          neutralContent: "#F9FAFB",

          // Puedes seguir agregando más personalizaciones aquí
        },
      },
    ],
  },
};
