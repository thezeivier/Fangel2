import React from 'react';
import Wrapper from './../general/Wrapper'
import CardCommunity from './CardCommunity'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { AddCardContainer, EndCercle } from './styles/sMainHome'
import { ReactComponent as AddCardSVG } from './icons/addCard.svg'

const MainHome = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled>Comunidades</TitleStyled>
        <TextStyled>Conoce a personas con los mismos gustos y comparte ideas.</TextStyled>
        <AddCardContainer>
          <AddCardSVG />
          <span>Crear comunidad</span>
        </AddCardContainer>
        <ul>
          <CardCommunity />
        </ul>
      </Wrapper>
      <EndCercle />
    </main>
  );
}

export default MainHome;
