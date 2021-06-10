import React, {useState, useEffect, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { ButtonStyled } from './styles/sButtonLeaveCom'
import {SwitchVideoContext} from '../../pages/inCommunity/SwitchCommunityVideo' 

const ButtonLeaveCom = ({ communityProvider, setCommunityGlobalData}) => {
  const history = useHistory()
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
      setStateScore(true)
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
