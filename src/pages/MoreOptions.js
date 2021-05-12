import React from 'react';
import MainMoreOptions from './../components/settings/MainMoreOptions'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const MoreOptions = () => {
  return (
    <Container padding40>
      <Header />
      <MainMoreOptions/>
      <Footer />
    </Container>
  );
}

export default MoreOptions;
