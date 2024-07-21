const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      mycustomblue: "#5664C4",
      mynaval: " #195678",
      sky00: "#009BD7",
      mygreen: "#4C8460",
      mypink: "#A9257C",
      ...colors,
    },
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
