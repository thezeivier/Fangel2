import React from 'react';
import Wrapper from './../general/Wrapper'
import UserConnect from './UserConnect'
import { SubtitleStyled, InputStyled, InputContainer, SectionContainer,
         TimerDescripcion, ButtonStyled, DisplayContainer } from './styles/sMainSettings'
import { ReactComponent as CodeCopySVG } from './icons/codeCopy.svg'

const MainSettingsAdmin = ({ inDesktop }) => {
  return (
    <Wrapper>
      <DisplayContainer inDesktop={inDesktop}>
        <SectionContainer>
          <SubtitleStyled as="h4">Personas <span>(4)</span></SubtitleStyled>
          <div>
            <UserConnect />
            <UserConnect />
            <UserConnect />
            <UserConnect />
          </div>
        </SectionContainer>
        <div>
          <SectionContainer>
            <SubtitleStyled as="h4">Código de invitación</SubtitleStyled>
            <InputContainer>
              <InputStyled placeholder="Código de invitación" />
              <button>
                <CodeCopySVG />
              </button>
            </InputContainer>
          </SectionContainer>
          <SectionContainer>
            <SubtitleStyled as="h4">Configuraciones</SubtitleStyled>
            <TimerDescripcion>
              <p>Tiempo de vida sobrante</p>
              <span>45m 08s</span>
            </TimerDescripcion>
            <ButtonStyled secondary>Extender 1 hora más</ButtonStyled>
          </SectionContainer>
        </div>
      </DisplayContainer>
    </Wrapper>
  );
}

export default MainSettingsAdmin;
