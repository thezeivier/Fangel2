import React, {useContext} from 'react';
import { AppContext } from '../../App'
import ButtonLeaveCom from './../general/ButtonLeaveCom'
import { VideoContainer, EmbedContainer, CountContainer, TitleOnlyDesktopContainer,
         DescripcionContainer, ButtonLeaveContainer } from './styles/sEmbedVideo'
import { ReactComponent as NumberPeopleSVG } from './icons/numberPeople.svg'
import { ReactComponent as CommunitySVG } from './../general/icons/community.svg'

// import VideoCall from './VideoCall'

const EmbedVideo = ({ communityData, isAdmin, communityDataSubSpace, isSubSpace }) => {
  const contextFromApp = useContext(AppContext)
  const {videoCall, communityProvider} = contextFromApp
  
  return (
    <VideoContainer>
      <TitleOnlyDesktopContainer>
        <DescripcionContainer>
          <CommunitySVG />
          <h3>{!isSubSpace ? communityData.title :  communityDataSubSpace.nameOfSpace}</h3>
        </DescripcionContainer>
        <ButtonLeaveContainer>
          <ButtonLeaveCom displayDesktop="flex" communityProvider={communityProvider}/>
        </ButtonLeaveContainer>
      </TitleOnlyDesktopContainer>
      <EmbedContainer>
        {videoCall}
      </EmbedContainer>
      {/*<CountContainer>
        <span>18</span>
        <NumberPeopleSVG />
      </CountContainer> */}
    </VideoContainer>
  );
}

export default EmbedVideo
