import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
/* import VideoCall from './VideoCall' */
import { EmbedContainer } from './styles/sEmbedVideo'
import { VideoContainer, TitleStyled, SvgsContainer, Transparent } from './styles/sMainPFVideo'

import { ReactComponent as CloseSVG } from './../general/icons/close.svg'
import { ReactComponent as FullSreenSVG } from './icons/fullScreen.svg'

const MainPFVideoUser = ({children, communityGlobalData, setCommunityGlobalData}) => {
  const history = useHistory()

  const handleLeaveCommunity = () => {
    setCommunityGlobalData(false)
  }

  const handleClickToCommunity = () => {
    !communityGlobalData.communityDataSubSpace ?
      history.push(`/room/${communityGlobalData.roomName}`) :
      history.push(`/room/${communityGlobalData.communityData.roomName}/${communityGlobalData.communityDataSubSpace.id}`)
  }

  return (
    <VideoContainer>
      <SvgsContainer className="svgsContainer">
        <FullSreenSVG className="fullScreenSvg" onClick={handleClickToCommunity}/>
        <CloseSVG onClick={handleLeaveCommunity}/>
      </SvgsContainer>
      <EmbedContainer hover paddingBottom='56.25%'>
        {children}
      </EmbedContainer>
      <TitleStyled as="h3">{!communityGlobalData.communityDataSubSpace ? communityGlobalData.title : `${communityGlobalData.communityData.title} - ${communityGlobalData.communityDataSubSpace.nameOfSpace}`}</TitleStyled>
    </VideoContainer>
  );
}

export default MainPFVideoUser;
