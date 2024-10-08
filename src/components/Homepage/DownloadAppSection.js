import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';
import Link from 'next/link';

const DownloadAppSection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container grid gap-10 py-10 sm:grid-cols-2">
        <Image
          unoptimized={true}
          src={'/assets/app-intro.gif'}
          alt={'App Image'}
          width={500}
          height={1000}
          className="order-2 max-h-[1000px] md:order-none"
        />
        {/* <video width={500}
          height={1000} controls preload="none" autoPlay muted playsinline >
          <source src={'/assets/app-intro.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="flex max-w-md flex-col justify-center gap-2 md:gap-4">
          <Title
            text={`heal O gut : India's First Gut Health App`}
            type={'herosection'}
            className={'text-left'}
          />
          <Description
            text={
              'heal O gut offers a clinically validated protocol combining behavioral and nutritional therapy to effectively treat chronic conditions. Our app provides personalized solutions for improved health outcomes, revolutionizing chronic condition management with a scientifically proven approach.'
            }
            className={'text-left text-sm text-themeMediumGrey md:text-base'}
          />
          {/* <ul className="list-disc pl-6 font-proxima text-sm text-themeMediumGrey md:text-base">
            <li>
              <span className="text-themeGrey">Mind</span> - Mental well-being.
            </li>
            <li>
              <span className="text-themeGrey">Nutrition</span> - Body.
            </li>
            <li>
              <span className="text-themeGrey">Gut care</span> - Mind-Nutrition
              balance.
            </li>
          </ul> */}
          {/* <CustomLink
            text={'Discover how it works'}
            link={'#'}
            className="shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]"
          /> */}
          <div />
          <div>
            <p className="font-semibold tracking-wide text-themeGrey md:text-lg">
              Download Now
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://apps.apple.com/app/healogut/id6468660817"
                target="_blank"
              >
                <Image
                  src={'/assets/app-store.png'}
                  alt={'App Store'}
                  width={150}
                  height={60}
                  className="h-auto max-w-[120px] md:max-w-[150px]"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.winhealth.healogut"
                target="_blank"
              >
                <Image
                  src={'/assets/play-store.png'}
                  alt={'App Store'}
                  width={150}
                  height={60}
                  className="h-auto max-w-[120px] md:max-w-[150px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
