import React, { useContext } from 'react';

import { useRouteMatch } from 'react-router-dom'
import { AppContext } from '../../App'

import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'
import VideoHeader from './../../components/general/VideoHeader'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

import { GetCommunityVideoData } from '../../pages/inCommunity/algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from '../../pages/inCommunity/algorithms/GetAdminCommunity'

const SettingsAdmin = ({ closeModal }) => {
  const { userFromDB }  = useContext(AppContext)
  const match = useRouteMatch("/room/:idRoom")
  const idRoomSettings = match.params.idRoom
  const [data, loading, error] = GetCommunityVideoData(idRoomSettings)

  if(loading) return <p>Pending...</p>
  if(error) return null

  let communityData = data[0]
  const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)
  // console.log(isAdmin)
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
