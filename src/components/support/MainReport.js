import React from 'react';
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import { Link } from 'react-router-dom'
import { TitleStyled, TextStyled, SubtitleStyled, TextAreaStyled } from './../../themes/internalRecyclableStyles'
import { ButtonStyled, ButtonsContainer, OnlyDesktop } from './styles/sMainSupport'

const MainReport = () => {
  return (
    <main>
      <Wrapper>
        <OnlyDesktop>
          <TitleStyled bottom>Reporta un problema</TitleStyled>
          <TextStyled bottom20>
            Envíanos tus comentarios acerca de los problemas que encuentras en nuestra página. El equipo de fangel lo resolverá rápidamente.
          </TextStyled>
          <SubtitleStyled>Detalles</SubtitleStyled>
          <TextAreaStyled border4 type="text" placeholder="Descripcion" name="descriptionCommunity" />
          <ButtonsContainer>
            <ButtonStyled secondary left>Adjuntar una imagen</ButtonStyled>
            <ButtonStyled primary right>Enviar</ButtonStyled>
          </ButtonsContainer>
          <TextStyled bottom20>
            Si necesitas ayuda de inmediato para solucionar un problema en concreto, ingresa al <Link to="/support">Centro de ayuda y asistencia</Link>.
          </TextStyled>
          <SubtitleStyled>Apoya con el proyecto</SubtitleStyled>
          <TextStyled bottom20>
            Envianos un email a <span>support@fangelweb.com</span> si tienes ideas para ayudar a mejorar fangel, o para ser parte del equipo de fangel.
          </TextStyled>
        </OnlyDesktop>
      </Wrapper>
      <ReturnPage to={"#"} />
    </main>
  );
}

export default MainReport;
