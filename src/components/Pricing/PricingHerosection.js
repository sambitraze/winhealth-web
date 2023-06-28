import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';

const PricingHerosection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container grid gap-4 py-4 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-2">
          <Title type={'herosection'} text={'Caring is priceless'} />
          <Description
            text={'We regularly upgrade our blogs.'}
            type={'herosection'}
            className="font-semibold"
          />
          <Description
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc nunc neque, venenatis fringilla nunc.'
            }
            type={'herosection'}
          />
        </div>
        <Image
          src={'/assets/pricing-thumbnail.svg'}
          alt={'Pricing Thumbnail'}
          width={500}
          height={500}
          className="ml-auto h-auto"
        />
      </div>
    </div>
  );
};

export default PricingHerosection;
