import React, {useContext} from 'react';
import {AppContext} from '../../App'
import Wrapper from './../general/Wrapper'
import CardCommunity from './CardCommunity'
import { Link } from 'react-router-dom'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { AddCardContainer, EndCercle, CardsList } from './styles/sMainHome'
import { ReactComponent as AddCardSVG } from './icons/addCard.svg'

const MainHome = () => {
  const contextFromApp = useContext(AppContext)
  return (
    <main>
      <Wrapper>
        <TitleStyled>Comunidades</TitleStyled>
        <TextStyled main>Conoce a personas con los mismos gustos y comparte ideas.</TextStyled>
        <CardsList>
        {
          contextFromApp.isAdmin &&
          <AddCardContainer as={Link} to="/create-community-1" >
            <AddCardSVG />
            <span>Crear comunidad</span>
          </AddCardContainer>  
        }
          <CardCommunity />
        </CardsList>
      </Wrapper>
      <EndCercle />
    </main>
  );
}

export default MainHome;
