import React from 'react';
import Layout from '../../components/Layout';
import BlogsHerosection from '../../components/Blogs/BlogsHerosection';
import LatestBlogsSection from '../../components/Blogs/LatestBlogsSection';
import InThePressSection from '../../components/Blogs/InThePressSection';
import OurAchievementsSection from '../../components/Blogs/OurAchievementsSection';

const Index = () => {
  return (
    <Layout>
      {/* <BlogsHerosection />
      <LatestBlogsSection />
      <OurAchievementsSection />
      <InThePressSection /> */}
      <div className='pt-10 text-center'>
        <a
          href={'#'}
          className="text-xl "
        >
          Comming Soon
        </a></div>
    </Layout>
  );
};

export default Index;
