import React from 'react';\
import MainFangelConnect from './../components/fangelConnect/MainFangelConnect'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const FangelConnect = () => {
  return (
    <Container>
      <MainFangelConnect />
      <Footer />
    </Container>
  );
}

export default FangelConnect;
