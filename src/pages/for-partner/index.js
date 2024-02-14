import React from 'react';
import Layout from '../../components/Layout';
import ForDoctorsHerosection from '../../components/ForPartners/ForDoctorsHerosection';
import BenifitsOfPartnering from '../../components/ForPartners/BenifitsOfPartnering';
import ServicesOffered from '../../components/ForPartners/ServiceOffered';
import OutcomesSection from '../../components/ForPartners/OutcomesSection';
import ConditionsWeTreatSection from '../../components/ForPartners/ConditionsWeTreatSection';
import MedicalAdvisorsSection from '../../components/ForPartners/MedicalAdvisorsSection';

const ForPatients = () => {
  return (
    <Layout>
      <ForDoctorsHerosection />
      <BenifitsOfPartnering />
      <ServicesOffered />
      <OutcomesSection />
      <ConditionsWeTreatSection />
      <MedicalAdvisorsSection />
    </Layout>
  );
};

export default ForPatients;
