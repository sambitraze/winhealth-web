import React from 'react';
import ForPatientsHerosection from '../../components/ForProviders/ForPatientsHerosection';
import Layout from '../../components/Layout';
import FacilitiesSection from '../../components/ForProviders/FacilitiesSection';
import RedesignedDigestiveCareSection from '../../components/ForProviders/RedesignedDigestiveCareSection';
import SilentAndSignificantProblemSection from '../../components/ForProviders/SilentAndSignificantProblemSection';
import PatientsTestimonialsSection from '../../components/ForProviders/PatientsTestimonialsSection';
import DiagnosisAndTreatmentForDigestiveHealthSection from '../../components/ForProviders/DiagnosisAndTreatmentForDigestiveHealthSection';
import BenifitsOfPartnering from '../../components/ForProviders/BenifitsOfPartnering';

const ForPatients = () => {
  return (
    <Layout>
      <ForPatientsHerosection />
      <FacilitiesSection />
      <SilentAndSignificantProblemSection />
      <RedesignedDigestiveCareSection />
      <DiagnosisAndTreatmentForDigestiveHealthSection />
      <BenifitsOfPartnering />
      {/* <WeCoordinateInPersonSection /> */}
      {/* <BetterDigestiveHealthOutcomes /> */}
      {/* <IntegratedWithHealthBenefitSection /> */}
      {/* <PatientsTestimonialsSection /> */}
      {/* <LatestNewsSection /> */}
    </Layout>
  );
};

export default ForPatients;
