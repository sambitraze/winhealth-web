import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const CustomLink = ({ text, link, className }) => {
  return (
    <Link
      href={link}
      className={twMerge(
        `
        'inline-block h-fit w-fit bg-themeBlue px-4 py-2 text-sm font-semibold uppercase text-white transition-all duration-300 ease-in-out hover:scale-105 md:text-base
      `,
        className
      )}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
