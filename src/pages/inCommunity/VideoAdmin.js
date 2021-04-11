import React, { useState, useEffect } from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { ContainerForCommunity } from './../../components/general/InternalLayout'
import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'

import MainSpinner from '../../components/spinner/MainSpinner'

const VideoAdmin = ({communityData}) => {
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
        !communityData?
        <MainSpinner/>:
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
          wrapper sin paddign en moviles y tablet*/}
          <RegHeader /> {/* Solo para moviles */}
          <VideoHeader communityData={communityData} isSettings="none" open={openMoldal} closeModal={closeModal} modalIsOpen={modalIsOpen} />
          <MainVideoUser communityData={communityData}/>
          <MainSettingsAdmin inDesktop="grid" />
          <Footer noMobile/>
        </ContainerForCommunity>
      }
    </>
  );
}

export default VideoAdmin;
