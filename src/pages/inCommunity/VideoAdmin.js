import React, { useState } from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import AlertWarning from './../../components/general/AlertWarning'
import { ContainerForCommunity } from './../../components/general/InternalLayout'
import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'

import MainSpinner from '../../components/spinner/MainSpinner'

const VideoAdmin = ({communityData, isAdmin}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openMoldal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      {
        modalIsOpen ? 
        <AlertWarning closeModal={closeModal} />
        : <></>
      }
      {
        !communityData?
        <MainSpinner/>:
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
        wrapper sin paddign en moviles y tablet*/}
          <RegHeader /> {/* Solo para moviles */}
          <VideoHeader communityData={communityData} isSettings="none" closeModal={closeModal} modalIsOpen={modalIsOpen} />
          <MainVideoUser communityData={communityData} open={openMoldal} isAdmin={isAdmin}/>
          <MainSettingsAdmin inDesktop="grid"/>
          <Footer noMobile/>
        </ContainerForCommunity>
      }
    </>
  );
}

export default VideoAdmin;
