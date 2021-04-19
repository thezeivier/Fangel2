import React from 'react';
import MainPrivateChat from '../../components/privateChat/MainPrivateChat'
import Header from '../../components/general/RegHeader'
import Footer from '../../components/general/Footer'
import { Container } from '../../components/general/InternalLayout'

const PrivateChat = () => {
  return (
    <Container>
      <Header />
      <MainPrivateChat />
      <Footer mobile="none"/>
    </Container>
  );
}

export default PrivateChat;
