import React from 'react';
import { Carousel } from '@mantine/carousel';
import TestimonialCard from './TestimonialCard';
import Description from '../Description';
import Title from '../Title';

const TestimonialSection = () => {
  return (
    <div className="bg-themeWhite py-7 md:py-14">
      <div className="container">
        <Title text={'We earned lifetime full of trust'} />
        <Description
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.'
          }
        />

        <div className="mt-7 hidden justify-center gap-6 md:mt-14 md:grid md:grid-cols-3">
          {[1, 2, 3].map((item, index) => {
            return (
              <TestimonialCard
                key={index}
                name={'Andrew Jones'}
                designation={'Product Developer at Webflow'}
                testimonial={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi. Fusce consectetur vestibulum interdum. Sed ultricies, magna elementum euismod semper, enim leo tincidunt mauris, at dapibus erat magna sed justo. Maecenas egestas orci nec felis ullamcorper tincidunt. Nulla pretium varius enim et fringilla.'
                }
                image={{
                  src: '/assets/profile-image.png',
                  alt: 'Andrew Jones Image',
                }}
              />
            );
          })}
        </div>

        <div className="mt-7 pb-12 md:hidden">
          <Carousel
            slideSize="100%"
            slideGap="md"
            withControls={false}
            withIndicators
          >
            {[1, 2, 3].map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <TestimonialCard
                    name={'Andrew Jones'}
                    designation={'Product Developer at Webflow'}
                    testimonial={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi. Fusce consectetur vestibulum interdum. Sed ultricies, magna elementum euismod semper, enim leo tincidunt mauris, at dapibus erat magna sed justo. Maecenas egestas orci nec felis ullamcorper tincidunt. Nulla pretium varius enim et fringilla.'
                    }
                    image={{
                      src: '/assets/profile-image.png',
                      alt: 'Andrew Jones Image',
                    }}
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

export default TestimonialSection;
