import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';

const conditions = [
  {
    id: 1,
    name: 'Esophageal Disorders',
    image: '/assets/condition1.svg',
    points: [
      'Functional Chest pain',
      'Functional Heartburn',
      'Reflux Hypersensitivity',
    ],
  },
  {
    id: 2,
    name: 'Gastroduodenal Disorders',
    image: '/assets/condition2.svg',
    points: [
      'Functional Dysphagia',
      'Postprandial distress syndrome (PDS)',
      'Epigastric pain syndrome (EPS)',
      'Bleaching Disorders',
      'Excessive Supragastric belching',
      'Excessive gastric belching',
    ],
  },
  {
    id: 3,
    name: 'Bowel Disorders',
    image: '/assets/condition3.svg',
    points: [
      'Irritable bowel Syndrome (IBS)',
      'IBS with predominant constipation (IBS-C)',
      'IBS with predominant diarrhea (IBS-D)',
      'IBS with mixed bowel habits (IBS-M)',
      'IBS unclassified (IBS-U)',
      'Functional constipation',
      'Functional diarrhea',
      'Functional abdominal bloating/distension',
    ],
  },
];

const ConditionCard = ({ condition }) => {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={condition.image}
        alt={condition.image}
        width={200}
        height={200}
        className="h-auto max-w-[100px] md:max-w-[200px]"
      />
      <p className="mt-1 font-brandon text-lg font-semibold text-themeGrey md:text-xl">
        {condition.name}
      </p>
      <div className="mt-4 text-center font-proxima text-sm font-medium md:text-base">
        {condition.points.map((point, index) => {
          return (
            <p key={index} className="text-themeGrey">
              {point}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const ConditionsWeTreatSection = () => {
  return (
    <div className='bg-themeWhite'>
      <div className="container py-4 md:py-10">
        <Title text="Conditions We Treat" />
        <div className="hidden gap-4 py-4 md:grid md:grid-cols-3 md:py-10">
          {conditions.map((condition) => {
            return <ConditionCard key={condition.id} condition={condition} />;
          })}
        </div>
        <div className="mb-4 py-4 md:hidden md:py-10">
          <Carousel
            slideSize="60%"
            slideGap="xs"
            withIndicators
            align="center"
            slidesToScroll={1}
            withControls={false}
            loop
          >
            {conditions.map((condition) => {
              return (
                <Carousel.Slide key={condition.id}>
                  <ConditionCard condition={condition} />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div></div>
  );
};

export default ConditionsWeTreatSection;
