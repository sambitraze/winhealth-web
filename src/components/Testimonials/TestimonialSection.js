import React from 'react';
import { Carousel } from '@mantine/carousel';
import TestimonialCard from './TestimonialCard';
import Description from '../Description';
import Title from '../Title';

const TestimonialSection = () => {
  const data = [
    {
      "name": "Anonymous",
      "message": "After years of battling irritable bowel syndrome (IBS), I decided to try the gut-based digital therapeutics program for functional disorders. It was a game-changer! The personalized approach and comprehensive support helped me manage my IBS symptoms effectively. I finally feel like I have control over my gut health."
    },
    {
      "name": "Anonymous",
      "message": "I suffered from chronic acid reflux for as long as I can remember. Joining the gut-based digital therapeutic program was the best decision I ever made. Not only did it help me find relief from my acid reflux, but it also educated me on maintaining a healthy gut. I can't thank the program enough!"
    },
    {
      "name": "Anonymous",
      "message": "I was diagnosed with Crohn's disease, and managing the symptoms was a constant struggle. The gut-based DTx program tailored to my specific needs made all the difference. It provided me with tools and strategies to keep my Crohn's in check, improving my quality of life significantly."
    },
    {
      "name": "Anonymous",
      "message": "As someone who has been dealing with chronic constipation, I was skeptical about trying yet another solution. However, the gut-based digital therapeutics program exceeded my expectations. It offered a holistic approach to address my condition, and I've experienced regular bowel movements like never before."
    },
    {
      "name": "Anonymous",
      "message": "My journey with the gut-based DTx program for functional disorders has been transformative. Living with celiac disease was challenging, but the program's guidance on managing my diet and lifestyle has made a world of difference. I'm now able to enjoy gluten-free living to the fullest."
    },
    {
      "name": "Anonymous",
      "message": "Managing my lactose intolerance used to limit my food choices and social activities. Thanks to the gut-based digital therapeutics program, I've learned how to handle my condition better. It's been a relief to enjoy dairy-free options without the usual discomfort."
    }
  ]
  return (
    <div className="bg-themeWhite py-7 md:py-14">
      <div className="container">
        <Title text={'We earned lifetime full of trust'} />
        <Description
          text={
            ''
          }
        />

        <div className="mt-7 hidden justify-center gap-6 md:mt-14 md:grid md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <TestimonialCard
                key={index}
                name={data[index]['name']}
                designation={''}
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
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <TestimonialCard
                    name={data[index]['name']}
                    designation={''}
                    testimonial={data[index]['message']}
                    image={{
                      src: '/assets/profile-image.png',
                      alt: 'Andrew Jones Image',
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
