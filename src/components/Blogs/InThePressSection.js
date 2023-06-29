import React from 'react';
import Title from '../Title';
import BlogCard from './BlogCard';

const InThePressSection = () => {
  return (
    <div className="container py-10">
      <Title text={'In the press'} />
      <div className="mt-7 grid grid-cols-2 gap-2 md:gap-4 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <BlogCard
              key={index}
              title={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est '
              }
              link={'/blogs/1'}
              imageURL={'/assets/blog-card-image.png'}
              date={'5 May 2023'}
              isEven={index % 2 === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InThePressSection;
