import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';

const benifits = [
  {
    id: 1,
    name: 'GI-specialized care',
    description:
      'Gastroenterologists and GI nurse practitioners guide the treatment journey',
    icon: '/assets/facilities/mobile.svg',
  },
  {
    id: 2,
    name: 'Nutrition and behavioral health',
    description:
      'Support to identify food triggers and work on the brain-gut connection',
    icon: '/assets/facilities/diet.svg',
  },
  {
    id: 3,
    name: 'Personalized care plans',
    description: 'Integrated care plans tailored to each individual',
    icon: '/assets/facilities/notes.svg',
  },
  {
    id: 4,
    name: 'Health Coaching',
    description: 'Support to integrate recommended changes into daily life',
    icon: '/assets/facilities/heart.svg',
  },
  {
    id: 5,
    name: 'Labs and Diagnostics',
    description: 'Local labs or at-home tests and tracking tools',
    icon: '/assets/facilities/microscope.svg',
  },
  {
    id: 6,
    name: 'Monitoring and Messaging',
    description: 'Symptom tracking and 24/7 to access to a care team',
    icon: '/assets/facilities/mobile.svg',
  },
];

const BenifitsCard = ({ benifit }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <Image
        src={benifit.icon}
        alt={benifit.name}
        width={100}
        height={100}
        className="h-auto max-w-[80px] md:max-w-[100px]"
      />
      <p className="max-w-xs text-center font-brandon text-lg font-semibold capitalize tracking-wider text-themeGrey md:text-2xl">
        {benifit.name}
      </p>
      <p className="mx-auto max-w-xs text-center font-proxima text-sm font-medium tracking-wider text-themeGrey md:text-base">
        {benifit.description}
      </p>
    </div>
  );
};

const BenifitsOfPartnering = () => {
  return (
    <div className="bg-white py-4 md:py-10">
      <div className="container">
        <Title text={'Benefits of partnering with us'} />
        <Description
          text={
            'At Winhealth, our commitment to value-driven care revolves around prioritizing the well-being of our patients and the excellence of their treatment. We emphasize personalized attention and the latest advancements in medical technology to ensure that each patient receives customized care tailored to their specific needs. Our objective is not only to deliver effective treatment but also to enhance the overall quality of life for every individual under our care.'
          }
        />
        <div className="mt-8 hidden gap-x-4 gap-y-8 md:grid md:grid-cols-3">
          {benifits.map((benifit) => {
            return <BenifitsCard key={benifit.id} benifit={benifit} />;
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
            {benifits.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <BenifitsCard benifit={item} />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BenifitsOfPartnering;
