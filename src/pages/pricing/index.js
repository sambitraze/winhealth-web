import React from 'react';
import Layout from '../../components/Layout';
import PricingHerosection from '../../components/Pricing/PricingHerosection';
import PricingSection from '../../components/Pricing/PricingSection';

const Pricing = () => {
  return (
    <Layout>
      <PricingHerosection />
      <PricingSection />
    </Layout>
  );
};

export default Pricing;
