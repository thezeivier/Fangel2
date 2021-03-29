import React from 'react';
import MainSupport from './../components/support/MainSupport'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const Support = () => {
  return (
    <Container>
      <Header />
      <MainSupport />
      <Footer />
    </Container>
  );
}

export default Support;
