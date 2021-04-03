import React, { useState } from 'react';
import Modal from 'react-modal';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

const VideoAdmin = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openMoldal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

 console.log(modalIsOpen)
  return (
    <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
      wrapper sin paddign en moviles y tablet*/}
      <RegHeader /> {/* Solo para moviles */}
      <VideoHeader isSettings="none" open={openMoldal} closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <MainVideoUser />
      <Footer noMobile/>
    </ContainerForCommunity>
  );
}

export default VideoAdmin;
