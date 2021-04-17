import React from 'react';
import MainThanksReport from './../components/acknow/MainThanksReport'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const ThanksReport = () => {
  return (
    <Container padding40>
      <Header />
      <MainThanksReport />
      <Footer />
    </Container>
  );
}

export default ThanksReport;
