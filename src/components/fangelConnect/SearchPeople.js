import React from 'react';
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer } from './styles/sSearchPeople'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'

const SearchPeople = ({ modalIsOpen }) => {
  return (
    <main>
      <Wrapper>
        <SearchPeopleContainer>
          <TextBodyStyled>Buscando personas con tus mismos intereses</TextBodyStyled>
          <PeopleContainer>
            <img />
            {/* <ProfileSVG /> */}
            <span>Conectando</span>
            {/* <img /> */}
            <ProfileSVG />
          </PeopleContainer>
          <a onClick={modalIsOpen}>Cancelar busqueda</a>
        </SearchPeopleContainer>
      </Wrapper>
    </main>
  );
}

export default SearchPeople;
