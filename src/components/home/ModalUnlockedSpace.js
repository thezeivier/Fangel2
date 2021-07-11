import React from 'react';
import Wrapper from './../general/Wrapper'
import { ModalCloseContainer, SubtitleStyled, ButtonsContainer,
         ButtonStyled } from './../dashboard/styles/sModalCloseSpace'
import { SubtitleStyled as Subtitle } from './../../themes/internalRecyclableStyles'
import { TextStyledModal, ModalInformationContainer } from './styles/sModalUnlockedSpace'

const ModalCloseSpace = ({ modalIsOpen }) => {
  return (
    <main>
      <Wrapper>
        <ModalCloseContainer>
          <ModalInformationContainer>
            <SubtitleStyled as="h3">Funcionalidad bloqueada</SubtitleStyled>
            <TextStyledModal paragraph>Solo los usuarios con un Fangel Score de <span>135 puntos</span> pueden crear un espacio social.</TextStyledModal>
            <TextStyledModal>El Fangel Score (FS) es la puntuación de tu comportamiento en Fangel. El FS te ayuda a encontrar personas con una puntuación similar.</TextStyledModal>
            <Subtitle small as="h4">Incrementa tu puntuacion</Subtitle>
            <TextStyledModal bottom0>Si completas tu perfil con tu información podrás obtener <span>135 puntos</span>.</TextStyledModal>
          </ModalInformationContainer>
          <ButtonsContainer>
            <a onClick={modalIsOpen}>Por ahora no</a>
            <ButtonStyled secondary>Ir a mi perfil</ButtonStyled>
          </ButtonsContainer>
        </ModalCloseContainer>
      </Wrapper>
    </main>
  );
}

export default ModalCloseSpace;
