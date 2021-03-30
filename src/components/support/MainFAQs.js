import React from 'react';
import Wrapper from './../general/Wrapper'
import { SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { SubtitleSmallStyled, TextContainer, TextStyled } from './styles/sMainSupport'

const MainFAQs = () => {
  return (
    <main>
      <Wrapper>
        <SubtitleStyled big>Preguntas frecuentes</SubtitleStyled>
        <div>
          <TextContainer>
            <SubtitleSmallStyled as="h4" question>Primera pregunta</SubtitleSmallStyled>
            <TextStyled>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </TextStyled>
          </TextContainer>
          <TextContainer>
            <SubtitleSmallStyled as="h4" question>Primera pregunta</SubtitleSmallStyled>
            <TextStyled>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextStyled>
          </TextContainer>
        </div>
      </Wrapper>
    </main>
  );
}

export default MainFAQs;
