import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
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
      400: "#FF9501",
      500: "#ff6b01",
    },
  black: "#363663",
  },
 });
export default theme;
