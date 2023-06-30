import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href={'/'} className="text-xl font-semibold text-white">
      <Image
        src={'/assets/logo.svg'}
        alt="Logo"
        width={100}
        height={50}
        className="h-auto cursor-pointer object-contain"
      />
    </Link>
  );
};

export default Logo;
