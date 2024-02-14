import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';

const OurTrustedExpertsSection = () => {
  return (
    <div className="bg-themePink">
      <div className="container grid gap-10 py-10 sm:grid-cols-2">
        <Image
          src={'/assets/our-experts-thumbnail.svg'}
          alt={'Our Trusted Experts'}
          width={500}
          height={500}
          className="order-2 md:order-none"
        />
        <div className="flex flex-col justify-center gap-2 md:gap-4">
          <Title
            text={'our trusted experts at your care'}
            type={'herosection'}
            className={'text-center text-white md:text-left'}
          />
          <Description
            text={
              `In today's digital era, where convenience meets technology, we proudly introduce our latest innovation – an app designed with you in mind. At the core of our application, we believe in not just offering a service but providing a solution that comes with the assurance of quality, reliability, and unparalleled expertise. "Our Trusted Experts At Your Care" isn't just a motto; it's the foundation upon which our app is built.`
            }
            className={
              'text-center text-sm text-white md:text-left md:text-base'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OurTrustedExpertsSection;
