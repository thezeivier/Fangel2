import React from 'react';
import MainHome from './../components/home/MainHome'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
/* import PFVideo from './inCommunity/PFVideo' */
import { Container } from './../components/general/InternalLayout'

const Home = () => {
  
  return (
    <Container>
      <Header />
      <MainHome />
      {/* <PFVideo /> */}
      <Footer />
    </Container>
  );
}

export default Home;
