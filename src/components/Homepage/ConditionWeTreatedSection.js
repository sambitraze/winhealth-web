import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const cardData = [
  {
    title: 'IBS',
    description:
      'Chronic gut disorder with abdominal pain, bloating, constipation/diarrhea.',
  },
  {
    title: 'Functional Dyspepsia',
    description: 'Recurring upper abdominal pain, indigestion.',
  },
  {
    title: 'GERD',
    description: 'Chronic acid reflux causing heartburn, chest pain.',
  },
  {
    title: 'Functional constipation/diarrhea',
    description: 'Bowel movement issues without physical cause.',
  },
  {
    title: 'SIBO',
    description:
      'Excessive bacterial growth in small intestine causing bloating, diarrhea.',
  },
  {
    title: 'Bloating',
    description: 'Abdominal fullness and swelling.',
  },
  {
    title: 'Acid reflux/acidity',
    description: 'Stomach acid flowing back, causing heartburn.',
  },
  {
    title: 'Gas/gastritis',
    description: 'Excessive gas, inflammation of the stomach lining.',
  },
];

const Card = ({ title, description, className }) => {
  return (
    <div className={twMerge(`text-white`, className)}>
      <p className="font-brandon text-base font-semibold md:text-lg">{title}</p>
      <p className="max-w-[300px] font-proxima text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

const ConditionWeTreatedSection = () => {
  const CardComponents = cardData.map((card, index) => (
    <Card
      key={index}
      title={card.title}
      description={card.description}
      className={
        index === 1
          ? 'mr-[4.5rem]'
          : index === 2
          ? 'mr-12'
          : index === 5
          ? 'ml-[4.5rem]'
          : index === 6
          ? 'ml-12'
          : ''
      }
    />
  ));

  return (
    <div className="bg-themeBlue">
      <div className="container py-4 md:py-10">
        <Title text={'Condition we treat -FGID '} className="text-white" />
        <Description
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.'
          }
          className="text-white"
        />
        <div className="mt-10 hidden grid-cols-3 md:grid">
          <div className="flex flex-col items-end justify-between text-right">
            {CardComponents.slice(0, 4)}
          </div>
          <div className="mt-10">
            <Image
              src={'/assets/human-body.svg'}
              alt={'human body'}
              height={300}
              width={350}
              className="mx-auto mt-auto h-auto"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            {CardComponents.slice(4)}
          </div>
        </div>

        <div className="md:hidden">
          <Image
            src={'/assets/human-body.svg'}
            alt={'human body'}
            height={300}
            width={350}
            className="mx-auto mt-auto h-auto"
          />
          <div className="grid grid-cols-2 gap-x-2">
            {cardData.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  className="mt-4 text-center"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionWeTreatedSection;
