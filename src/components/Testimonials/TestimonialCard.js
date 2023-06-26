import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ name, designation, image, testimonial }) => {
  return (
    <div className="space-y-4 rounded-md bg-themeLightBlue px-4 pb-10 pt-4 md:pb-4">
      <div className="flex items-center gap-4">
        <Image
          src={image.src}
          alt={image.alt}
          width={50}
          height={50}
          className="h-auto w-[50px] rounded-full"
        />
        <div className="leading-5">
          <p className="font-medium uppercase">{name}</p>
          <p className="font-ptSans font-light">{designation}</p>
        </div>
      </div>
      <p className="font-light text-themeGrey">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
