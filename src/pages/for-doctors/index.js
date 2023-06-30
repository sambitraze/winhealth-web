import React from 'react';
import Layout from '../../components/Layout';
import ForDoctorsHerosection from '../../components/ForDoctors/ForDoctorsHerosection';
import BecomeAPartnerSection from '../../components/ForDoctors/BecomeAPartnerSection';

const ForPatients = () => {
  return (
    <Layout>
      <ForDoctorsHerosection />
      <BecomeAPartnerSection />
    </Layout>
  );
};

export default ForPatients;
