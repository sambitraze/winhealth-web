import React from 'react';
import { Carousel } from '@mantine/carousel';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  return (
    <div className="bg-themeWhite py-10">
      <div className="container">
        <p className="mb-4 text-center text-2xl font-medium capitalize text-themeGrey md:text-3xl">
          We earned lifetime full of trust
        </p>
        <p className="mx-auto max-w-2xl text-center text-themeGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          venenatis gravida est, in porttitor orci vulputate quis. Integer eu
          tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit
          amet aliquam mi.
        </p>

        <div className="mt-6 hidden justify-center gap-6 md:grid md:grid-cols-3">
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
