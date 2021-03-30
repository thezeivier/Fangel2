import React from 'react';
import Wrapper from './../general/Wrapper'
import CardCommunity from './CardCommunity'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { AddCardContainer, EndCercle, CardsList } from './styles/sMainHome'
import { ReactComponent as AddCardSVG } from './icons/addCard.svg'

const MainHome = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled>Comunidades</TitleStyled>
        <TextStyled main>Conoce a personas con los mismos gustos y comparte ideas.</TextStyled>
        <CardsList>
          <AddCardContainer>
            <AddCardSVG />
            <span>Crear comunidad</span>
          </AddCardContainer>
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
          <CardCommunity />
        </CardsList>
      </Wrapper>
      <EndCercle />
    </main>
  );
}

export default MainHome;
