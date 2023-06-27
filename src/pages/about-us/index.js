import Layout from '../../components/Layout';
import OurValuesSection from '../../components/AboutUs/OurValuesSection';
import OurTeamSection from '../../components/AboutUs/OurTeamSection';
import OurFoundersSection from '../../components/AboutUs/OurFoundersSection';
import FoundersMessageSection from '../../components/AboutUs/FoundersMessageSection';

const AboutUs = () => {
  return (
    <Layout>
      <OurFoundersSection />
      <FoundersMessageSection />
      <OurTeamSection />
      <OurValuesSection />
    </Layout>
  );
};

export default AboutUs;
