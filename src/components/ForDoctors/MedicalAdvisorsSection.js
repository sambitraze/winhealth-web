import React from 'react';
import Title from '../Title';
import Image from 'next/image';

const MedicalAdvisorsSection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container py-4 md:py-10">
        <Title text="Medical Advisors" />
        <div className="mx-auto grid max-w-screen-md gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src={'/assets/profile-1.png'}
              alt={'profile-1'}
              width={200}
              height={200}
              className="h-[200px] min-h-[200px] w-[200px] max-w-[200px] object-contain"
            />
            <div>
              <p className="font-brandon text-lg font-semibold text-themeGrey md:text-xl">
                Dr. John Doe
              </p>
              <p className="text-center font-proxima text-sm md:text-base md:font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis gravida est, in porttitor orci{' '}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src={'/assets/profile-2.png'}
              alt={'profile-1'}
              width={200}
              height={200}
              className="h-[200px] min-h-[200px] w-[200px] max-w-[200px] object-contain"
            />
            <div>
              <p className="font-brandon text-lg font-semibold text-themeGrey md:text-xl">
                Dr. John Doe
              </p>
              <p className="text-center font-proxima text-sm md:text-base md:font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis gravida est, in porttitor orci{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAdvisorsSection;
