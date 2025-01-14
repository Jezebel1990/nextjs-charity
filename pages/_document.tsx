import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       <link 
        as="font"
        crossOrigin="anonymous"
        href="/fonts/raleway-subset.woff2"
        rel="preload"
        type="font/woff2"
       />
      </Head>
      <body style={{backgroundColor: "#E5E5E5", width: "100%", margin: 0, padding: 0}}>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
