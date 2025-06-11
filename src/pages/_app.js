import '../styles/globals.css';
import { brandon, proxima, ptSans } from '../utils/fonts';
import { TailwindIndicator } from '../components/TailwindIndicator';
import { MantineProvider } from '@mantine/core';
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <main
        className={`${brandon.variable} ${proxima.variable} ${ptSans.variable} font-brandon`}
      >
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1026364426350675');
          fbq('track', 'PageView');
        `}
        </Script>

        {/* NOSCRIPT fallback */}
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1026364426350675&ev=PageView&noscript=1"
          />
        </noscript>
        <GoogleAnalytics />
        <Component {...pageProps} />
        <TailwindIndicator />
      </main>
    </MantineProvider>
  );
}
