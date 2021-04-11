import React, { useContext, useRef } from 'react';
import Wrapper from './../general/Wrapper'
import EmbedVideo from './EmbedVideo'
import CommentsBox from './CommentsBox'
import InputComments from './InputComments'
import { ContainerResponsive, MainOnlyDesktop } from './styles/sMainVideo'

import { CommentsContainer, Transperent } from './styles/sCommentsBox'
import { AppContext } from '../../App'

import { GetChatRoomMessages } from './algorithms/GetChatRoomMessages'

const VideoUser = ({communityData}) => {
  const { userFromDB } = useContext(AppContext)
  const {data, status, error} = GetChatRoomMessages(communityData.roomName)
  const lastMsgRef = useRef()
  
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>

  return (
    <MainOnlyDesktop>
      <EmbedVideo communityData={communityData} />
      <Wrapper height="100%">
        <ContainerResponsive>
          <CommentsBox data={data} userFromDB={userFromDB} lastMsgRef={lastMsgRef}/>
          <InputComments userFromDB={userFromDB} lastMsgRef={lastMsgRef} roomName={communityData.roomName}/>
        </ContainerResponsive>
      </Wrapper>
    </MainOnlyDesktop>
  );
}

export default VideoUser;
