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
            For pharmaceutical and Health Insurers
          </p>
          <Title
            type={'herosection'}
            text={'Life-changing digestive care'}
            className={'capitalize'}
          />
          <Description
            text={`Addressing chronic conditions required care that is convenient, collaborative, and coordinated—the three pillars of effective treatment. Partnering with MicroHeal enhances pharmaceutical companies' offerings with innovative, cost-effective DTx solutions, improving patient outcomes.`}
            type={'herosection'}
          />
          <CustomLink text={'Contact Us'} link={'/contact-us-provider'} />
        </div>
        <Image
          src={'/assets/provider-bg.svg'}
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
