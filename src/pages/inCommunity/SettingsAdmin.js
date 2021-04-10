import React, {useEffect, useState} from 'react';
import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'
import VideoHeader from './../../components/general/VideoHeader'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

const SettingsAdmin = ({ closeModal }) => {
  const [communityData, setCommunityData] = useState(false)

  useEffect(()=>{
    let actualCommunity = localStorage.getItem('communityData')
    setCommunityData(JSON.parse(actualCommunity))
  },[])

  return (
    <>
      {
        !communityData?
        <MainSpinner/>:
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
          wrapper sin paddign en moviles y tablet*/}
          <VideoHeader communityData={communityData} displayNoAdmin="none" closeModalSA={closeModal} />
          <MainSettingsAdmin />
        </ContainerForCommunity>
      }
    </>
  );
}

export default SettingsAdmin;
