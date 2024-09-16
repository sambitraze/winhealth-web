import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';

const AboutUsHeroSection = () => {
  return (
    <div className="bg-themeWhite pt-7 md:py-14">
      <div className="container flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-col justify-center gap-4 md:w-1/2 lg:w-2/5">
          <Title
            text={'MicroHeal- Innovation driving care, transforming lives.'}
            type={'herosection'}
          />
          {/* <Description
            text={
              'Innovation driving care, transforming lives.'
            }
            type={'herosection'}
            className="text-lg font-semibold"
          /> */}
          <Description
            text={`MicroHeal is a leading innovator in healthcare, dedicated to revolutionizing the way chronic health conditions are managed and treated. Our focus on Digital Therapeutics (DTx) has led to the development of cutting-edge solutions that improve the lives of individuals with chronic health conditions.`}
            type={'herosection'}
          />
          <Description
            text={`One of our flagship products, healOgut, is a testament to our commitment to innovation. Designed to manage Functional Gastrointestinal Disorders (FGID), healOgut offers a comprehensive treatment protocol that includes Cognitive Behavioral Therapy (CBT), mindfulness practices, gut-directed hypnosis, exercise, and diet management. `}
            type={'herosection'}
          />
          <Description
            text={`What sets MicroHeal apart is our dedication to clinically validated protocols and evidence-based practices. We work closely with hospitals, pharmaceutical companies, and healthcare professionals to ensure that our solutions meet the highest standards of efficacy and safety.`}
            type={'herosection'}
          />
          <CustomLink link={'/'} text={'Get Started'} />
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
