import React from 'react';
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import { FooterContainer, SupportLinksContainer, SmallTextStyled, Fangel,
         OnlyDesktop } from './styles/sFooter'

const Footer = ({ mobile }) => {
  return (
    <FooterContainer mobile={mobile}>
      <Wrapper>
        <OnlyDesktop>
          <SupportLinksContainer>
            <SmallTextStyled as={Link} to="/terms-conditions" >Términos y condiciones</SmallTextStyled>
            <SmallTextStyled as={Link} to="/politics-privacy" >Políticas y privacidad</SmallTextStyled>
            <SmallTextStyled as={Link} to="/support" >Ayuda y Soporte de Fangel</SmallTextStyled>
            <SmallTextStyled as={Link} to="/faqs" >Preguntas frecuentes</SmallTextStyled>
          </SupportLinksContainer>
          <Fangel>@fangel 2021</Fangel>
        </OnlyDesktop>
      </Wrapper>
    </FooterContainer>
  );
}

export default Footer;
