import React from 'react';
import Title from '../Title';
import Description from '../Description';
import TeamMemberCard from './TeamMemberCard';
import { Carousel } from '@mantine/carousel';

const OurTeamSection = () => {
  return (
    <div className="py-7 md:py-14">
      <div className="container">
        <Title text={'Our Founders'} />
        <Description
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis gravida est, in porttitor orci vulputate quis. Integer eu tempor magna, ac auctor est. Duis eu fringilla purus. Phasellus sit amet aliquam mi.'
          }
        />

        <div className="mx-auto mt-7 hidden max-w-screen-lg grid-cols-2 justify-center gap-4 md:mt-14 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-12">
          {[1, 2, 3].map((item, index) => {
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

        <div className="mt-7 md:hidden">
          <Carousel
            slideSize="75%"
            slideGap="md"
            withControls={false}
            withIndicators
            align="start"
            loop={true}
          >
            {[1, 2, 3].map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <TeamMemberCard
                    key={index}
                    name={'John Doe'}
                    designation={'Product Developer at Webflow'}
                    image={{
                      src: '/assets/team-member.jpg',
                      alt: 'John Doe Image',
                    }}
                  />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
