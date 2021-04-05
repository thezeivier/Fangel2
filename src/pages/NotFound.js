import React from 'react';
import Main404 from '../components/pageNotFound/Main404'
import Header from '../components/general/RegHeader'
import Footer from '../components/general/Footer'
import { Container } from '../components/general/InternalLayout'

const NotFound = () => {
  return (
    <Container padding40>
      <Header />
      <Main404 />
      <Footer />
    </Container>
  );
}

export default NotFound;
