import React from 'react';
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer } from './styles/sSearchPeople'

const SearchPeople = ({ modalIsOpen }) => {
  return (
    <main>
      <Wrapper>
        <SearchPeopleContainer>
          <TextBodyStyled>Buscando personas con tus mismos intereses</TextBodyStyled>
          <PeopleContainer>
            <img />
            <p>Conectando</p>
            <img />
          </PeopleContainer>
          <a onClick={modalIsOpen}>Cancelar busqueda</a>
        </SearchPeopleContainer>
      </Wrapper>
    </main>
  );
}

export default SearchPeople;
