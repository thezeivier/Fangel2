import React from 'react';
import MainSettings from './../components/settings/MainSettings'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const Settings = () => {
  return (
    <Container padding40>
      <Header />
      <MainSettings />
      <Footer />
    </Container>
  );
}

export default Settings;
