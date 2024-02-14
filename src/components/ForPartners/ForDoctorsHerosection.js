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
            FOR HOSPITALS & DOCTORS
          </p>
          <Title
            type={'herosection'}
            text={'Powering Providers, Elevating Care'}
          />
          <Description
            text={
              'Empowering Healthcare Stakeholders with Digital Solutions at Zero Cost '
            }
            type={'herosection'}
          />
          <CustomLink text={'Become our Trusted Partner'} link={'#'} />
        </div>
        <Image
          src={'/assets/partner-bg.svg'}
          alt={'FAQ Thumbnail'}
          width={700}
          height={700 }
          className="ml-auto h-auto"
        />
      </div>
    </div>
  );
};

export default ForDoctorsHerosection;
