import React from 'react';
import Title from '../Title';
import Description from '../Description';
import Image from 'next/image';

const BlogsHerosection = () => {
  return (
    <div className="bg-themeWhite">
      <div className="container grid gap-4 py-4 md:grid-cols-2 md:py-10 lg:py-16">
        <div className="flex flex-col justify-center gap-2">
          <Title type={'herosection'} text={'know what’s new! '} />
          <Description
            text={'We regularly upgrade our blogs.'}
            type={'herosection'}
            className="font-semibold"
          />
          <Description
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi. Donec id elementum urna. Aenean et est odio. Nunc nunc neque, venenatis fringilla nunc.'
            }
            type={'herosection'}
          />
        </div>
        <Image
          src={'/assets/blog-thumbnail.svg'}
          alt={'Blog Thumbnail'}
          width={500}
          height={300}
          className="ml-auto h-auto max-h-[300px]"
        />
      </div>
    </div>
  );
};

export default BlogsHerosection;
