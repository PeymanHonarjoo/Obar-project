// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  rtl: true,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#00BFA5",
        },
      },
    },
  },
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
  },
});
