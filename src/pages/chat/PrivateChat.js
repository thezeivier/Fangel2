import React, {useContext} from 'react';
import { useRouteMatch, useParams } from 'react-router-dom'
import MainPrivateChat from '../../components/privateChat/MainPrivateChat'
import Header from '../../components/general/RegHeader'
import Footer from '../../components/general/Footer'
import { Container } from '../../components/general/InternalLayout'

import { GetDataFromInbox } from '../../components/privateChat/algorithms/GetDataFromInbox'
import { AppContext } from '../../App'

const PrivateChat = () => {
  const match = useRouteMatch("/inbox/t/:idInbox")
  const getRouteInbox = match ? match.params.idInbox : ""
  const getRoute = useParams()
  const { authState, userFromDB} = useContext(AppContext)
  const getInboxDoc = GetDataFromInbox('inbox', authState.uid)

  if(getInboxDoc.status === "loading") return <p>Pending...</p>
  if(getInboxDoc.error) return <p>Error</p>
  
  return (
    <Container>
      <Header />
      <MainPrivateChat getInboxDoc={getInboxDoc} getRouteInbox={getRouteInbox} userFromDB={userFromDB} authState={authState}/>
      <Footer mobile="none"/>
    </Container>
  );
}

export default PrivateChat;
