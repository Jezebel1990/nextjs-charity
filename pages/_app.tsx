import type {AppProps} from "next/app";

import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "@/components/navbar/Navbar";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default App;