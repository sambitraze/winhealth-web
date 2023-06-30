import React from 'react';
import ForPatientsHerosection from '../../components/ForPatients/ForPatientsHerosection';
import Layout from '../../components/Layout';
import FacilitiesSection from '../../components/ForPatients/FacilitiesSection';
import RedesignedDigestiveCareSection from '../../components/ForPatients/RedesignedDigestiveCareSection';
import SilentAndSignificantProblemSection from '../../components/ForPatients/SilentAndSignificantProblemSection';
import DiagnosisAndTreatmentForDigestiveHealthSection from '../../components/ForPatients/DiagnosisAndTreatmentForDigestiveHealthSection';

const ForPatients = () => {
  return (
    <Layout>
      <ForPatientsHerosection />
      <FacilitiesSection />
      <SilentAndSignificantProblemSection />
      <RedesignedDigestiveCareSection />
      <DiagnosisAndTreatmentForDigestiveHealthSection />
    </Layout>
  );
};

export default ForPatients;
