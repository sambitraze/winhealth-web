import Layout from '../../components/Layout';
import AboutUsHeroSection from '../../components/AboutUs/AboutUsHeroSection';
import TestimonialSection from '../../components/Testimonials/TestimonialSection';

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsHeroSection />
      {/* <VisionMissionSection /> */}
      {/* <OurFoundersSection /> */}
      {/* <FoundersMessageSection /> */}
      {/* <OurTeamSection /> */}
      {/* <OurInvestorsSection /> */}
      <TestimonialSection />
    </Layout>
  );
};

export default AboutUs;
