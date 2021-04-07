import React from 'react';
import { VideoContainer, EmbedContainer, CountContainer, TitleOnlyDesktopContainer } from './styles/sEmbedVideo'
import { ReactComponent as NumberPeopleSVG } from './icons/numberPeople.svg'
import { ReactComponent as CommunitySVG } from './../general/icons/community.svg'

const EmbedVideo = ({ src }) => {
  return (
    <VideoContainer>
      <TitleOnlyDesktopContainer>
        <CommunitySVG />
        <h3>Construyendo Fangel en 3 días</h3>
      </TitleOnlyDesktopContainer>
      <EmbedContainer>
        <iframe width="560" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </EmbedContainer>
      <CountContainer>
        <span>18</span>
        <NumberPeopleSVG />
      </CountContainer>
    </VideoContainer>
  );
}

export default EmbedVideo;
