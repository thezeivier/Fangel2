import React, {useState, useEffect, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { ButtonStyled } from './styles/sButtonLeaveCom'
import {SwitchVideoContext} from '../../pages/inCommunity/SwitchCommunityVideo' 

const ButtonLeaveCom = ({ displayDesktop, communityProvider }) => {
  const history = useHistory()
  const {stateScore, setStateScore} = useContext(SwitchVideoContext)
  const [subSpaceState, setSubSpaceState] = useState(false)
  
  useEffect(() => {
    if(communityProvider && communityProvider.communityGlobalData && communityProvider.communityGlobalData.communityDataSubSpace){
      setSubSpaceState(true)
    }
  },[])
  console.log(stateScore)
  const handleClickToCommunity = () => {
    communityProvider && communityProvider.setCommunityGlobalData(false)
    // setStateScore(true)
    if(subSpaceState && communityProvider) {
      history.push(`/room/${communityProvider.communityGlobalData.communityData.roomName}`)
    } else {
      setStateScore(true)
    }
  }
  return (
    <ButtonStyled danger displayDesktop={displayDesktop} onClick={handleClickToCommunity}>
      {
        subSpaceState ? 
          (displayDesktop ? 'Regresar al espacio principal' : 'Regresar'):
          (displayDesktop ? 'Salir del espacio social' : 'Salir')
      }
    </ButtonStyled>
  );
}

export default ButtonLeaveCom;
