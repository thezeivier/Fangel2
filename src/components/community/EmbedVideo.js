import React from 'react';
import { ReactComponent as NumberPeopleSVG } from './icons/numberPeople.svg'
import { VideoContainer, EmbedContainer, CountContainer } from './styles/sEmbedVideo'

const EmbedVideo = ({ src }) => {
  return (
    <VideoContainer>
      <EmbedContainer>
        <iframe src={src} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </EmbedContainer>
      <CountContainer>
        <span>18</span>
        <NumberPeopleSVG />
      </CountContainer>
    </VideoContainer>
  );
}

export default EmbedVideo;
