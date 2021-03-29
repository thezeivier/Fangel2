import React from 'react';
import MainFAQs from './../components/support/MainFAQs'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const FAQs = () => {
  return (
    <Container>
      <Header />
      <MainFAQs />
      <Footer />
    </Container>
  );
}

export default FAQs;
