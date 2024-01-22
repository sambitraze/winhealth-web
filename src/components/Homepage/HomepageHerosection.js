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
            text={'It takes Gut to get Healthy- Say goodbye to all your Gut issues- Gut Set Go'}
            type={'herosection'}
          />
          <Description
            text={
              'Begin Your Journey of Digestive Wellbeing with Our Cutting-Edge, Science-Backed Gut Care program delivered by functional gut team expertise in  behavioural science, gut health-based nutrition & lifestyle. We offer evidence based virtual, high-quality care at your fingertips, for you to improve and better manage your gut health.'
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
