import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LatestNewsCard = ({ title, text, imageURL, link }) => {
  return (
    <Link href={link} target={'_blank'} className="space-y-2">
      <Image
        src={imageURL}
        alt={'Blog Card Image'}
        width={300}
        height={200}
        className="h-[220px] w-full object-cover"
      />
      <p className="font-brandon text-lg font-medium text-themeGrey md:text-2xl">
        {title}
      </p>
      <p className="font-proxima text-sm text-themeMediumGrey md:text-base">
        {text}
      </p>
    </Link>
  );
};

export default LatestNewsCard;
