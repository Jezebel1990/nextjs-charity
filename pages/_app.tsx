import type {AppProps} from "next/app";

import { Provider } from "@/components/ui/provider";
import Navbar from "../components/navbar/Navbar";

function App({Component, pageProps}: AppProps) {
  return (
    <Provider >
      <Navbar />
      <Component {...pageProps} />
      </Provider>
  );
}

export default App;