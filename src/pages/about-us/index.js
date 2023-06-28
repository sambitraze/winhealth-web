import Layout from '../../components/Layout';
import OurValuesSection from '../../components/AboutUs/OurValuesSection';
import OurTeamSection from '../../components/AboutUs/OurTeamSection';
import OurFoundersSection from '../../components/AboutUs/OurFoundersSection';
import FoundersMessageSection from '../../components/AboutUs/FoundersMessageSection';
import VisionMissionSection from '../../components/AboutUs/VisionMissionSection';
import OurInvestorsSection from '../../components/AboutUs/OurInvestorsSection';
import AboutUsHeroSection from '../../components/AboutUs/AboutUsHeroSection';

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsHeroSection />
      <VisionMissionSection />
      <OurFoundersSection />
      <FoundersMessageSection />
      <OurTeamSection />
      <OurInvestorsSection />
      <OurValuesSection />
    </Layout>
  );
};

export default AboutUs;
