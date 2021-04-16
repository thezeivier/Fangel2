import React, { useContext, useRef } from 'react';
import Wrapper from './../general/Wrapper'
import EmbedVideo from './EmbedVideo'
import CommentsBox from './CommentsBox'
import InputComments from './InputComments'
import ModalSettingsAdmin from './../../pages/inCommunity/ModalSettingsAdmin'
import { ContainerResponsive, MainOnlyDesktop, ButtonConfiguration } from './styles/sMainVideo'
import { CommentsContainer } from './styles/sCommentsBox'
import { ReactComponent as VideoSettingsSVG } from './../general/icons/videoSettings.svg'
import { AppContext } from '../../App'

import { GetChatRoomMessages } from './algorithms/GetChatRoomMessages'

const MainVideoUser = ({ communityData, modalIsOpen, open, displayNoAdmin, closeModal, isAdmin }) => {
  const { userFromDB } = useContext(AppContext)
  const {data, status, error} = GetChatRoomMessages(communityData.roomName)
  const lastMsgRef = useRef()
  
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
          <InputComments userFromDB={userFromDB} data={data} lastMsgRef={lastMsgRef} roomName={communityData.roomName}/>
        </ContainerResponsive>
      </Wrapper>
      <ModalSettingsAdmin modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </MainOnlyDesktop>
  );
}

export default MainVideoUser;
