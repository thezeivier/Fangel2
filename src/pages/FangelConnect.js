import React from 'react';
import Header from './../components/general/RegHeader'
import MainFangelConnect from './../components/fangelConnect/MainFangelConnect'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const FangelConnect = () => {
  return (
    <Container>
      <Header />
      <MainFangelConnect />
      <Footer />
    </Container>
  );
}

export default FangelConnect;
