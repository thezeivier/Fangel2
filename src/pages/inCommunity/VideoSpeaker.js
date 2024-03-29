import React, { useState } from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from '../../components/general/RegHeader'
import VideoHeader from '../../components/general/VideoHeader'
import Footer from '../../components/general/Footer'
import { ContainerForCommunity } from '../../components/general/InternalLayout'
import MainSettingsAdmin from '../../components/settingsForAdmin/MainSettingsAdmin'
import VerticalHeader from '../../components/general/VerticalHeader'

const VideoSpeaker = ({communityData, isAdmin, communityDataSubSpace, isSubSpace, fangelConnectData}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openMoldal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }
  
  return (
    <>
      <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
      wrapper sin paddign en moviles y tablet*/}
        {/* <RegHeader />  */}{/* Solo para moviles */}
        <VerticalHeader />
        <VideoHeader 
          communityData={communityData} 
          communityDataSubSpace={communityDataSubSpace}
          isSubSpace={isSubSpace} 
          isSettings="none" 
          closeModal={closeModal} 
          modalIsOpen={modalIsOpen}/>
        <MainVideoUser 
          communityData={communityData}
          open={openMoldal}
          isSubSpace={isSubSpace}
          isAdmin={isAdmin}
          communityDataSubSpace={communityDataSubSpace}
          fangelConnectData={fangelConnectData}/>
        {/* Solo para desktop */}
        <MainSettingsAdmin 
          isAdmin={isAdmin}
          communityData={communityData}
          inDesktop="grid"
          isSubSpace={isSubSpace} 
          communityDataSubSpace={communityDataSubSpace}/>
        <Footer noMobile />
      </ContainerForCommunity>
    </>
  );
}

export default VideoSpeaker;
