import React from 'react';
import MainCreateCOne from './../components/createCommunity/MainCreateCOne'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const CreateCommunityOne = () => {
  return (
    <Container>
      <Header />
      <MainCreateCOne />
      <Footer />
    </Container>
  );
}

export default CreateCommunityOne;
