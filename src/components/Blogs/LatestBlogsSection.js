import React from 'react';
import Title from '../Title';
import { Carousel } from '@mantine/carousel';
import BlogCard from './BlogCard';

const LatestBlogsSection = () => {
  return (
    <div className="container py-10">
      <Title text={'Latest Blogs'} />

      <div className="mt-7 pb-10">
        <Carousel
          slideSize="25%"
          slideGap="md"
          withControls={false}
          withIndicators
          align="start"
          loop={true}
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '70%' },
          ]}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <Carousel.Slide key={index}>
                <BlogCard
                  title={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est '
                  }
                  link={'/blogs/1'}
                  imageURL={'/assets/blog-card-image.png'}
                  date={'5 May 2023'}
                  isEven={index % 2 === 0}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestBlogsSection;
