import React from 'react';
import Wrapper from './Wrapper'
import { SmallText } from './../../themes/externalRecyclableStyles'
import { FooterContainer, SupportLinksContainer, SmallTextStyled, Fangel,
         OnlyDesktop } from './styles/sFooter'

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <OnlyDesktop>
          <SupportLinksContainer>
            <SmallTextStyled>Términos y condiciones</SmallTextStyled>
            <SmallTextStyled>Políticas y privacidad</SmallTextStyled>
            <SmallTextStyled>Ayuda y Soporte de Fangel</SmallTextStyled>
            <SmallTextStyled>Preguntas frecuentes</SmallTextStyled>
          </SupportLinksContainer>
          <Fangel>@fangel 2021</Fangel>
        </OnlyDesktop>
      </Wrapper>
    </FooterContainer>
  );
}

export default Footer;
