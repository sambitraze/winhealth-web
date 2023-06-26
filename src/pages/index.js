import Head from 'next/head';
import Layout from '../components/Layout';
import TestimonialSection from '../components/Testimonials/TestimonialSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>WinHealth</title>
        <meta
          name="description"
          content="WinHealth- Unleash Gut Health & Heal your Gut (HOg)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <TestimonialSection />
      </Layout>
    </>
  );
}
