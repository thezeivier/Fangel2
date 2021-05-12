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
            <TextStyled as="span">Ya no se podra recuperar despues</TextStyled>
          </div>
          <ButtonsContainer>
            <a onCLick={modalIsOpen}>No, gracias</a>
            <ButtonStyled secondary>Si, porfavor</ButtonStyled>
          </ButtonsContainer>
        </ModalCloseContainer>
      </Wrapper>
    </main>
  );
}

export default ModalCloseSpace;
