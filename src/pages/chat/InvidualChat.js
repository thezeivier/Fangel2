import React from 'react';
import MainIndividualChat from '../../components/privateChat/MainIndividualChat'
import Header from '../../components/general/RegHeader'
import Footer from '../../components/general/Footer'

const InvidualChat = () => {
  return (
    <>
      <Header />
      <MainIndividualChat />
      <Footer mobile="none"/>
    </>
  );
}

export default InvidualChat;
