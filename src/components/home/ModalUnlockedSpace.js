import React from 'react';
import Wrapper from './../general/Wrapper'
import { Link } from 'react-router-dom'
import { ModalCloseContainer, SubtitleStyled, ButtonsContainer,
         ButtonStyled } from './../dashboard/styles/sModalCloseSpace'
import { SubtitleStyled as Subtitle } from './../../themes/internalRecyclableStyles'
import { TextStyledModal, ModalInformationContainer } from './styles/sModalUnlockedSpace'

const ModalCloseSpace = ({ modalIsOpen, to}) => {
  return (
    <main>
      <Wrapper>
        <ModalCloseContainer>
          <ModalInformationContainer>
            <SubtitleStyled as="h3">Funcionalidad bloqueada</SubtitleStyled>
            <TextStyledModal paragraph>En un espacio social podrás hablar de cualquier tema con otras personas. Solo los usuarios con un Fangel Score de <span>135 puntos a más</span> pueden crear un espacio social.</TextStyledModal>
            <TextStyledModal>El Fangel Score (FS) es la puntuación de tu comportamiento en Fangel. El FS te ayuda a encontrar personas con una puntuación similar.</TextStyledModal>
            <Subtitle small as="h4">Incrementa tu puntuacion</Subtitle>
            <TextStyledModal bottom0>Si completas tu perfil con tu información podrás obtener más de <span>135 puntos</span>.</TextStyledModal>
          </ModalInformationContainer>
          <ButtonsContainer>
            <a onClick={modalIsOpen}>Por ahora no</a>
            <Link to={to}><ButtonStyled secondary>Ir a mi perfil</ButtonStyled></Link>
          </ButtonsContainer>
        </ModalCloseContainer>
      </Wrapper>
    </main>
  );
}

export default ModalCloseSpace;
