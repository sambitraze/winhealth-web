import React from 'react';
import Title from '../Title';
import LatestNewsCard from '../LatestNewsCard';
import { Carousel } from '@mantine/carousel';

const LatestNewsSection = () => {
  return (
    <div className="container py-4 md:py-10">
      <Title text={'Latest News'} />
      <div className="hidden gap-4 md:grid md:grid-cols-3">
        {[1, 2, 3].map((item, index) => {
          return (
            <LatestNewsCard
              key={index}
              title={'Lorem ipsum dolor sit amet, consectetur '}
              imageURL={'/assets/blog-card-image.png'}
              link={'#'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc nunc neque, venenatis fringilla nunc.'
              }
            />
          );
        })}
      </div>
      <div className="mb-8 mt-4 md:hidden">
        <Carousel
          slideSize="85%"
          slideGap="md"
          withIndicators
          align="start"
          slidesToScroll={1}
          withControls={false}
          loop={true}
        >
          {[1, 2, 3].map((item, index) => {
            return (
              <Carousel.Slide key={index}>
                <LatestNewsCard
                  title={'Lorem ipsum dolor sit amet, consectetur '}
                  imageURL={'/assets/blog-card-image.png'}
                  link={'#'}
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc nunc neque, venenatis fringilla nunc.'
                  }
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestNewsSection;
