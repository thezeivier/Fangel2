import React from 'react';
import Wrapper from './../general/Wrapper'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'

const MainReport = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled>Reporta un problema</TitleStyled>
        <TextStyled>
          Envíanos tus comentarios acerca de los problemas que encuentras en nuestra página. El equipo de fangel lo resolverá rápidamente.
        </TextStyled>
      </Wrapper>
    </main>
  );
}

export default MainReport;
