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
        src={'/assets/logo.png'}
        alt="Logo"
        width={100}
        height={50}
        className="h-auto w-[60px] cursor-pointer object-contain md:w-[90px]"
      />
    </Link>
  );
};

export default Logo;
