import React from 'react';
import ForPatientsHerosection from '../../components/ForPatients/ForPatientsHerosection';
import Layout from '../../components/Layout';
import FacilitiesSection from '../../components/ForPatients/FacilitiesSection';
import RedesignedDigestiveCareSection from '../../components/ForPatients/RedesignedDigestiveCareSection';
import SilentAndSignificantProblemSection from '../../components/ForPatients/SilentAndSignificantProblemSection';

const ForPatients = () => {
  return (
    <Layout>
      <ForPatientsHerosection />
      <FacilitiesSection />
      <SilentAndSignificantProblemSection />
      <RedesignedDigestiveCareSection />
    </Layout>
  );
};

export default ForPatients;
