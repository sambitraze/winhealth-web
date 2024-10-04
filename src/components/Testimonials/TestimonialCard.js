import React from 'react';

const TestimonialCard = ({ name, designation, testimonial }) => {
  return (
    <div className="space-y-4 rounded-md bg-themeLightBlue p-4">
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <div key={index}>⭐</div>
        ))}
      </div>

      {/* Testimonial */}
      <p className="font-light text-themeGrey">{testimonial}</p>

      {/* Designation and Name */}
      <div className="leading-5">
        <p className="font-medium uppercase">{name}</p>
        <p className="font-ptSans text-sm text-gray-500">{designation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
