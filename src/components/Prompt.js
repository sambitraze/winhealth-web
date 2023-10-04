import React from 'react';

const Prompt = () => {
  return (
    <div className="bg-themeBlue">
      <div className="container flex items-center justify-between py-1.5 text-white">
        <a
          href={'#'}
          className="text-sm underline underline-offset-2 md:text-base"
        >
          Launching Soon
        </a>
        <div className="hidden items-center justify-between gap-8 md:flex">
          <a href={'tel:#'}>+91 73761 13646</a>
          <a href={'mailto:#'}>shashank12winger@gmail.com</a>
          <a href="#" className="underline underline-offset-2">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
