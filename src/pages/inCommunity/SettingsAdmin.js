import React from 'react';
import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'
import VideoHeader from './../../components/general/VideoHeader'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

const SettingsAdmin = ({ closeModal }) => {
  return (
    <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
      wrapper sin paddign en moviles y tablet*/}
      <VideoHeader displayNoAdmin="none" closeModalSA={closeModal} />
      <MainSettingsAdmin />
    </ContainerForCommunity>
  );
}

export default SettingsAdmin;
