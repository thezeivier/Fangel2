import React, {useContext} from 'react';
import { AppContext } from '../../App'
import ButtonLeaveCom from './../general/ButtonLeaveCom'
import { VideoContainer, EmbedContainer, CountContainer, TitleOnlyDesktopContainer,
         DescripcionContainer, ButtonLeaveContainer } from './styles/sEmbedVideo'
import { ReactComponent as NumberPeopleSVG } from './icons/numberPeople.svg'
import { ReactComponent as CommunitySVG } from './../general/icons/community.svg'

import VideoCall from './VideoCall'

const EmbedVideo = ({ communityData, isAdmin }) => {
  const userFromDB = useContext(AppContext)
  const {myDataUser, authState, communityProvider} = userFromDB
  
  
  
  return (
    <VideoContainer>
      <TitleOnlyDesktopContainer>
        <DescripcionContainer>
          <CommunitySVG />
          <h3>{communityData.title}</h3>
        </DescripcionContainer>
        <ButtonLeaveContainer>
          <ButtonLeaveCom displayDesktop="flex" communityProvider={communityProvider}/>
        </ButtonLeaveContainer>
      </TitleOnlyDesktopContainer>
      <EmbedContainer>
        <VideoCall dataUser={myDataUser} authState={authState} communityData={communityData} isAdmin={isAdmin}/>
      </EmbedContainer>
      {/*<CountContainer>
        <span>18</span>
        <NumberPeopleSVG />
      </CountContainer> */}
    </VideoContainer>
  );
}

export default EmbedVideo
