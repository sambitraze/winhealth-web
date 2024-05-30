import React from 'react';
import Layout from '../../components/Layout';
import BlogsHerosection from '../../components/Blogs/BlogsHerosection';
import BlogsSection from '../../components/Blogs/BlogSection';

const sections = [
  {
    id: 1,
    label: 'Latest Linkedin Blogs',
    value: 'latest-linkedin-blogs',
    blogs: [
      {
        id: 1,
        title: `We are delighted to have a brainstorming AMA (hashtag#askmeanything) session at T-Hub with Endiya Partners today in Hyderabad.`,
        link: 'https://www.linkedin.com/posts/win-health_askmeanything-startup-funding-activity-7196519022325067776-rkXJ',
        imageURL: '/assets/linkedin.webp',
        date: '3 May 2024'
      },
      {
        id: 2,
        title: 'Our hashtag#gut plays a more crucial role on our health than we realize. It can affect everything, from our mood, and energy, to our brain. But how do we judge if our gut is healthy or not?',
        link: 'https://www.linkedin.com/posts/win-health_how-gut-influences-overall-health-activity-7193850078711660544-hHqz',
        imageURL: '/assets/linkedin.webp',
        date: '5 May 2024'
      },
      {
        id: 3,
        title: 'Functional Gastrointestinal Disorders (FGIDs) can have a profound impact on our physical hashtag#health, mental hashtag#wellbeing and our social life. Our blog delves into these very impacts, aiming to enhance our understan',
        link: 'https://www.linkedin.com/posts/win-health_health-wellbeing-fgids-activity-7194576331089575936-tsXX',
        imageURL: '/assets/linkedin.webp',
        date: '16 May 2024'
      },
      {
        id: 4,
        title: 'Dive into the world of hashtag#guthealth with our latest hashtag#blog! Learn how simple dietary changes can make a world of difference in managing hashtag#FGID symptoms.',
        link: 'https://www.linkedin.com/posts/win-health_guthealth-blog-fgid-activity-7196740164059070466-4g3L',
        imageURL: '/assets/linkedin.webp',
        date: '16 May 2024'
      },
      {
        id: 5,
        title: `Did you know that what you eat can have a profound impact on your hashtag#gut health? Ultra-processed foods, often convenient but low in hashtag#nutritional value, can wreak havoc on your digestive system. Here's how:`,
        link: 'https://www.linkedin.com/posts/win-health_gut-nutritional-fiber-activity-7198203539926503424-WUVH',
        imageURL: '/assets/linkedin.webp',
        date: '23 May 2024'
      },
      {
        id: 6,
        title: 'Did you know that your hashtag#gut and hashtag#brain are in constant communication? This connection, known as the gut-brain axis, plays a crucial role in your overall hashtag#health and hashtag#wellbeing. 🌟',
        link: 'https://www.linkedin.com/posts/win-health_gut-brain-health-activity-7199638202628911104-x4XV',
        imageURL: '/assets/linkedin.webp',
        date: '24 May 2024'
      },
      {
        id: 7,
        title: 'Did you know that a healthy hashtag#gut is key to reducing hashtag#inflammation and boosting your overall hashtag#wellbeing? Dive into our latest hashtag#carousel to learn more about the powerful connection between your hashtag#gut health and hashtag#inflammation.',
        link: 'https://www.linkedin.com/posts/win-health_gut-health-and-inflammation-activity-7200373922586849281-taYw',
        imageURL: '/assets/linkedin.webp',
        date: '26 May 2024'
      },
      {
        id: 8,
        title: 'Struggling with gut health issues? Say goodbye to discomfort and hello to hashtag#healOgut!',
        link: 'https://www.linkedin.com/posts/win-health_healogut-worlddigestiveday-gutdisorders-activity-7201559985925812224-aNSF',
        imageURL: '/assets/linkedin.webp',
        date: '30 May 2024'
      },
    ],
  }, {
    id: 1,
    label: 'Latest Medium Blogs',
    value: 'latest-medium-blogs',
    blogs: [
      {
        id: 1,
        title: 'Inside Out: The Surprising Impact of Gut Health on Your Body',
        link: 'https://medium.com/@whealth1234/inside-out-the-surprising-impact-of-gut-health-on-your-body-19753da3c419',
        imageURL: '/assets/medium.webp',
        date: '3 May 2024'
      },
      {
        id: 2,
        title: 'Unraveling the Impact of Functional Gastrointestinal Disorders on Health',
        link: 'https://medium.com/@whealth1234/unraveling-the-impact-of-functional-gastrointestinal-disorders-on-health-50a7674024bd',
        imageURL: '/assets/medium.webp',
        date: '10 May 2024'
      },
      {
        id: 3,
        title: 'Unlocking the Power of Diet: Managing FGIDs',
        link: 'https://medium.com/@whealth1234/unlocking-the-power-of-diet-managing-fgids-7a10e7ec6533',
        imageURL: '/assets/medium.webp',
        date: '16 May 2024'
      },
      {
        id: 4,
        title: 'Mind And Microbiome: Understanding the Gut-Brain Axis',
        link: 'https://medium.com/@whealth1234/mind-and-microbiome-understanding-the-gut-brain-axis-423a48643935',
        imageURL: '/assets/medium.webp',
        date: '24 May 2024'
      },
    ],
  },
];

const Index = () => {
  return (
    <Layout>
      <BlogsHerosection />
      {
        sections.map((item, index) => {
          return (<BlogsSection sectionName={item['label']} blogs={item['blogs']} key={item['value']} />);
        })
      }
    </Layout>
  );
};

export default Index;
