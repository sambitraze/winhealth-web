import React from 'react';
import Layout from '../../components/Layout';
import FAQHerosection from '../../components/FAQ/FAQHerosection';
import QnASection from '../../components/FAQ/QnASection';

const FAQ = () => {
  return (
    <Layout>
      <FAQHerosection />
      <QnASection />
    </Layout>
  );
};

export default FAQ;
