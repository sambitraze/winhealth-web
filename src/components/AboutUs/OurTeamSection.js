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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.'
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
