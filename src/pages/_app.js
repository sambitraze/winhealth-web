import '../styles/globals.css';
import { brandon, proxima, ptSans } from '../utils/fonts';
import { TailwindIndicator } from '../components/TailwindIndicator';

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${brandon.variable} ${proxima.variable} ${ptSans.variable} font-brandon`}
    >
      <Component {...pageProps} />
      <TailwindIndicator />
    </main>
  );
}
