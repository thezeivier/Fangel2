import React, {useState, useEffect, useContext} from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom'
import { ButtonStyled } from './styles/sButtonLeaveCom'
import {SwitchVideoContext} from '../../pages/inCommunity/SwitchCommunityVideo' 

const ButtonLeaveCom = ({ communityProvider, setCommunityGlobalData}) => {
  const history = useHistory()
  const location = useLocation()
  const contextOfSwitchVideo = useContext(SwitchVideoContext)
  const stateScore = contextOfSwitchVideo ?.stateScore
  const setStateScore = contextOfSwitchVideo ?.setStateScore
  const [subSpaceState, setSubSpaceState] = useState(false)

  useEffect(() => {
    if(communityProvider && communityProvider.communityGlobalData && communityProvider.communityGlobalData.communityDataSubSpace){
      setSubSpaceState(true)
    }
  },[])
  const handleClickToCommunity = () => {
    communityProvider && communityProvider.setCommunityGlobalData(false)
    // setStateScore(true)
    if(subSpaceState && communityProvider) {
      history.push(`/room/${communityProvider.communityGlobalData.communityData.roomName}`)
    } else if(stateScore !== null) {
      try{
        setStateScore(true)
      }catch(err){
        if(location.pathname.startsWith("/room/") && location.pathname.slice(6).includes("/")){
          const roomRoute = location.pathname.slice(6)
          history.push(`/room/${roomRoute.slice(0, roomRoute.indexOf("/"))}`)
        }
      }
    }else{
      history.push(`/`)
      setCommunityGlobalData(false)
    }
  }

  return (
    <ButtonStyled danger onClick={handleClickToCommunity}>
      {
        subSpaceState ? 
          (window.innerWidth >= 1200 ? 'Regresar al espacio principal' : 'Regresar'):
          (window.innerWidth >= 1200 ? 'Salir del espacio social' : 'Salir')
      }
    </ButtonStyled>
  );
}

export default ButtonLeaveCom;
