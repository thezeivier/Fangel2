import React from 'react';
import MainReport from './../components/support/MainReport'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const ReportAProblem = () => {
  return (
    <Container>
      <Header />
      <MainReport />
      <Footer />
    </Container>
  );
}

export default ReportAProblem;
