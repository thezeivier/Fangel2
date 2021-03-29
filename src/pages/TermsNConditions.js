import React from 'react';
import MainTerms from './../components/support/MainTerms'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const TermsNConditions = () => {
  return (
    <Container>
      <Header />
      <MainTerms />
      <Footer />
    </Container>
  );
}

/* IMPORTANTE: Hacer un header del landing para los terminos */

export default TermsNConditions;
