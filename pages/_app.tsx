import type {AppProps} from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/navbar/Navbar";
import theme from "@/theme/theme";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default App;