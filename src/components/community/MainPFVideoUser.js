import React from 'react';
import styled from 'styled-components'
/* import VideoCall from './VideoCall' */
import { EmbedContainer } from './styles/sEmbedVideo'
import { VideoContainer, TitleStyled, SvgsContainer, Transparent } from './styles/sMainPFVideo'

import { ReactComponent as CloseSVG } from './../general/icons/close.svg'
import { ReactComponent as FullSreenSVG } from './icons/fullScreen.svg'

const MainPFVideoUser = () => {
  return (
    <VideoContainer>
      <SvgsContainer className="svgsContainer">
        <FullSreenSVG className="fullScreenSvg"/>
        <CloseSVG />
      </SvgsContainer>
      <EmbedContainer hover>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/QaXhVryxVBk" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </EmbedContainer>
      <TitleStyled as="h3">Title community</TitleStyled>
    </VideoContainer>
  );
}

export default MainPFVideoUser;
