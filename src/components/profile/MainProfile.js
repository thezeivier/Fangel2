import React, { useState, useContext, useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import UserTag from './UserTag'
import {useStorage, useFirestore} from 'reactfire'
import { useMatchRouteUserData } from './algorithms/useMatchRouteUserData'
import { AppContext } from '../../App'
import { UserContainer, ListTags, ButtonAccion, CodeContainer,
         ProfileImage } from './styles/sMainProfile'
// import { colorGenerator } from './algorithms/colorGenerator'
import { getColorDarkMode, getColorLightMode} from '../community/algorithms/GetRandomColor'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'

//Import components from code Box
import { Form, CommentSVGContainer, InputStyled } from './styles/sMainProfile'
import { ReactComponent as CopySVG } from '../createCommunity/icons/copy.svg'
import {CopyCode} from '../createCommunity/algorithms/CopyCode'
import { createDocInbox } from './algorithms/createDocInbox'

//Import components for edit profile
import EditProfile from './EditProfile'

const MainProfile = React.memo(() => {
  const storage = useStorage()
  const firestore = useFirestore()
  const history = useHistory()
  const [profileThumb, setProfileThumb] = useState()
  const [userDataRecovered, setUserDataRecovered] = useState(null)
  const [activeButton, setActiveButton] = useState(false)
  const [profileEditor, setProfileEditor] = useState(false)
  const {userFromDB, authState} = useContext(AppContext)
  const location = useLocation()
  const match = useRouteMatch("/u/:id")
  const nameUserRoute = match.params.id.concat(location.hash)
  const [userData, loading, error] = useMatchRouteUserData("users", nameUserRoute)
  
  useEffect(()=>{
    if(userData && userData.length !== 0){
      setUserDataRecovered(...userData)
      if(!userData[0].photoUrl){
        if(userData[0].bucket && userData[0].route){
          const profileImageReference = storage.refFromURL(`gs://${userData[0].bucket}/${userData[0].route}`)
          profileImageReference.getDownloadURL().then(url => {//Recover thumbnail from storage.
            setProfileThumb(url)
          })
        }
      }else{
        setProfileThumb(userData[0].photoUrl)
      }
    }
    
  },[userData])
  
  if(loading) return <p>Pending...</p>
  
  if(error) {
    return false // Mostrar mensaje de error o redirección
  }
  const isMyUser = authState.uid === userDataRecovered.id
  
  const changeDataOfProfile = (e) => {
    e.preventDefault()
    setProfileEditor(true)
  }

  const themeMode = localStorage.mode && localStorage.getItem("mode")
  // console.log(authState.uid, uid)
  if(profileEditor && isMyUser){
    return(
      <EditProfile
        profileThumb= {profileThumb}
        authState={authState}
        userFromDB={userFromDB}
        themeMode = {themeMode}
        id = {userDataRecovered.id}
        setProfileEditor={setProfileEditor}
      />
    )
  }
  return (
      <main>
        <Wrapper>
          <UserContainer>
            <ProfileImage>
              {
                profileThumb?
                <img src={profileThumb} alt="Imagen de perfil" />:
                <ProfileSVG />
              }
            </ProfileImage>
            {
              isMyUser ?
              <ButtonAccion onClick={changeDataOfProfile}>
                <span>Editar perfil</span>
              </ButtonAccion>:
              <ButtonAccion onClick={() => createDocInbox(authState.uid, userDataRecovered.uid, firestore, setActiveButton, history)} disabled={activeButton}>
                <span>Enviar mensaje</span>
              </ButtonAccion>
            }
            <h4>{userDataRecovered && userDataRecovered.name? `${userDataRecovered.name.firstName} ${userDataRecovered.name.lastName}`: userDataRecovered.username}</h4>
          </UserContainer>
          <ListTags>
            {userDataRecovered && userDataRecovered.preferences &&
              userDataRecovered.preferences.map((tag) => {
                const colorText = themeMode == "light" ? getColorLightMode() : getColorDarkMode()
                return <UserTag key={`${tag}_${userDataRecovered.id}`} category={tag} color={colorText} />}
              )
            }
          </ListTags>
        </Wrapper> 
        <ReturnPage/> 
      </main>
  );
})

export default MainProfile;
