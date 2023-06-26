import React from 'react';
import Navbar from './Navbar';
import Prompt from './Prompt';

const Layout = ({ children }) => {
  return (
    <>
      <Prompt />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
