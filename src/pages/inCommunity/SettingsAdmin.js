import React, { useContext } from 'react';

import { useRouteMatch } from 'react-router-dom'
import { AppContext } from '../../App'

import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'
import VideoHeader from './../../components/general/VideoHeader'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

import { GetCommunityVideoData } from '../../pages/inCommunity/algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from '../../pages/inCommunity/algorithms/GetAdminCommunity'

const SettingsAdmin = ({ closeModal, communityData }) => {
  const { userFromDB }  = useContext(AppContext)

  console.log(communityData)
  const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)

  return (
    <>
      {
        !communityData?
        <MainSpinner/>:
        (isAdmin && 
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
          wrapper sin paddign en moviles y tablet*/}
          <VideoHeader displayNoAdmin="none" closeModalSA={closeModal} communityData={communityData} />
          <MainSettingsAdmin />
        </ContainerForCommunity>
        )
      }
    </>
  );
}

export default SettingsAdmin;
