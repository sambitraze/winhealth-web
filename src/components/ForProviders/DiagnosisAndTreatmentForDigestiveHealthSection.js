import React from 'react';
import Title from '../Title';
import Description from '../Description';
import CustomLink from '../CustomLink';
import Image from 'next/image';

const DiagnosisAndTreatmentForDigestiveHealthSection = () => {
  return (
    <div className='bg-themeWhite'>
      <div className="container py-4 md:py-10 ">
        <Title text={'Diagnosis and treatment for digestive health'} />
        <Description
          text={
            'We’ve redesigned GI care around what patients really want and need – supportive, whole-person care that is also dramatically less expensive.'
          }
        />
        <div className="grid gap-6 py-8 md:grid-cols-3">
          <div className="relative">
            <Image
              src={'/assets/bg-vector-1.svg'}
              alt={'Vector'}
              width={300}
              height={300}
              className="mx-auto h-auto max-h-[175px] max-w-[250px] md:max-h-[200px] lg:max-h-[220px] lg:max-w-[300px]"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 md:space-y-6">
              <p className="whitespace-nowrap text-center text-2xl font-bold text-white lg:text-4xl">
                Whole-person
              </p>
              <p className="min-w-[200px] text-center text-base capitalize text-white md:text-lg">
                Dietary triggers, GI psychology, medications, lifestyle
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={'/assets/bg-vector-2.svg'}
              alt={'Vector'}
              width={300}
              height={300}
              className="mx-auto h-auto max-h-[175px] max-w-[250px] md:max-h-[200px] lg:max-h-[220px] lg:max-w-[300px]"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 md:space-y-6">
              <p className="whitespace-nowrap text-center text-2xl font-bold text-white lg:text-4xl">
                Clinically proven
              </p>
              <p className="min-w-[200px] text-center text-base capitalize text-white md:text-lg">
                Evidence-based, physician-led care
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={'/assets/bg-vector-3.svg'}
              alt={'Vector'}
              width={300}
              height={300}
              className="mx-auto h-auto max-h-[175px] max-w-[250px] md:max-h-[200px] lg:max-h-[220px] lg:max-w-[300px]"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 md:space-y-6">
              <p className="whitespace-nowrap text-center text-2xl font-bold text-white lg:text-4xl">
                Value-based
              </p>
              <p className="min-w-[200px] text-center text-base capitalize text-white md:text-lg">
                Innovative, cost-effecitive, seamless integration
              </p>
            </div>
          </div>
        </div>
        <CustomLink text={'Contact Us'} link={'#'} className="mx-auto block" />

        {/* <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={'/assets/team-image-1.svg'}
              alt={'Team Image'}
              width={300}
              height={300}
            />
            <p className="text-center text-lg font-bold text-themeGrey">
              Employers: Bring Winhealth to your employees
            </p>
            <CustomLink
              text={'Contact Us'}
              link={'#'}
              className="mx-auto block"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={'/assets/team-image-2.svg'}
              alt={'Team Image'}
              width={300}
              height={300}
            />
            <p className="text-center text-lg font-bold text-themeGrey">
              Health Plans: Add Winhealth to your value-based provider network
            </p>
            <CustomLink
              text={'Contact Us'}
              link={'#'}
              className="mx-auto block"
            />
          </div> */}
        {/* </div> */}
      </div></div>
  );
};

export default DiagnosisAndTreatmentForDigestiveHealthSection;
