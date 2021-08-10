import React, {useContext} from 'react';
import MainPrivateChat from '../../components/privateChat/MainPrivateChat'
import Header from '../../components/general/RegHeader'
import { Container } from '../../components/general/InternalLayout'

import { AppContext } from '../../App'

const PrivateChat = () => {
  
  return (
    <Container>
      <Header />
      <MainPrivateChat/>
    </Container>
  );
}

export default PrivateChat;
