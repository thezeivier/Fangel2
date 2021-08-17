import React from 'react';
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
// import { CSVLink } from 'react-csv'
import { UserContainer, ProfileImage } from './../profile/styles/sMainProfile'
import MainCSV from './MainCSV'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { GetCommunityUserInfo } from './algorithms/GetCommunityUserInfo'

const MainBusinessProfile = React.memo(({ dataGeneralUser }) => {
  const [communityData, loading, error] = GetCommunityUserInfo("communities", dataGeneralUser.uid)
  
  if(loading) return <p>Loading...</p>
  
  if(error) {
    return false
  }
  return (
    <main>
      <Wrapper>
        <UserContainer>
          <ProfileImage>
            <ProfileSVG />
          </ProfileImage>
          <h4>Outwo corp.</h4>
          <p>Información de mis salas</p>
          {communityData && communityData.map((info, index) => <MainCSV key={info.id}  {...info} index={index}/>)}
        </UserContainer>
      </Wrapper>
      <ReturnPage />
    </main>
  );
})

export default MainBusinessProfile;
