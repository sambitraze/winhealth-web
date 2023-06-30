import React from 'react';
import ForPatientsHerosection from '../../components/ForPatients/ForPatientsHerosection';
import Layout from '../../components/Layout';
import FacilitiesSection from '../../components/ForPatients/FacilitiesSection';
import RedesignedDigestiveCareSection from '../../components/ForPatients/RedesignedDigestiveCareSection';
import SilentAndSignificantProblemSection from '../../components/ForPatients/SilentAndSignificantProblemSection';
import WeCoordinateInPersonSection from '../../components/ForPatients/WeCoordinateInPersonSection';
import LatestNewsSection from '../../components/ForPatients/LatestNewsSection';
import PatientsTestimonialsSection from '../../components/ForPatients/PatientsTestimonialsSection';
import DiagnosisAndTreatmentForDigestiveHealthSection from '../../components/ForPatients/DiagnosisAndTreatmentForDigestiveHealthSection';
import RelationshipCareAndDeliveredVirtuallySection from '../../components/ForPatients/RelationshipCareAndDeliveredVirtuallySection';
import BetterDigestiveHealthOutcomes from '../../components/ForPatients/BetterDigestiveHealthOutcomes';
import IntegratedWithHealthBenefitSection from '../../components/ForPatients/IntegratedWithHealthBenefitSection';

const ForPatients = () => {
  return (
    <Layout>
      <ForPatientsHerosection />
      <FacilitiesSection />
      <SilentAndSignificantProblemSection />
      <RedesignedDigestiveCareSection />
      <DiagnosisAndTreatmentForDigestiveHealthSection />
      <RelationshipCareAndDeliveredVirtuallySection />
      <WeCoordinateInPersonSection />
      <BetterDigestiveHealthOutcomes />
      <IntegratedWithHealthBenefitSection />
      <PatientsTestimonialsSection />
      <LatestNewsSection />
    </Layout>
  );
};

export default ForPatients;
