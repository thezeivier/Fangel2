import React, {useContext} from 'react';
import { AppContext } from '../../App'
import ButtonLeaveCom from './../general/ButtonLeaveCom'
import { VideoContainer, EmbedContainer, TitleOnlyDesktopContainer,
         DescripcionContainer, ButtonLeaveContainer } from './styles/sEmbedVideo'
import { ReactComponent as CommunitySVG } from './../general/icons/community.svg'

// import VideoCall from './VideoCall'

const EmbedVideo = ({ communityData, communityDataSubSpace, isSubSpace }) => {
  const contextFromApp = useContext(AppContext)
  const {videoCall, communityProvider, setCommunityGlobalData} = contextFromApp
  
  return (
    <VideoContainer>
      <TitleOnlyDesktopContainer>
        <DescripcionContainer>
          <CommunitySVG />
          <h3>{!isSubSpace ? communityData.title :  communityDataSubSpace.nameOfSpace}</h3>
        </DescripcionContainer>
        <ButtonLeaveContainer>
          <ButtonLeaveCom setCommunityGlobalData={setCommunityGlobalData} communityProvider={communityProvider}/>
        </ButtonLeaveContainer>
      </TitleOnlyDesktopContainer>
      <EmbedContainer paddingBottom='calc(100vh - 90px)'>
        {videoCall}
      </EmbedContainer>
    </VideoContainer>
  );
}

export default EmbedVideo
