import React from 'react';
import Navbar from './Navbar';
import Prompt from './Prompt';
import Footer from './Footer';
import Head from 'next/head';
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MicroHeal</title>
        <meta
          name="description"
          content="MicroHeal- Unleash Gut Health & Heal your Gut (HOg)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Prompt />
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17098582938"
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17098582938');
        `}
      </Script>
      <Footer />
    </>
  );
};

export default Layout;
