import Layout from '../../components/Layout';
import OurValuesSection from '../../components/AboutUs/OurValuesSection';
import OurTeamSection from '../../components/AboutUs/OurTeamSection';
import OurFoundersSection from '../../components/AboutUs/OurFoundersSection';
import FoundersMessageSection from '../../components/AboutUs/FoundersMessageSection';
import VisionMissionSection from '../../components/AboutUs/VisionMissionSection';

const AboutUs = () => {
  return (
    <Layout>
      <VisionMissionSection />
      <OurFoundersSection />
      <FoundersMessageSection />
      <OurTeamSection />
      <OurValuesSection />
    </Layout>
  );
};

export default AboutUs;
