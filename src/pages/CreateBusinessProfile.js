import React from 'react';
import MainCreateBusinessProfile from './../components/businessProfile/MainCreateBusinessProfile'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const CreateBusinessProfile = () => {
  return (
    <Container>
      <Header />
      <MainCreateBusinessProfile />
      <Footer />
    </Container>
  );
}

export default CreateBusinessProfile;
