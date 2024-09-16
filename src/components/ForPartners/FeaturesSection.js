import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <div>
      <div className="bg-themeBlue">
        <div className="container py-4 md:py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            <Image
              src={'/assets/desktop-team.svg'}
              alt={'Doctors'}
              width={250}
              height={250}
              className="col-span-2 mx-auto max-h-[250px] w-full max-w-[200px] object-contain lg:max-w-[250px]"
            />
            <div className="col-span-2 flex flex-col justify-center md:col-span-4 md:gap-4">
              <p className="text-lg font-bold capitalize text-white md:text-2xl">
                Integrated, coordinated care
              </p>
              <p className="font-proxima text-sm text-white md:text-base">
                MicroHeal surrounds your patients with a team of GI-specialized
                clinicians, including registered dietitians, GI behavioral
                health providers, social workers, health coaches, and more to
                supplement your existing care and help your patients find
                relief.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-themeDarkPink">
        <div className="container py-4 md:py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            <div className="col-span-2 flex flex-col justify-center md:col-span-4 md:gap-4">
              <p className="text-left text-lg font-bold capitalize text-white md:text-right md:text-2xl">
                Evidence-based care model
              </p>
              <p className="text-left font-proxima text-sm text-white md:text-right md:text-base">
                MicroHeal takes pride in our approach to clinical rigor. Our
                clinicians all bring prior experience in gastroenterology, and
                undergo an intensive onboarding process before seeing patients.
                Our clinical care follows societal guidelines from the
                ACG/AGA/AASLD/ROME and the most updated clinical evidence,
                supported by advanced data analytics and purpose-built
                technology to achieve symptom control and disease remission.
              </p>
            </div>
            <Image
              src={'/assets/doctor-notes.svg'}
              alt={'Doctors'}
              width={250}
              height={250}
              className="order-first col-span-2 mx-auto max-h-[200px] w-full max-w-[200px] object-contain md:order-last lg:max-w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
