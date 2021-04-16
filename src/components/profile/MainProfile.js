import React, { useState, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import UserTag from './UserTag'
import {useStorage} from 'reactfire'
import { useMatchRouteUserData } from './algorithms/useMatchRouteUserData'
import { AppContext } from '../../App'
import { UserContainer, ListTags, AddPhotoContainer } from './styles/sMainProfile'
// import { colorGenerator } from './algorithms/colorGenerator'
import {newProfilePhoto} from './algorithms/newProfilePhoto'
import { getColorDarkMode, getColorLightMode} from '../community/algorithms/GetRandomColor'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'

const MainProfile = () => {
  const storage = useStorage()
  const [profileThumb, setProfileThumb] = useState()
  const {userFromDB, authState} = useContext(AppContext)
  const match = useRouteMatch("/u/:id")
  const nameUserRoute = match.params.id
  const [userData, loading, error] = useMatchRouteUserData("users", nameUserRoute)

  if(loading) return <p>Pending..</p> // Aquí va un loader
    
  if(error) {
    return false // Mostrar mensaje de error o redirección
  }

  const {
    id, 
    preferences,
    username,
    bucket,
    route,
  } = userData[0]

  const isMyUser = authState.uid === id

  if(bucket && route){
    const profileImageReference = storage.refFromURL(`gs://${bucket}/${route}`)
    profileImageReference.getDownloadURL().then(url => {//Recover thumbnail from storage.
      setProfileThumb(url)
    })
  }

  const changeProfileImage = (e) => {
    e.preventDefault()
    const profileImage = document.getElementById("profileImage")
    e = profileImage.click()
    profileImage.addEventListener('change', e => {
      newProfilePhoto(storage, e.target.files[0], authState.uid)
    })
    document.getElementById("profileImage").value = null
  }

  const themeMode = localStorage.mode && localStorage.getItem("mode")

  return (
    <main>
      <Wrapper>
        <UserContainer>
          {
            profileThumb?
            <img src={profileThumb} alt="Imagen de perfil" />:
            <ProfileSVG />
          }
          {isMyUser &&
            <AddPhotoContainer onClick={changeProfileImage}>
              <AddPhotoSVG />
              <span>Cambiar foto</span>
            </AddPhotoContainer>
          }
          <input type="file" accept="image/*" style={{display: "none"}} id="profileImage"/>
          <h4>{username}</h4>
        </UserContainer>
        <ListTags>
          {preferences &&
            preferences.map((tag) => {
              const colorText = themeMode == "light" ? getColorLightMode() : getColorDarkMode()
              return <UserTag key={`${tag}_${id}`} category={tag} color={colorText} />}
            )
          }
        </ListTags>
      </Wrapper> 
      <ReturnPage/> 
    </main>
  );
}

export default MainProfile;
