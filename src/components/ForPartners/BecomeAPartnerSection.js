import React from 'react';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';

const BecomeAPartnerSection = () => {
  return (
    <div className="container py-4 md:py-10">
      <Title text={'We’re seeking high-quality local GI partners'} />
      <Description
        text={
          'When our members need procedures, we coordinate care with high-quality local GI partners. Let’s talk about how a partnership can work for your practice.'
        }
      />
      <CustomLink
        text={'Become a partner'}
        link={'#'}
        className="mx-auto mt-4 block"
      />
    </div>
  );
};

export default BecomeAPartnerSection;
