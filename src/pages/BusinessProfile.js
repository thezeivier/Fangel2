import React from 'react';
import MainBusinessProfile from './../components/businessProfile/MainBusinessProfile'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'


const BusinessProfile = () => {
  return (
    <Container>
      <Header />
      <MainBusinessProfile/>
      <Footer />
    </Container>
  );
}

export default BusinessProfile;
