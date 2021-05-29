import React, {useEffect, useState} from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

const VideoUser = ({communityData, isSubSpace, communityDataSubSpace, isAdmin}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openMoldal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  useEffect(()=>{
  }, [])
  
  return (
    <>
      {
        !communityData?
        <MainSpinner/>:
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
          wrapper sin paddign en moviles y tablet*/}
          <RegHeader /> {/* Solo para moviles */}
          <VideoHeader
            communityData={communityData}
            communityDataSubSpace={communityDataSubSpace}
            isSubSpace={isSubSpace}
            isSettings="none"
/*             displayNoAdmin="none"
            onlyUsers="block" */
            closeModal={closeModal} 
            modalIsOpen={modalIsOpen} 
          />
          <MainVideoUser
            open={openMoldal}
            communityData={communityData}
            communityDataSubSpace={communityDataSubSpace}
            isSubSpace={isSubSpace}
            displayNoAdmin="none"
            isAdmin={isAdmin} 
          />
          <Footer noMobile/>
        </ContainerForCommunity>
      }
    </>
  );
}

export default VideoUser;
