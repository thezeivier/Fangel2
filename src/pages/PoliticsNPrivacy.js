import React from 'react';
import MainPolitics from './../components/support/MainPolitics'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const PoliticsNPrivacy = () => {
  return (
    <Container>
      <MainPolitics />
      <Footer />
    </Container>
  );
}

export default PoliticsNPrivacy;
