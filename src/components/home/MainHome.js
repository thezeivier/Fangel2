import React from 'react';
import Wrapper from './../general/Wrapper'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'

const MainHome = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled>Comunidades</TitleStyled>
        <TextStyled>Conoce a personas con los mismos gustos y comparte ideas.</TextStyled>
      </Wrapper>
    </main>
  );
}

export default MainHome;
