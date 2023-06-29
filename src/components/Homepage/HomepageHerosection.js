import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';

const HomepageHerosection = () => {
  return (
    <div className="relative flex flex-col-reverse bg-themeWhite md:block">
      <Image
        src={'/assets/homepage-bg-lg.svg'}
        alt={'Homepage Background'}
        width={1920}
        height={1080}
        className={'relative z-0 hidden h-full w-full object-cover lg:block'}
      />
      <Image
        src={'/assets/homepage-bg-md.svg'}
        alt={'Homepage Background'}
        width={1920}
        height={1080}
        className={
          'relative z-0 hidden h-full w-full object-cover md:block lg:hidden'
        }
      />
      <Image
        src={'/assets/homepage-bg-sm.svg'}
        alt={'Homepage Background'}
        width={1920}
        height={1080}
        className={'relative z-0 block h-full w-full object-cover md:hidden'}
      />
      <div className="container z-10 py-4 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="flex max-w-md flex-col gap-4">
          <Title
            text={'Unlock the power of the mind (DTx) in healthcare.'}
            type={'herosection'}
          />
          <Description
            text={
              'Try a different approach to Gastro (GI) care with comprehensive and personalized support via DTx ( Digital Therapeutic, an Integrative psychological therapies), Nutrition and lifestyle. Manage gut chronic issues and your life.'
            }
            type={'herosection'}
          />
          <CustomLink link={'#'} text={'Get Started'} />
        </div>
      </div>
    </div>
  );
};

export default HomepageHerosection;
