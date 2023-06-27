import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';

const OurInvestorsSection = () => {
  return (
    <div className="bg-themeWhite py-7 md:py-14">
      <div className="container">
        <Title text={'our team of stalwarts'} />
        <Description
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.'
          }
        />

        <div className="mt-7 grid justify-center gap-x-6 gap-y-10 md:mt-14 md:grid-cols-3">
          <Image
            src={'/assets/threshold.png'}
            alt={'Threshold Ventures'}
            width={200}
            height={70}
            className="h-auto max-h-[50px] w-full object-contain md:max-h-[70px]"
          />
          <Image
            src={'/assets/torch-capital.png'}
            alt={'Threshold Ventures'}
            width={200}
            height={70}
            className="h-auto max-h-[50px] w-full object-contain md:max-h-[70px]"
          />
          <Image
            src={'/assets/felicis.png'}
            alt={'Threshold Ventures'}
            width={200}
            height={70}
            className="h-auto max-h-[50px] w-full object-contain md:max-h-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurInvestorsSection;
