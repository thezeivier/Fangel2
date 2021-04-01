import React from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

const VideoUser = () => {
  return (
    <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
      wrapper sin paddign en moviles y tablet*/}
      <RegHeader /> {/* Solo para moviles */}
      <VideoHeader />
      <MainVideoUser />
      <Footer noMobile/>
    </ContainerForCommunity>
  );
}

export default VideoUser;
