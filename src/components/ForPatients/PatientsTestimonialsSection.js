import React from 'react';
import Image from 'next/image';

const PatientsTestimonialCard = ({
  name,
  image,
  testimonial,
  location,
  isImageToTheLeft = true,
}) => {
  return (
    <div className="grid gap-4 overflow-x-scroll md:grid-cols-6">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className={`mx-auto h-auto object-contain lg:max-w-[150px] ${
          isImageToTheLeft ? 'order-first' : 'md:order-last'
        }`}
      />
      <div className="flex flex-col justify-center text-center md:col-span-5 md:text-left">
        <h3 className="text-lg font-bold text-themeGrey md:text-2xl">
          {name}, {location}
        </h3>
        <p className="font-proxima text-sm text-themeGrey md:text-lg">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

const PatientsTestimonialsSection = () => {
  return (
    <div className="mx-auto max-w-screen-lg p-4 md:py-10">
      <div className="flex flex-col gap-4">
        <PatientsTestimonialCard
          name="Felix"
          location="Florida"
          image="/assets/profile-1.png"
          testimonial={
            'Winhealth has been a whole new level of care. I feel so much better equipped to handle my digestive issues and am back to living life uninterrupted by pain.”'
          }
          isImageToTheLeft={true}
        />
        <PatientsTestimonialCard
          name="Johanna"
          location="Texas"
          image="/assets/profile-2.png"
          testimonial={
            'Winhealth has been a whole new level of care. I feel so much better equipped to handle my digestive issues and am back to living life uninterrupted by pain.”'
          }
          isImageToTheLeft={false}
        />
      </div>
    </div>
  );
};

export default PatientsTestimonialsSection;
