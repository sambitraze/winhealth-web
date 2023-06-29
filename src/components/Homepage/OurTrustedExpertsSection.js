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
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc nunc neque, venenatis fringilla nunc.'
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
