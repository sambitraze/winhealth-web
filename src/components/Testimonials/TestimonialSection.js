import React from 'react';
import { Carousel } from '@mantine/carousel';
import TestimonialCard from './TestimonialCard';
import Description from '../Description';
import Title from '../Title';

const TestimonialSection = () => {
  const data = [
    {
      "name": "Aniruddh Shah",
      "designation": "Businessman",
      "message": "After years of battling irritable bowel syndrome (IBS), I decided to try the gut-based digital therapeutics program for functional disorders. It was a game-changer! The personalized approach and comprehensive support helped me manage my IBS symptoms effectively. I finally feel like I have control over my gut health."
    }, 
    {
      "name": "Prakash Vyas",
      "designation": "Software Engineer",
      "message": " I suffered from chronic acid reflux for as long as I can remember. Joining the gut-based digital therapeutic program was the best decision I ever made. Not only did it help me find relief from my acid reflux, but it also educated me on maintaining a healthy gut. I can't thank the program enough!"
    },
    {
      "name": "Rajesh singh",
      "designation": "Marketing Head",
      "message": "As someone who has been dealing with chronic constipation, I was skeptical about trying yet another solution. However, the gut-based digital therapeutics program exceeded my expectations. It offered a holistic approach to address my condition, and I've experienced regular bowel movements like never before."
    },
  ]
  return (
    <div className="bg-themeWhite py-7 md:py-14">
      <div className="container">
        <Title text={'We have earned a Lifetime of trust'} />
        <Description
          text={
            ''
          }
        />

        <div className="mt-7 hidden justify-center gap-6 md:mt-14 md:grid md:grid-cols-3">
          {data.map((item, index) => {
            return (
              <TestimonialCard
                key={index}
                name={data[index]['name']}
                designation={data[index]['designation']}
                testimonial={data[index]['message']}
                image={{
                  src: '/assets/profile-image.png',
                  alt: 'Andrew Jones Image',
                }}
              />
            );
          })}
        </div>

        <div className="mt-7 pb-12 md:hidden">
          <Carousel
            slideSize="100%"
            slideGap="md"
            withControls={false}
            withIndicators
          >
            {data.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <TestimonialCard
                    name={data[index]['name']}
                    designation={data[index]['designation']}
                    testimonial={data[index]['message']}
                    image={{
                      src: '/assets/profile-image.png',
                      alt: 'profile-image.png',
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

export default TestimonialSection;
