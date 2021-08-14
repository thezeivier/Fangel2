import React from 'react';
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import { UserContainer, ProfileImage } from './../profile/styles/sMainProfile'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'

const MainBusinessProfile = () => {
  return (
    <main>
      <Wrapper>
        <UserContainer>
          <ProfileImage>
            <ProfileSVG />
          </ProfileImage>
          <h4>Outwo corp.</h4>
        </UserContainer>
      </Wrapper>
      <ReturnPage />
    </main>
  );
}

export default MainBusinessProfile;
