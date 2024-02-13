import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link
      href={'/'}
      className="flex items-center gap-2 text-xl font-semibold text-white"
    >
      <Image
        src={'/assets/logo1.svg'}
        alt="Logo"
        width={100}
        height={50}
        className="h-auto w-[80px] cursor-pointer object-contain md:w-[100px]"
      />
      <Image
        src={'/assets/logo2.svg'}
        alt="Logo"
        width={1000}
        height={80}
        className="h-auto w-[80px] cursor-pointer object-contain md:w-[200px]"
      />
    </Link>
  );
};

export default Logo;
