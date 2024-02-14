import Layout from '../components/Layout';
import TestimonialSection from '../components/Testimonials/TestimonialSection';
import HomepageHerosection from '../components/Homepage/HomepageHerosection';
import OurTrustedExpertsSection from '../components/Homepage/OurTrustedExpertsSection';
import OurScienceSection from '../components/Homepage/OurScienceSection';
import CareApproachSection from '../components/Homepage/CareApproachSection';
import DownloadAppSection from '../components/Homepage/DownloadAppSection';
import ConditionWeTreatedSection from '../components/Homepage/ConditionWeTreatedSection';
import CoreMission from '../components/Homepage/CoreMission';
import WhyGutHealth from '../components/Homepage/WhyGutHealth';

export default function Home() {
  return (
    <Layout> 
      <HomepageHerosection />
      <CoreMission />
      <DownloadAppSection />
      <WhyGutHealth />
      <ConditionWeTreatedSection />
      <CareApproachSection />
      <OurScienceSection />
      <OurTrustedExpertsSection />
      <TestimonialSection />
    </Layout>
  );
}
