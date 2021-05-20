import React from 'react';
import Wrapper from './../general/Wrapper'
import { ModalCloseContainer, SubtitleStyled, TextStyled, ButtonsContainer,
         ButtonStyled } from './styles/sModalCloseSpace'

const ModalCloseSpace = ({ modalIsOpen }) => {
  return (
    <main>
      <Wrapper>
        <ModalCloseContainer>
          <div>
            <SubtitleStyled as="p">¿Estás seguro(a) de eliminar este espacio?</SubtitleStyled>
            <TextStyled as="span">También se eliminarán los subespacios y no se podrán recuperar después</TextStyled>
          </div>
          <ButtonsContainer>
            <a onClick={modalIsOpen}>No, gracias</a>
            <ButtonStyled secondary>Si, porfavor</ButtonStyled>
          </ButtonsContainer>
        </ModalCloseContainer>
      </Wrapper>
    </main>
  );
}

export default ModalCloseSpace;
