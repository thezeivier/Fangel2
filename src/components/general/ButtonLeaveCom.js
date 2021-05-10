import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { ButtonStyled } from './styles/sButtonLeaveCom'
/* import { ReactComponent as ButtonLeaveComSVG } from './icons/leaveCommunity.svg'
 */
const ButtonLeaveCom = ({ displayDesktop, communityProvider }) => {
  const history = useHistory()
  const handleLeaveCommunity = () => {
    communityProvider && communityProvider.setCommunityGlobalData(false)
    history.push('/')
    window.location.reload()
  } 
  return (
    <ButtonStyled displayDesktop={displayDesktop} onClick={handleLeaveCommunity} as={Link}>
      {/* <ButtonLeaveComSVG /> */}
      {
        displayDesktop ? 'Salir del espacio social ': 'Salir'
      }
    </ButtonStyled>
  );
}

export default ButtonLeaveCom;
