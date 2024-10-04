import React from 'react';
import Title from '../Title';
import Description from '../Description';

const WeCoordinateInPersonSection = () => {
  return (
    <div className="bg-themeBlue py-10 md:py-16">
      <div className="container">
        <Title
          text={'We coordinate in-person care'}
          className="text-white lg:text-4xl capitalize"
        />
        <Description
          text={
            'MicroHeal takes a virtual-first approach to care. If members need in-person labs or diagnostics, we take a concierge approach to coordinate their care at a convenient, in-network location.'
          }
          className="text-white"
        />
      </div>
    </div>
  );
};

export default WeCoordinateInPersonSection;
