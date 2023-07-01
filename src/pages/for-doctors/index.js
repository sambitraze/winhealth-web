import React from 'react';
import Layout from '../../components/Layout';
import ForDoctorsHerosection from '../../components/ForDoctors/ForDoctorsHerosection';
import BecomeAPartnerSection from '../../components/ForDoctors/BecomeAPartnerSection';
import FeaturesSection from '../../components/ForDoctors/FeaturesSection';
import OutcomesSection from '../../components/ForDoctors/OutcomesSection';

const ForPatients = () => {
  return (
    <Layout>
      <ForDoctorsHerosection />
      <FeaturesSection />
      <BecomeAPartnerSection />
      <OutcomesSection />
    </Layout>
  );
};

export default ForPatients;
