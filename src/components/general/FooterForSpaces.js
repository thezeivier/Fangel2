import React from 'react';
import { Link } from 'react-router-dom'
import { FooterContainer, SupportLinksContainer, SmallTextStyled, Fangel,
         OnlyDesktop } from './styles/sFooter'
import { FooterForCommity } from './../general/InternalLayout'

const FooterForSpaces = ({ mobile }) => {
  return (
    <FooterForCommity>
      <FooterContainer mobile={mobile}>
        <OnlyDesktop>
          <SupportLinksContainer>
            <SmallTextStyled as={Link} to="/terms-conditions" >Términos y condiciones</SmallTextStyled>
            <SmallTextStyled as={Link} to="/politics-privacy" >Políticas y privacidad</SmallTextStyled>
            <SmallTextStyled as={Link} to="/support" >Ayuda y Soporte de Fangel</SmallTextStyled>
            <SmallTextStyled as={Link} to="/faqs" >Preguntas frecuentes</SmallTextStyled>
          </SupportLinksContainer>
          <Fangel>@fangel 2021</Fangel>
        </OnlyDesktop>
      </FooterContainer>
    </FooterForCommity>
  );
}

export default FooterForSpaces;
