import React, { useState } from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { AlertContainer } from './../../components/community/styles/sMainVideo'
import { ContainerForCommunity } from './../../components/general/InternalLayout'
import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'

import { ReactComponent as WarningSVG } from './../../components/community/icons/warning.svg'
import { ReactComponent as CloseSVG } from './../../components/general/icons/close.svg'

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
        <AlertContainer>
          <WarningSVG onClick={closeModal} />
          <div className="alertDescriptionContainer">
            <p>Quedan 5 minutos para que se cierre tu comunidad</p>
            <a>Extender una hora más</a>
          </div>
          <CloseSVG className="closeAlertWarning" />
        </AlertContainer>
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
