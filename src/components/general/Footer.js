import React from 'react';
import Wrapper from './Wrapper'
import { SmallText } from './../../themes/externalRecyclableStyles'
import { FooterContainer, SupportLinksContainer, Fangel } from './styles/sFooter'

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <SupportLinksContainer>
          <SmallText>Términos y condiciones</SmallText>
          <SmallText>Políticas y privacidad</SmallText>
          <SmallText>Ayuda y Soporte de Fangel</SmallText>
          <SmallText>Preguntas frecuentes</SmallText>
        </SupportLinksContainer>
        <Fangel>@fangel 2021</Fangel>
      </Wrapper>
    </FooterContainer>
  );
}

export default Footer;
