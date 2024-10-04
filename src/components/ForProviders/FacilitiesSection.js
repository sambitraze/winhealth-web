import React from 'react';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import Title from '../Title';
import Description from '../Description';

const Services1 = [
  {
    id: 1,
    name: 'GI-specialized care',
    description:
      'Gastroenterologists and GI nurse practitioners guide the treatment journey',
    icon: '/assets/facilities/service1.svg',
  },
  {
    id: 2,
    name: 'Nutrition & behavioral health',
    description:
      'Support to identify food triggers and work on the brain-gut connection',
    icon: '/assets/facilities/service2.svg',
  },
  {
    id: 3,
    name: 'Personalized care plans',
    description: 'Integrated care plans tailored to each individual',
    icon: '/assets/facilities/service3.svg',
  },
];

const Services2 = [
  {
    id: 4,
    name: 'Health Coaching',
    description: 'Support to integrate recommended changes into daily life',
    icon: '/assets/facilities/service4.svg',
  },
  {
    id: 5,
    name: 'Dynamic Dashboard',
    description:
      'Enhance symptom monitoring and activity tracking to support treatment outcomes.',
    icon: '/assets/facilities/service5.svg',
  },
  {
    id: 6,
    name: 'Monitoring and Messaging',
    description: 'Symptom tracking and 24/7 to access to a care team',
    icon: '/assets/facilities/service6.svg',
  },
  {
    id: 7,
    name: 'Mind-Gut Holistic care',
    description:
      'A suite of healthcare professionals to ensure quality care at all times',
    icon: '/assets/facilities/service7.svg',
  },
];

const FacilityCard = ({ facility }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-2 px-2">
      <Image
        src={facility.icon}
        alt={facility.name}
        width={100}
        height={100}
        className="h-auto max-w-[100px]"
      />
      <p className="text-center text-2xl font-bold tracking-wider">
        {facility.name}
      </p>
      <p className="text-l text-center tracking-wider">
        {facility.description}
      </p>
    </div>
  );
};

const FacilitiesSection = () => {
  return (
    <div className="container py-12">
      <Title
        text={'Comprehensive Treatment Services'}
        className={'capitalize'}
      />
      <Description
        text={
          'You might not know it – people with digestive health issues don’t like to bring it up – but millions of people are struggling with their GI health right now.'
        }
      />
      <div className="hidden grid-cols-3 gap-y-6 py-10 md:grid lg:grid-cols-3">
        {Services1.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
      <div className="hidden grid-cols-3 gap-y-6 py-10 md:grid lg:grid-cols-4">
        {Services2.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
      <div className="mb-8 mt-4 md:hidden">
        <Carousel
          slideSize="33.33333%"
          slideGap="md"
          withIndicators
          align="start"
          slidesToScroll={3}
          withControls={false}
        >
          {[...Services1, ...Services2].map((item, index) => {
            return (
              <Carousel.Slide key={index}>
                <FacilityCard facility={item} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default FacilitiesSection;
