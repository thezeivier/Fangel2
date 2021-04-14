import React, {useEffect, useState} from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

const VideoUser = ({activeCommunity, communityData}) => {

  console.log(activeCommunity)

  return (
    <>
      {
        !communityData?
        <MainSpinner/>:
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
          wrapper sin paddign en moviles y tablet*/}
          <RegHeader /> {/* Solo para moviles */}
          <VideoHeader communityData={communityData} displayNoAdmin="none" isSettings="none" />
          <MainVideoUser communityData={communityData}/>
          <Footer noMobile/>
        </ContainerForCommunity>
      }
    </>
  );
}

export default VideoUser;
