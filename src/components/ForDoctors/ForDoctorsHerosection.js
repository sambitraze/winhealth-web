import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';
import CustomLink from '../CustomLink';

const ForDoctorsHerosection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container grid gap-4 pt-4 md:grid-cols-2 md:pt-10 lg:pt-16">
        <div className="flex max-w-sm flex-col justify-center gap-2">
          <p className="font-proxima text-2xl font-semibold uppercase tracking-wide text-themeBlue">
            FOR CLINICIANS
          </p>
          <Title
            type={'herosection'}
            text={'High frequency, high touch GI support'}
          />
          <Description
            text={
              'We’re a preferred partner with primary care and local gastroenterology groups, as most patients with GI conditions benefit from convenient access to multidisciplinary care.'
            }
            type={'herosection'}
          />
          <CustomLink text={'Become a clinician partner'} link={'#'} />
        </div>
        <Image
          src={'/assets/for-clinician-thumbnail.svg'}
          alt={'FAQ Thumbnail'}
          width={500}
          height={500}
          className="ml-auto h-auto"
        />
      </div>
    </div>
  );
};

export default ForDoctorsHerosection;
