import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';

const OurScienceSection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container py-10">
        <Title text={'Our Science'} className={'capitalize'} />
        <Description
          text={
            'Did you know? Your gut health affects 70% of your immune system and is linked to chronic diseases like eczema, Type 2 diabetes, and cancer. Identifying and addressing gut issues is crucial. We believe in a balanced approach to gut health, integrating physical and mental well-being. Trust us to help you achieve your full potential, personally and for your gut health.'
          }
        />
        <Image
          src={'/assets/our-science-lg.svg'}
          alt={'Our Team'}
          width={1200}
          height={600}
          className="mx-auto hidden h-auto object-contain md:block xl:max-w-screen-lg"
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
