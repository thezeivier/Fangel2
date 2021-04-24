import React, { useContext, useRef, useEffect } from 'react';
import Wrapper from './../general/Wrapper'
import {EmbedVideo} from './EmbedVideo'
import CommentsBox from './CommentsBox'
import InputComments from './InputComments'
import ModalSettingsAdmin from './../../pages/inCommunity/ModalSettingsAdmin'
import { ContainerResponsive, MainOnlyDesktop, ButtonConfiguration } from './styles/sMainVideo'
import { ReactComponent as VideoSettingsSVG } from './../general/icons/videoSettings.svg'
import { AppContext } from '../../App'
import firebase from 'firebase/app'
import { GetDataFromCollection } from './algorithms/GetDataFromCollection'

const MainVideoUser = ({ communityData, modalIsOpen, open, displayNoAdmin, closeModal, isAdmin }) => {
  const lastMsgRef = useRef()
  const { userFromDB, authState } = useContext(AppContext)
  const {data, status, error} = GetDataFromCollection(communityData.roomName, 'chatroom', 'messages')
  const messageRef = firebase.firestore().collection('chatroom').doc(communityData.roomName).collection('messages')

  useEffect(()=>{
    return ()=>{
      lastMsgRef.current = false;
    }
  },[])
  
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>
  
  return (
    <MainOnlyDesktop>
      <EmbedVideo communityData={communityData} isAdmin={isAdmin}/>
      <Wrapper height="100%">
        <ContainerResponsive>
          <ButtonConfiguration secondary display={displayNoAdmin} onClick={open}>
            <VideoSettingsSVG />
            Configuraciones
          </ButtonConfiguration>
          <CommentsBox data={data} userFromDB={userFromDB} lastMsgRef={lastMsgRef}/>
          <InputComments userFromDB={userFromDB} data={data} messageRef={messageRef} lastMsgRef={lastMsgRef} name={authState.displayName}/>
        </ContainerResponsive>
      </Wrapper>
      <ModalSettingsAdmin communityData={communityData} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </MainOnlyDesktop>
  );
}

export default MainVideoUser;
