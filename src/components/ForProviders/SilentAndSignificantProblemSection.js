import React from 'react';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';
import Image from 'next/image';

const SilentAndSignificantProblemSection = () => {
  return (
    <div className='bg-themeWhite'>
      <div className="container py-4 md:py-10 ">
        <Title text={'A silent and significant problem'} />
        <Description
          text={
            'You might not know it – people with digestive health issues don’t like to bring it up – but millions of people are struggling with their GI health right now.'
          }
        />
        <div className="grid gap-6 py-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={'/assets/bg-vector-1.svg'}
                alt={'Vector'}
                width={300}
                height={300}
                className="mx-auto h-auto max-h-[150px] max-w-[250px] lg:max-h-[200px] lg:max-w-[300px]"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 md:space-y-6">
                <p className="text-center text-5xl font-bold text-white lg:text-6xl">
                  25%
                </p>
                <p className="text-center text-lg font-semibold capitalize text-white md:text-xl">
                  of your population
                </p>
              </div>
            </div>
            <p className="text-center text-themeMediumGrey">
              1 in 4 working-age people suffer from a chronic digestive health
              condition
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={'/assets/bg-vector-2.svg'}
                alt={'Vector'}
                width={300}
                height={300}
                className="mx-auto h-auto max-h-[150px] max-w-[250px] lg:max-h-[200px] lg:max-w-[300px]"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 md:space-y-6">
                <p className="text-center text-5xl font-bold text-white lg:text-6xl">
                  8 days
                </p>
                <p className="text-center text-lg font-semibold capitalize text-white md:text-xl">
                  per month
                </p>
              </div>
            </div>
            <p className="text-center text-themeMediumGrey">
              Debilitating GI symptoms are the 2nd leading cause of absenteeism
              and presenteeism, after the common cold
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={'/assets/bg-vector-3.svg'}
                alt={'Vector'}
                width={300}
                height={300}
                className="mx-auto h-auto max-h-[150px] max-w-[250px] lg:max-h-[200px] lg:max-w-[300px]"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 md:space-y-6">
                <p className="text-center text-5xl font-bold text-white lg:text-6xl">
                  71%
                </p>
                <p className="text-center text-lg font-semibold capitalize text-white md:text-xl">
                  not satisfied
                </p>
              </div>
            </div>
            <p className="text-center text-themeMediumGrey">
              Most GI patients are not satisfied with their current care, causing
              many to give up on preventive care
            </p>
          </div>
        </div>
        <CustomLink
          text={'Understanding Prevalence'}
          link={'#'}
          className="mx-auto block"
        />
      </div></div>
  );
};

export default SilentAndSignificantProblemSection;
