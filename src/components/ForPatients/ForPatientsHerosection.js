import React from 'react';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';
import Image from 'next/image';

const ForPatientsHerosection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container grid gap-4 py-4 md:grid-cols-2 md:py-10">
        <div className="flex max-w-sm flex-col justify-center gap-2">
          <p className="font-proxima text-2xl font-semibold uppercase tracking-wide text-themeBlue">
            FOR EMPLOYERS & HEALTH PLANS
          </p>
          <Title type={'herosection'} text={'Life-changing digestive care'} />
          <Description
            text={
              'Your populations are suffering and need digestive health care that’s convenient, coordinated and collaborative.'
            }
            type={'herosection'}
          />
          <CustomLink text={'Contact Us'} link={'#'} />
        </div>
        <Image
          src={'/assets/health-plans-thumbnail.svg'}
          alt={'FAQ Thumbnail'}
          width={500}
          height={500}
          className="ml-auto h-auto max-h-[250px] md:max-h-[350px]"
        />
      </div>
    </div>
  );
};

export default ForPatientsHerosection;
