import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';
import Link from 'next/link';

const AboutUsHeroSection = () => {
  return (
    <div className="bg-themeWhite pt-7 md:py-14">
      <div className="container flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-col justify-center gap-2 md:w-1/2 lg:w-2/5">
          <Title
            text={'Unlock the power of the mind (DTx) in healthcare.'}
            className="text-left md:text-5xl"
          />
          <Description
            text={
              'We are experts in Gut Health. And caring is our second nature.'
            }
            className="ml-0 text-left font-semibold"
          />
          <Description
            text={
              'In our perspective, the key to achieve improved health, extends beyond physical means; it originates within the realm of the mind, DTx (Digital Therapeutic) are evidence based therapeutic interventions driven by software to prevent, manage, or treat a medical disorder or disease. We developed an evidenced based integrative (DTx) psychological module for gut chronic disease management.'
            }
            className="text-left"
          />
          <Link
            href={'#'}
            className="h-fit w-fit bg-themeBlue px-4 py-1 font-semibold uppercase text-white transition-all duration-300 ease-in-out hover:scale-105"
          >
            Get Started
          </Link>
        </div>
        <Image
          src={'/assets/about-us-hero.svg'}
          alt="About Us Hero Image"
          width={500}
          height={500}
          className="h-auto w-full md:w-1/2 lg:w-3/5"
        />
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
