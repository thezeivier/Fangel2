import React, {useEffect, useState} from 'react';
import MainVideoUser from './../../components/community/MainVideoUser'
import RegHeader from './../../components/general/RegHeader'
import VideoHeader from './../../components/general/VideoHeader'
import Footer from './../../components/general/Footer'
import { ContainerForCommunity } from './../../components/general/InternalLayout'

import MainSpinner from '../../components/spinner/MainSpinner'

const VideoUser = ({activeCommunity, communityData}) => {

  const [transcurredTimeOfCommunity, setTranscurredTimeOfCommunity] = useState("hola")
  const [lastTranscurredTime, setLastTranscurredTime] = useState(false)
  const [localTimerCounter, setLocalTimerCounter] = useState(0)
  
  
  
  useEffect(()=>{
    setTranscurredTimeOfCommunity(activeCommunity? activeCommunity.transcurred: false)
    console.log(activeCommunity)
    timer()
  }, [])

  const timer = () => {
    let localTimer = setInterval(() =>{
      setLastTranscurredTime(transcurredTimeOfCommunity)
      console.log(transcurredTimeOfCommunity)
      console.log("timer")
      if(transcurredTimeOfCommunity && lastTranscurredTime){
        setLocalTimerCounter(localTimerCounter + 1)
        console.log(localTimerCounter)
        if(localTimerCounter >= 9){
          if(transcurredTimeOfCommunity === lastTranscurredTime){
            console.log(communityData.creatorUid)
            setLocalTimerCounter(0)
          }
        }
      }
    }, 10000)

    if(transcurredTimeOfCommunity !== lastTranscurredTime){
      setInterval(localTimer)
    }
  }
  
  return (
    <>
      {
        !communityData?
        <MainSpinner/>:
        <ContainerForCommunity> {/* Sin margenes en moviles y tablets ni footer ni regHeader,
          wrapper sin paddign en moviles y tablet*/}
          <RegHeader /> {/* Solo para moviles */}
          <VideoHeader communityData={communityData} displayNoAdmin="none" isSettings="none" onlyUsers="block" />
          <MainVideoUser communityData={communityData} displayNoAdmin="none" />
          <Footer noMobile/>
        </ContainerForCommunity>
      }
    </>
  );
}

export default VideoUser;
