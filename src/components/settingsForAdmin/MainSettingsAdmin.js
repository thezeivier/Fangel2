import React from 'react';
import Wrapper from './../general/Wrapper'
import UserConnect from './UserConnect'
import { SubtitleStyled, InputStyled, InputContainer, SectionContainer,
         TimerDescripcion, ButtonStyled } from './styles/sMainSettings'
import { ReactComponent as CodeCopySVG } from './icons/codeCopy.svg'

const MainSettingsAdmin = () => {
  return (
    <Wrapper>
      <div>
        <SectionContainer>
          <SubtitleStyled as="h4">Personas</SubtitleStyled>
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
      </div>
    </Wrapper>
  );
}

export default MainSettingsAdmin;
