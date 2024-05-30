import React from 'react';
import Title from '../Title';
import Description from '../Description';
import TeamMemberCard from './TeamMemberCard';

const OurTeamSection = () => {
  return (
    <div className="py-7 md:py-14">
      <div className="container">
        <Title text={'our team of stalwarts'} />
        <Description
          text={
            'At WinHealth.Care, we believe in the power of technology to transform healthcare. Our team of experts is committed to developing solutions that are not only effective but also accessible and affordable for all.'
          }
        />

        <div className="mx-auto mt-7 grid max-w-screen-lg grid-cols-2 justify-center gap-4 md:mt-14 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <TeamMemberCard
                key={index}
                name={'John Doe'}
                designation={'Product Developer at Webflow'}
                image={{
                  src: '/assets/team-member.jpg',
                  alt: 'John Doe Image',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
