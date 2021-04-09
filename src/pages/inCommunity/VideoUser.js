import React, {useEffect, useState} from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

const VideoUser = () => {
  const [communityData, setCommunityData] = useState(false)
  useEffect(()=>{
    let actualCommunity = localStorage.getItem('communityData')
    setCommunityData(JSON.parse(actualCommunity))
  },[])

  console.log(communityData)
  return (
    <>
      {
        !communityData?
        <MainSpinner/>:
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
          wrapper sin paddign en moviles y tablet*/}
          <RegHeader /> {/* Solo para moviles */}
          <VideoHeader displayNoAdmin="none" isSettings="none" />
          <MainVideoUser communityData={communityData}/>
          <Footer noMobile/>
        </ContainerForCommunity>
      }
    </>
  );
}

export default VideoUser;
