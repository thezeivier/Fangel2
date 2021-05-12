import React from 'react';
import Header from './../components/general/RegHeader'
import MainDashboard from './../components/dashboard/MainDashboardSpaces'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const DashBoardSpaces = () => {
  return (
    <Container>
      <Header />
      <MainDashboard />
      <Footer />
    </Container>
  );
}

export default DashBoardSpaces;
