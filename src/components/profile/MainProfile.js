import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import UserTag from './UserTag'
import { useMatchRouteUserData } from './algorithms/useMatchRouteUserData'
import { AppContext } from '../../App'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { UserContainer, ListTags, AddPhotoContainer } from './styles/sMainProfile'
import { colorGenerator } from './algorithms/colorGenerator'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'



const MainProfile = () => {
  const {userFromDB, authState} = useContext(AppContext)
  const history = useHistory()
  const match = useRouteMatch("/u/:id")
  const nameUserRoute = match.params.id
  console.log(nameUserRoute)
  const [userData, loading, error] = useMatchRouteUserData("users", nameUserRoute)

  if(loading) return <p>Pending..</p> // Aquí va un loader
    
  if(error) {
    return false // Mostrar mensaje de error o redirección
  }

  const {
    id, 
    email, 
    preferences, 
    registerDate, 
    type, 
    uid, 
    username
  } = userData[0]

  const isMyUser = authState.uid === id

  return (
    <main>
      <Wrapper>
        <UserContainer>
          <ProfileSVG />
          {isMyUser &&
            <AddPhotoContainer>
              <AddPhotoSVG />
              <span>Cambiar foto</span>
            </AddPhotoContainer>
          }
          <h4>{username}</h4>
        </UserContainer>
        <ListTags>
          {preferences &&
            preferences.map((tag) => <UserTag key={`${tag}_${id}`} category={tag} color={colorGenerator()} />)
          }
        </ListTags>
      </Wrapper> 
      <ReturnPage to={"/"}/> 
    </main>
  );
}

export default MainProfile;
