import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';
import CustomLink from '../CustomLink';

const RedesignedDigestiveCareSection = () => {
  return (
    <div className="container py-4 md:py-10">
      <Title text="Redesigned digestive care" className={'capitalize'} />
      <Description text="The burdens of digestive health are significant: People bounce from gastroenterologist to nutritionist to primary care. They struggle to find diet and psychology specialists who understand their condition. They may not be able to afford behavioral health support if it’s not a covered benefit. Many give up on finding a solution." />
      <Image
        src={'/assets/redesigned-digestive-care.png'}
        alt={'Redesigned digestive care'}
        width={1280}
        height={500}
        className="mt-4 h-auto w-full object-contain"
      />
      <CustomLink
        text={'Our Approach'}
        link={'#'}
        className="mx-auto mt-4 block"
      />
    </div>
  );
};

export default RedesignedDigestiveCareSection;
