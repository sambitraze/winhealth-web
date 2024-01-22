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
            'Approx. 70% immune system is ruled by gut. Gut issues form the root cause of several other chronic diseases like eczema, Type 2 diabetes, and cancer. Thus it becomes crucial to identify the problem at the root level. We believe that to take care of your gut, you need to be mindful of your physical and mental health. An integrative and balanced approach is essential for you to reach your and your gut’s full potential, and we are your trusted partners in helping you achieve this goal.'
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
