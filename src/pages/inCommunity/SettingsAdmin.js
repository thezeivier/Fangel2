import React, { useContext } from 'react';

import { useRouteMatch } from 'react-router-dom'
import { AppContext } from '../../App'

import MainSettingsAdmin from './../../components/settingsForAdmin/MainSettingsAdmin'
import VideoHeader from './../../components/general/VideoHeader'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

import { GetCommunityVideoData } from '../../pages/inCommunity/algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from '../../pages/inCommunity/algorithms/GetAdminCommunity'

const SettingsAdmin = ({ closeModal, communityData, isSubSpace, communityDataSubSpace }) => {
  const { userFromDB }  = useContext(AppContext)
  const isAdmin = communityData.creatorUid && GetAdminCommunity(communityData.creatorUid, userFromDB.uid)

  if(!communityData ) {
    return <MainSpinner/>
  }
  return (
    <>
      <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
        wrapper sin paddign en moviles y tablet*/}
        <VideoHeader displayNoAdmin="none" closeModalSA={closeModal} communityData={communityData} communityDataSubSpace={communityDataSubSpace} isSubSpace={isSubSpace}/>
        {isAdmin ?
          <MainSettingsAdmin communityData={communityData} isAdmin={isAdmin} isSubSpace={isSubSpace} communityDataSubSpace={communityDataSubSpace}/> :
          <MainSettingsAdmin communityData={communityData} communityDataSubSpace={communityDataSubSpace} isSubSpace={isSubSpace}/>
        }
      </ContainerForCommunity>
    </>
  )
}

export default SettingsAdmin;
