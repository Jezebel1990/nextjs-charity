import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        orange: {
          100: { value: "#e6f2ff" },
          400: { value: "#99caff" },
          500: { value: "#001a33" },
        },
      },
    },
    semanticTokens: {
      colors: {
        "fg.subtle": { value: "{colors.orange.400}" },
        "focus.ring": { value: "{colors.orange.500}" },
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
      color: "black",
      minHeight: "100vh",
      margin: 0,
      fontStyle: "Raleway, system-ui, sans-serif",
    },
  },
});

export const system = createSystem(defaultConfig, config);
