import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { ButtonStyled } from './styles/sButtonLeaveCom'

const ButtonLeaveCom = ({ displayDesktop, communityProvider }) => {
  const history = useHistory()
  const [subSpaceState, setSubSpaceState] = useState(false)
  
  useEffect(() => {
    if(communityProvider && communityProvider.communityGlobalData && communityProvider.communityGlobalData.communityDataSubSpace){
      setSubSpaceState(true)
    }
  },[])

  const handleClickToCommunity = () => {
    communityProvider && communityProvider.setCommunityGlobalData(false)
    if(subSpaceState && communityProvider) {
      history.push(`/room/${communityProvider.communityGlobalData.communityData.roomName}`)
    } else {
      history.push(`/`)
      window.location.reload()
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
