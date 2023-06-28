import React from 'react';

const Prompt = () => {
  return (
    <div className="bg-white">
      <div className="container flex items-center justify-between py-1.5">
        <a
          href={'#'}
          className="text-sm underline underline-offset-2 md:text-base"
        >
          Prompt message for marketing or offer text with clickable link
        </a>
        <div className="hidden items-center justify-between gap-8 md:flex">
          <a href={'tel:#'}>1-800-123-4567</a>
          <a href={'mailto:#'}>john@gmail.com</a>
          <a href="#" className="underline underline-offset-2">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
