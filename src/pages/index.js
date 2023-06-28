import Layout from '../components/Layout';
import TestimonialSection from '../components/Testimonials/TestimonialSection';
import HomepageHerosection from '../components/Homepage/HomepageHerosection';
import OurTrustedExpertsSection from '../components/Homepage/OurTrustedExpertsSection';

export default function Home() {
  return (
    <Layout>
      <HomepageHerosection />
      <OurTrustedExpertsSection />
      <TestimonialSection />
    </Layout>
  );
}
