import React from 'react';
import MainIndividualChat from '../../components/privateChat/MainInvidualChat'
import Header from '../../components/general/RegHeader'
import Footer from '../../components/general/Footer'
import { Container } from '../../components/general/InternalLayout'

const InvidualChat = () => {
  return (
    <Container>
      <Header />
      <MainIndividualChat />
      <Footer mobile="none"/>
    </Container>
  );
}

export default InvidualChat;
