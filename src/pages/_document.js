import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics gaId="G-Q87JJ386KQ" />
      </body>
    </Html>
  );
}
