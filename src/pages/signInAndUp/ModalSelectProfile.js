import React from 'react';
import Wrapper from './../../components/general/Wrapper'
import { ModalCloseContainer, SubtitleStyled, TextStyled } from './../../components/dashboard/styles/sModalCloseSpace'
import { ReactComponent as ProfileSVG } from './../../components/general/icons/profile.svg'
import { ProfilesContainer, Profile } from './styles/sModalSelectProfile'

const ModalSelectProfile = () => {
  return (
    <main>
      <Wrapper>
        <ModalCloseContainer>
          <SubtitleStyled>Elige un perfil para entrar</SubtitleStyled>
          <ProfilesContainer>
            <Profile>
              <ProfileSVG />
              <TextStyled>Fangeluser</TextStyled>
            </Profile>
            <Profile>
              <ProfileSVG />
              <TextStyled>Outwo corp.</TextStyled>
            </Profile>
          </ProfilesContainer>
        </ModalCloseContainer>
      </Wrapper>
    </main>
  );
}

export default ModalSelectProfile;
