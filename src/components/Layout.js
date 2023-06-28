import React from 'react';
import Navbar from './Navbar';
import Prompt from './Prompt';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>WinHealth</title>
        <meta
          name="description"
          content="WinHealth- Unleash Gut Health & Heal your Gut (HOg)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Prompt />
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
