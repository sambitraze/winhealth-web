import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import Description from '../Description';

const MedicalAdvisorsSection = () => {
  return (
    <div className="bg-white">
      <div className="container py-4 md:py-10">
        <Title text="Medical Advisors" />
        <Description
            text={
              `At Winhealth, our dedication to value-driven care centers on the patient's well-being and the quality of treatment they receive. We prioritize personalized attention and the latest in medical technology to ensure that each patient receives tailored care that meets their unique needs. Our goal is to not only provide effective treatment but also to enhance the overall quality of life for every individual we serve.`
            }
            type={'herosection'}
            className="text-center"
          />
        <div className="mx-auto grid max-w-screen-md gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src={'/assets/sindhu.png'}
              alt={'profile-1'}
              width={200}
              height={200}
              className="h-[200px] min-h-[200px] w-[200px] max-w-[200px] object-contain"
            />
            <div>
              <p className="font-brandon text-lg font-semibold text-themeGrey md:text-xl">
                Dr. Sindhu Sundar
              </p>
              {/* <p className="text-center font-proxima text-sm md:text-base md:font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis gravida est, in porttitor orci{' '}
              </p> */}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src={'/assets/vaishnavi.png'}
              alt={'profile-1'}
              width={200}
              height={200}
              className="h-[200px] min-h-[200px] w-[200px] max-w-[200px] object-contain"
            />
            <div>
              <p className="font-brandon text-lg font-semibold text-themeGrey md:text-xl">
                Dr. Vaishnavi Ponugoti
              </p>
              {/* <p className="text-center font-proxima text-sm md:text-base md:font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis gravida est, in porttitor orci{' '}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAdvisorsSection;
