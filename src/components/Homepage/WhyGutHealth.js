import React from 'react';
import Image from 'next/image';
import Title from '../Title';

const WhyGutHealth = () => {
  return (
    <div className="container py-10">
      <Title
        text={'Why Gut Health is Important ?'}
        type={'herosection'}
        className={'py-10 text-center capitalize'}
      />
      <Image
        src={'/assets/core-mission.svg'}
        alt={'Homepage Background'}
        width={1920}
        height={1080}
        className={
          'hidden h-full w-full object-cover object-center sm:block md:block md:object-scale-down lg:block'
        }
      />
      <Image
        src={'/assets/core-mission.png'}
        alt={'Homepage Background'}
        width={1920}
        height={1080}
        className={
          'h-full w-full object-cover object-center sm:hidden md:object-scale-down'
        }
      />
    </div>
  );
};

export default WhyGutHealth;
