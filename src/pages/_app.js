import '../styles/globals.css';
import { brandon, proxima, ptSans } from '../utils/fonts';
import { TailwindIndicator } from '../components/TailwindIndicator';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <main
        className={`${brandon.variable} ${proxima.variable} ${ptSans.variable} font-brandon`}
      >
        <Component {...pageProps} />
        <TailwindIndicator />
      </main>
    </MantineProvider>
  );
}
