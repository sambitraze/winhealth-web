import React from 'react';
import Title from '../Title';

const OutcomesSection = () => {
  return (
    <div className="bg-White">
      <div className="container py-4 md:py-10">
        <Title text="Outcomes" />
        <div className="mx-auto grid max-w-screen-md gap-6 text-center md:grid-cols-2">
          <div>
            <p className="font-brandon text-6xl font-bold text-themeGrey md:text-8xl">
              98%
            </p>
            <p className="mx-auto mt-2 max-w-[200px] font-brandon text-sm font-medium capitalize md:max-w-none md:text-xl">
              patient satisfaction
            </p>
          </div>
          <div>
            <p className="font-brandon text-6xl font-bold text-themeGrey md:text-8xl">
              91%
            </p>
            <p className="mx-auto mt-2 max-w-[200px] font-brandon text-sm font-medium capitalize md:max-w-none md:text-xl">
              achieve symptom control in 4 months or less
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomesSection;
