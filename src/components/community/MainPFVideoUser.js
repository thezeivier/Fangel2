import React from 'react';
import {useHistory} from 'react-router-dom'
/* import VideoCall from './VideoCall' */
import { EmbedContainer } from './styles/sEmbedVideo'
import { VideoContainer, TitleStyled, SvgsContainer, Transparent } from './styles/sMainPFVideo'

import { ReactComponent as CloseSVG } from './../general/icons/close.svg'
import { ReactComponent as FullSreenSVG } from './icons/fullScreen.svg'

const MainPFVideoUser = ({children, communityGlobalData, setCommunityGlobalData}) => {
  const history = useHistory()

  const handleLeaveCommunity = () => {
    setCommunityGlobalData && setCommunityGlobalData(false)
    window.location.reload()
  }

  return (
    <VideoContainer>
      <SvgsContainer className="svgsContainer">
        <FullSreenSVG className="fullScreenSvg" onClick={()=>{history.push(`/room/${communityGlobalData.roomName}`)}}/>
        <CloseSVG onClick={handleLeaveCommunity}/>
      </SvgsContainer>
      <EmbedContainer hover>
        {children}
      </EmbedContainer>
      <TitleStyled as="h3">{communityGlobalData.title}</TitleStyled>
    </VideoContainer>
  );
}

export default MainPFVideoUser;
