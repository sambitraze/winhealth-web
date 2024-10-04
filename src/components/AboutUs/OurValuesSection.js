import React from 'react';
import { Carousel } from '@mantine/carousel';
import Description from '../Description';
import Title from '../Title';

const ValuesCard = ({ text }) => {
  return (
    <div className="rounded-md bg-themeLightBlue p-6 font-proxima font-light">
      {text}
    </div>
  );
};

const OurValuesSection = () => {
  return (
    <div className="py-7 md:py-14">
      <div className="container">
        <Title text={'We earned lifetime full of trust'} 
            className={'capitalize'}/>
        <Description
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.'
          }
        />

        <div className="mt-7 hidden justify-center gap-6 md:mt-14 md:grid md:grid-cols-3">
          {[1, 2, 3].map((item, index) => {
            return (
              <ValuesCard
                key={index}
                text={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.\n' +
                  '\n' +
                  'Fusce consectetur vestibulum interdum. Sed ultricies, magna elementum euismod semper, enim leo tincidunt mauris, at dapibus erat magna sed justo. Maecenas egestas orci nec felis ullamcorper tincidunt. Nulla pretium varius enim et fringilla.'
                }
              />
            );
          })}
        </div>

        <div className="mt-6 md:hidden">
          <Carousel
            slideSize="100%"
            slideGap="md"
            withControls={false}
            withIndicators
          >
            {[1, 2, 3].map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <ValuesCard
                    key={index}
                    text={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.\n' +
                      '\n' +
                      'Fusce consectetur vestibulum interdum. Sed ultricies, magna elementum euismod semper, enim leo tincidunt mauris, at dapibus erat magna sed justo. Maecenas egestas orci nec felis ullamcorper tincidunt. Nulla pretium varius enim et fringilla.'
                    }
                  />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurValuesSection;
