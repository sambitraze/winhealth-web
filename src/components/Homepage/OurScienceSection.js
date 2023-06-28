import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';

const OurScienceSection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container py-10">
        <Title text={'Our Science'} />
        <Description
          text={
            ' We believe your gut’s health is connected to the brain, behaviour and a lot more. To restore balance and improve the chronic symptoms. We have developed a framework to address each part of the whole.'
          }
        />
        <Image
          src={'/assets/our-science-lg.svg'}
          alt={'Our Team'}
          width={1200}
          height={600}
          className="mx-auto hidden h-auto max-w-screen-lg object-contain md:block"
        />
        <Image
          src={'/assets/our-science-sm.svg'}
          alt={'Our Team'}
          width={600}
          height={600}
          className="mx-auto h-auto object-contain md:hidden"
        />
      </div>
    </div>
  );
};

export default OurScienceSection;
