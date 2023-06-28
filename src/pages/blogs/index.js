import React from 'react';
import Layout from '../../components/Layout';
import BlogsHerosection from '../../components/Blogs/BlogsHerosection';
import LatestBlogsSection from '../../components/Blogs/LatestBlogsSection';
import InThePressSection from '../../components/Blogs/InThePressSection';

const Index = () => {
  return (
    <Layout>
      <BlogsHerosection />
      <LatestBlogsSection />
      <InThePressSection />
    </Layout>
  );
};

export default Index;
