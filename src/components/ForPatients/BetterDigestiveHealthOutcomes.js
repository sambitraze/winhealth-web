import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';

const facilities = [
  {
    id: 1,
    description:
      'Overwhelming member satisfaction, and improved quality of life and work productivity',
    icon: '/assets/facilities/thumb.svg',
  },
  {
    id: 2,
    description:
      'Control prescription spend, manage biologics and infusion site of service',
    icon: '/assets/facilities/tablets.svg',
  },
  {
    id: 3,
    description:
      'Reduce expensive and avoidable ER visits, imaging, and hospitalizations',
    icon: '/assets/facilities/hospital.svg',
  },
];

const FacilityCard = ({ facility }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <Image
        src={facility.icon}
        alt={"Facility's Icon"}
        width={100}
        height={100}
        className="h-auto max-w-[80px] md:max-w-[100px]"
      />
      <p className="mx-auto max-w-xs text-center font-proxima text-sm font-medium tracking-wider text-themeGrey md:text-base">
        {facility.description}
      </p>
    </div>
  );
};

const RelationshipCareAndDeliveredVirtuallySection = () => {
  return (
    <div className="py-4 md:py-10">
      <div className="container">
        <Title text={'Better digestive health outcomes'} />
        <div className="mt-8 hidden gap-x-4 gap-y-8 md:grid md:grid-cols-3">
          {facilities.map((facility) => {
            return <FacilityCard key={facility.id} facility={facility} />;
          })}
        </div>
        <div className="mb-8 mt-4 md:hidden">
          <Carousel
            slideSize="60%"
            slideGap="md"
            withIndicators
            align="start"
            slidesToScroll={1}
            withControls={false}
            loop
          >
            {facilities.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <FacilityCard facility={item} />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RelationshipCareAndDeliveredVirtuallySection;
