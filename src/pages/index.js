import Head from 'next/head';
import Layout from '../components/Layout';
import TestimonialSection from '../components/Testimonials/TestimonialSection';

export default function Home() {
  return (
    <Layout>
      <TestimonialSection />
    </Layout>
  );
}
