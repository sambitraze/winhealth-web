import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';

const benefits = [
  {
    id: 1,
    title: 'Primary care',
  },
  {
    id: 2,
    title: 'Care navigation',
  },
  {
    id: 3,
    title: 'Mental health services',
  },
  {
    id: 4,
    title: 'Preferred local GI providers',
  },
  {
    id: 5,
    title: 'Other high value in-network providers',
  },
  {
    id: 6,
    title: 'Benefit exchangement platforms',
  },
];

const IntegratedWithHealthBenefitSection = () => {
  return (
    <div className="container py-4 md:py-10">
      <Title text={'Integrated with your existing health benefit ecosystem'} />
      <Description
        text={
          'Members may start with digestive health concerns, but Oshi Health will coordinate with other services in your benefit ecosystem to maximize health outcomes, amplifying benefits beyond GI care.'
        }
      />
      <div className="mx-auto mt-8 grid max-w-screen-lg gap-4 md:grid-cols-2 md:gap-6">
        {benefits.map((benefit) => {
          return (
            <div key={benefit.id} className="flex items-center gap-3">
              <Image
                src={'/assets/verified.svg'}
                alt={'verified'}
                width={20}
                height={20}
              />
              <p className="font-brandon text-base font-medium text-themeGrey md:text-xl">
                {benefit.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegratedWithHealthBenefitSection;
