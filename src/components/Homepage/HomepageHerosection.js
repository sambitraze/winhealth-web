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
            text={'Transforming Healthcare through Digital Innovation'}
            type={'herosection'}
          />
          <Description
            text={
              'At Winhealth.Care, our mission is to transform healthcare through innovative digital solutions that empower individuals, enhance accessibility, and improve overall wellness. '
            }
            type={'herosection'}
          />
          <CustomLink link={'https://wa.me/+919773916168'} text={'Get Started'} />
        </div>
      </div>
    </div>
  );
};

export default HomepageHerosection;
