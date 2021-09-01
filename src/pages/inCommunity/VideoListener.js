import React, {useEffect, useState} from 'react';
import MainVideoListener from '../../components/community/MainVideoListener'
import RegHeader from '../../components/general/RegHeader'
import VideoHeader from '../../components/general/VideoHeader'
import FooterForSpaces from '../../components/general/FooterForSpaces'
import { ContainerForCommunity } from '../../components/general/InternalLayout'
import MainSettingsAdmin from '../../components/settingsForAdmin/MainSettingsAdmin'
import VerticalHeader from '../../components/general/VerticalHeader'

const VideoListener = ({communityData, isSubSpace, communityDataSubSpace, fangelConnectData}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openMoldal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  useEffect(()=>{
  }, [])
  
  return (
    <>
      <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
        wrapper sin paddign en moviles y tablet*/}
        {/* <RegHeader /> */} {/* Solo para moviles */}
        <VerticalHeader />
        <VideoHeader
          communityData={communityData}
          communityDataSubSpace={communityDataSubSpace}
          isSubSpace={isSubSpace}
          isSettings="none"
          closeModal={closeModal} 
          modalIsOpen={modalIsOpen} 
        />
        <MainVideoListener
          communityData={communityData}
          open={openMoldal}
          isSubSpace={isSubSpace}
          displayNoAdmin="none"
          communityDataSubSpace={communityDataSubSpace}
          fangelConnectData={fangelConnectData}
        />
        {/* <MainSettingsAdmin 
          communityData={communityData}
          inDesktop="grid"
          isSubSpace={isSubSpace} 
          communityDataSubSpace={communityDataSubSpace}/> */}
        <FooterForSpaces noMobile/>
      </ContainerForCommunity>
    </>
  );
}

export default VideoListener;
