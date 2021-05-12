import React from 'react'
import Wrapper from './../general/Wrapper'
import DbSpaceCard from './DbSpaceCard'
import { TitleStyled, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { SpacesSection } from './styles/sDashboardSpace'

const DashboardSpaces = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Espacios creados</TitleStyled>
        <SpacesSection>
          <SubtitleStyled bottom14>Públicos</SubtitleStyled>
          <ul>
            <DbSpaceCard />
          </ul>
        </SpacesSection>
        <SpacesSection>
          <SubtitleStyled bottom14>Privados</SubtitleStyled>
          <ul>
            <DbSpaceCard />
          </ul>
        </SpacesSection>
      </Wrapper>
    </main>
  );
}

export default DashboardSpaces;
