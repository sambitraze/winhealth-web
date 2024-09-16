import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LogoTransparant = () => {
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
        className="h-auto w-[80px] cursor-pointer object-contain md:w-[100px]"
      />
    </Link>
  );
};

export default LogoTransparant;
