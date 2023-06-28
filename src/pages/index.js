import Head from 'next/head';
import Layout from '../components/Layout';
import TestimonialSection from '../components/Testimonials/TestimonialSection';
import HomepageHerosection from '../components/Homepage/HomepageHerosection';

export default function Home() {
  return (
    <Layout>
      <HomepageHerosection />
      <TestimonialSection />
    </Layout>
  );
}
