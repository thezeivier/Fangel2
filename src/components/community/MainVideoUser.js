import React, { useContext, useRef, useEffect } from 'react';
import Wrapper from './../general/Wrapper'
import EmbedVideo from './EmbedVideo'
import CommentsBox from './CommentsBox'
import InputComments from './InputComments'
import ModalSettingsAdmin from './../../pages/inCommunity/ModalSettingsAdmin'
import { ContainerResponsive, MainOnlyDesktop, ButtonConfiguration } from './styles/sMainVideo'
import { ReactComponent as VideoSettingsSVG } from './../general/icons/videoSettings.svg'
import { AppContext } from '../../App'
import firebase from 'firebase/app'
import { GetDataFromCollection } from './algorithms/GetDataFromCollection'

const MainVideoUser = ({ communityData, modalIsOpen, open, displayNoAdmin, closeModal, isAdmin, isSubSpace, communityDataSubSpace }) => {
  const lastMsgRef = useRef()
  const { userFromDB, authState } = useContext(AppContext)
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
  return (
    <MainOnlyDesktop>
      <EmbedVideo communityData={communityData} isAdmin={isAdmin} isSubSpace={isSubSpace} communityDataSubSpace={communityDataSubSpace}/>
      <Wrapper height="100%">
        <ContainerResponsive>
{/*           <ButtonConfiguration secondary display={displayNoAdmin} onClick={open}>
            <VideoSettingsSVG />
            Configuraciones
          </ButtonConfiguration> */}
          <CommentsBox data={data} userFromDB={userFromDB} lastMsgRef={lastMsgRef}/>
          <InputComments userFromDB={userFromDB} data={data} messageRef={messageRef} lastMsgRef={lastMsgRef} name={authState.displayName} open={open} /> 
        </ContainerResponsive>
      </Wrapper>
      <ModalSettingsAdmin communityData={communityData} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </MainOnlyDesktop>
  );
}

export default MainVideoUser;
