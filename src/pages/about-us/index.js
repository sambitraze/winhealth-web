import Layout from '../../components/Layout';
import OurValuesSection from '../../components/AboutUs/OurValuesSection';
import OurTeamSection from '../../components/AboutUs/OurTeamSection';
import OurFoundersSection from '../../components/AboutUs/OurFoundersSection';

const AboutUs = () => {
  return (
    <Layout>
      <OurFoundersSection />
      <OurTeamSection />
      <OurValuesSection />
    </Layout>
  );
};

export default AboutUs;
