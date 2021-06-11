import React, { useContext, useRef, useEffect } from 'react';
import Wrapper from './../general/Wrapper'
import EmbedVideo from './EmbedVideo'
import CommentsBox from './CommentsBox'
import InputComments from './InputComments'
import ModalSettingsAdmin from './../../pages/inCommunity/ModalSettingsAdmin'
import MatchInterest from './MatchInterest'
import { ContainerResponsive, MainOnlyDesktop } from './styles/sMainVideo'
/* import { ReactComponent as VideoSettingsSVG } from './../general/icons/videoSettings.svg' */
import { AppContext } from '../../App'
import firebase from 'firebase/app'
import { GetDataFromCollection } from './algorithms/GetDataFromCollection'

const MainVideoUser = ({ communityData, modalIsOpen, open, closeModal, isAdmin, isSubSpace, communityDataSubSpace }) => {
  const lastMsgRef = useRef()
  const { userFromDB, authState, fangelConnectGlobalDataProvider } = useContext(AppContext)
  const {data, status, error} = !isSubSpace ? GetDataFromCollection(communityData.roomName, 'chatroom', 'messages') : 
    GetDataFromCollection(communityData.roomName, 'chatroom', 'messages', 'subMessages' , communityDataSubSpace.id, isSubSpace)
  const messageRef = !isSubSpace ? firebase.firestore().collection('chatroom').doc(communityData.roomName).collection('messages') : 
    firebase.firestore().collection('chatroom').doc(communityData.roomName).collection('subMessages').doc(communityDataSubSpace.id).collection('messages')

  useEffect(()=>{
    return ()=>{
      lastMsgRef.current = false;
    }
  },[])
  
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>
  const {creatorPreferences, joinnerPreferences, spaceId} = fangelConnectGlobalDataProvider.fangelConnectGlobalData
  
  const preferencesMatch = creatorPreferences.filter((creatorItem, index) => joinnerPreferences.includes(creatorItem))
  return (
    <MainOnlyDesktop>
      <EmbedVideo communityData={communityData} isAdmin={isAdmin} isSubSpace={isSubSpace} communityDataSubSpace={communityDataSubSpace} />
      <Wrapper height="100%">
        <ContainerResponsive>
          <MatchInterest preferencesMatch={preferencesMatch} spaceId={spaceId}/>
          <CommentsBox data={data} userFromDB={userFromDB} lastMsgRef={lastMsgRef} />
          <InputComments userFromDB={userFromDB} data={data} messageRef={messageRef} lastMsgRef={lastMsgRef} name={authState.displayName} open={open} /> 
        </ContainerResponsive>
      </Wrapper>
      <ModalSettingsAdmin communityData={communityData} modalIsOpen={modalIsOpen} isSubSpace={isSubSpace} closeModal={closeModal} communityDataSubSpace={communityDataSubSpace}/>
    </MainOnlyDesktop>
  );
}

export default MainVideoUser;
