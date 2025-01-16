import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          100: { value: "#fef5e6" },
          400: { value: "#FF9501" },
          500: { value: "#ff6b01"},
        },
      },
    },
  },
  globalCss: {
    "*::placeholder": {
      opacity: 1,
      color: "{fg.subtle}",
    },
    body: {
      bg: "white",
      color: "#2d2d2e",
      minHeight: "100vh",
      margin: 0,
      fontStyle: "Raleway, system-ui, sans-serif",
    },
  },
});

export const system = createSystem(defaultConfig, config);
