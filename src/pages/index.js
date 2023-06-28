import Layout from '../components/Layout';
import TestimonialSection from '../components/Testimonials/TestimonialSection';
import HomepageHerosection from '../components/Homepage/HomepageHerosection';
import OurTrustedExpertsSection from '../components/Homepage/OurTrustedExpertsSection';
import OurScienceSection from '../components/Homepage/OurScienceSection';
import CareApproachSection from '../components/Homepage/CareApproachSection';

export default function Home() {
  return (
    <Layout>
      <HomepageHerosection />
      <CareApproachSection />
      <OurScienceSection />
      <OurTrustedExpertsSection />
      <TestimonialSection />
    </Layout>
  );
}
