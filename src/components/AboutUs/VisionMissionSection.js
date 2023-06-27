import React from 'react';

const VisionMissionSection = () => {
  return (
    <>
      <div className="bg-themeBlue">
        <div className="container flex flex-col gap-x-12 gap-y-4 py-7 text-white md:flex-row md:py-14">
          <p className="min-w-[150px] text-lg font-semibold md:text-2xl">
            Our Vision
          </p>
          <p className="font-proxima md:text-xl">
            Full Stack Digital Gastro (GI) Therapeutic Care - for all your need
            related to preventive care or gut chronic diseases management.
          </p>
        </div>
      </div>
      <div className="bg-themePink">
        <div className="container flex flex-col gap-x-12 gap-y-4 py-7 text-white md:flex-row md:py-14">
          <p className="min-w-[150px] text-lg font-semibold md:text-2xl">
            Our Mission
          </p>
          <p className="font-proxima md:text-xl">
            Our Mission is to enable a billion people to take control of their
            health and amplify their well being through the transformative power
            of the mind+nutrition.
          </p>
        </div>
      </div>
    </>
  );
};

export default VisionMissionSection;
