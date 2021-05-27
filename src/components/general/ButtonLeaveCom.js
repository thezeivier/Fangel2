import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { ButtonStyled } from './styles/sButtonLeaveCom'

const ButtonLeaveCom = ({ displayDesktop, communityProvider }) => {
  const history = useHistory()
  const [subSpaceState, setSubSpaceState] = useState(false)
  const handleLeaveCommunity = () => {
    communityProvider && communityProvider.setCommunityGlobalData(false)
    history.push('/')
    window.location.reload()
  } 

  useEffect(() => {
    if(communityProvider && communityProvider.communityGlobalData && communityProvider.communityGlobalData.communityDataSubSpace){
      setSubSpaceState(true)
    }
  },[])
  
  return (
    <ButtonStyled danger displayDesktop={displayDesktop} onClick={handleLeaveCommunity} as={Link}>
      {
        subSpaceState ? 
          (displayDesktop ? 'Regresar al espacio principal' : 'Regresar'):
          (displayDesktop ? 'Salir del espacio social' : 'Salir')
      }
    </ButtonStyled>
  );
}

export default ButtonLeaveCom;
