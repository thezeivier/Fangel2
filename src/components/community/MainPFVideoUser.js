import React from 'react';
/* import VideoCall from './VideoCall' */
import { EmbedContainer } from './styles/sEmbedVideo'
import { VideoContainer, TitleStyled, SvgsContainer, Transparent } from './styles/sMainPFVideo'

import { ReactComponent as CloseSVG } from './../general/icons/close.svg'
import { ReactComponent as FullSreenSVG } from './icons/fullScreen.svg'

const MainPFVideoUser = ({children}) => {
  return (
    <VideoContainer>
      <SvgsContainer className="svgsContainer">
        <FullSreenSVG className="fullScreenSvg"/>
        <CloseSVG />
      </SvgsContainer>
      <EmbedContainer hover>
        {children}
      </EmbedContainer>
      <TitleStyled as="h3">Title community</TitleStyled>
    </VideoContainer>
  );
}

export default MainPFVideoUser;
