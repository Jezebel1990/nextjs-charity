import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      ".custom-dots li button": {
        backgroundColor: "primary.300", // Cor dos dots inativos
        border: "none",
        width: "12px",
        height: "12px",
        transition: "background-color 0.3s ease",
      },
      ".custom-dots li.react-multi-carousel-dot--active button": {
        backgroundColor: "primary.500", // Cor do dot ativo
      },
      body: {
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
        margin: 0,
      },
    },
  },
  fonts: {
    body: "Raleway, system-ui, sans-serif",
  },
  colors: {
    primary: {
      100: "#fef5e6",
      300: "#ECA324",
      400: "#FF9501",
      500: "#ff6b01",
    },
  black: "#2F2F40",
  },
 });
export default theme;
