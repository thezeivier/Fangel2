import React from 'react';
import { Link } from 'react-router-dom'
import { ButtonStyled } from './styles/sButtonLeaveCom'
/* import { ReactComponent as ButtonLeaveComSVG } from './icons/leaveCommunity.svg'
 */
const ButtonLeaveCom = ({ displayDesktop, communityProvider }) => {
  const handleLeaveCommunity = () => {
    communityProvider && communityProvider.setCommunityGlobalData(false)
  } 
  return (
    <ButtonStyled displayDesktop={displayDesktop} onClick={handleLeaveCommunity} as={Link} to="/">
      {/* <ButtonLeaveComSVG /> */}
      {
        displayDesktop ? 'Salir de la comunidad ': 'Salir'
      }
    </ButtonStyled>
  );
}

export default ButtonLeaveCom;
