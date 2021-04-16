import React, {useContext} from 'react';
import { AppContext } from '../../App'
import { VideoContainer, EmbedContainer, CountContainer, TitleOnlyDesktopContainer } from './styles/sEmbedVideo'
import { ReactComponent as NumberPeopleSVG } from './icons/numberPeople.svg'
import { ReactComponent as CommunitySVG } from './../general/icons/community.svg'


import VideoCall from './VideoCall'

const EmbedVideo = ({ communityData, isAdmin }) => {
  const userFromDB = useContext(AppContext)
  const myDataUser = userFromDB.userFromDB
  
  return (
    <VideoContainer>
      <TitleOnlyDesktopContainer>
        <CommunitySVG />
        <h3>{communityData.title}</h3>
      </TitleOnlyDesktopContainer>
      <EmbedContainer>
        <VideoCall dataUser={myDataUser} communityData={communityData} isAdmin={isAdmin}/>
      </EmbedContainer>
{/*       <CountContainer>
        <span>18</span>
        <NumberPeopleSVG />
      </CountContainer> */}
    </VideoContainer>
  );
}

export default EmbedVideo;
