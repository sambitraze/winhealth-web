import React from 'react';
import Image from 'next/image';

const facilities = [
  {
    id: 1,
    name: 'Diagnostics',
    icon: '/assets/facilities/microscope.svg',
  },
  {
    id: 2,
    name: 'Medications',
    icon: '/assets/facilities/tablets.svg',
  },
  {
    id: 3,
    name: 'Nutrition',
    icon: '/assets/facilities/diet.svg',
  },
  {
    id: 4,
    name: 'Mind-Gut',
    icon: '/assets/facilities/mind.svg',
  },
  {
    id: 5,
    name: 'Lifestyle',
    icon: '/assets/facilities/heart.svg',
  },
  {
    id: 6,
    name: 'Monitoring',
    icon: '/assets/facilities/mobile.svg',
  },
];

const FacilitiesSection = () => {
  return (
    <div className="container grid grid-cols-3 gap-y-6 py-10 lg:grid-cols-6">
      {facilities.map((facility) => (
        <div
          key={facility.id}
          className="flex flex-col items-center justify-center gap-2"
        >
          <Image
            src={facility.icon}
            alt={facility.name}
            width={100}
            height={100}
            className="h-auto max-w-[60px] md:max-w-[100px]"
          />
          <p className="text-center font-brandon font-medium tracking-wider">
            {facility.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FacilitiesSection;
