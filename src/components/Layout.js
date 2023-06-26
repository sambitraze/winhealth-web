import React from 'react';
import Navbar from './Navbar';
import Prompt from './Prompt';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Prompt />
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
