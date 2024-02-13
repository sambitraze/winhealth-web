import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';

const OurScienceSection = () => {
  return (
    <div>
      <div className="container py-10">
        <Title text={'A comprehensive and integrative care approach '} />
        <Description
          text={
            'Because digestive health is interconnected via gut brain axis.'
          }
        />
        <Image
          src={'/assets/team-lg.png'}
          alt={'Our Experts'}
          width={1200}
          height={600}
          className="relative mx-auto mt-4 hidden h-auto object-contain md:block xl:max-w-screen-lg xl:translate-x-10"
        />
        {/* <Image
          src={'/assets/team-sm.svg'}
          alt={'Our Team'}
          width={600}
          height={600}
          className="mx-auto mt-4 h-auto object-contain md:hidden"
        /> */}
      </div>
    </div>
  );
};

export default OurScienceSection;
