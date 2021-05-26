import React, { useState, useContext, useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import UserTag from './UserTag'
import {useStorage, useFirestore} from 'reactfire'
import { useMatchRouteUserData } from './algorithms/useMatchRouteUserData'
import { AppContext } from '../../App'
import { UserContainer, ListTags, ButtonAccion, CodeContainer } from './styles/sMainProfile'
// import { colorGenerator } from './algorithms/colorGenerator'
import {newProfilePhoto} from './algorithms/newProfilePhoto'
import { getColorDarkMode, getColorLightMode} from '../community/algorithms/GetRandomColor'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'

//Import components from code Box
import { Form, CommentSVGContainer, InputStyled } from './styles/sMainProfile'
import { ReactComponent as CopySVG } from '../createCommunity/icons/copy.svg'
import {CopyCode} from '../createCommunity/algorithms/CopyCode'
import { createDocInbox } from './algorithms/createDocInbox'

const MainProfile = () => {
  const storage = useStorage()
  const firestore = useFirestore()
  const history = useHistory()
  const [profileThumb, setProfileThumb] = useState()
  const [code, setCode] = useState()
  const [activeButton, setActiveButton] = useState(false)
  const {userFromDB, authState} = useContext(AppContext)
  const location = useLocation()
  const match = useRouteMatch("/u/:id")
  const nameUserRoute = match.params.id.concat(location.hash)
  const [userData, loading, error] = useMatchRouteUserData("users", nameUserRoute)

  useEffect(()=>{
    if(userFromDB.type === "admin" && userFromDB.userCodesRef){
      userFromDB.userCodesRef
      .get()
      .then(result =>{
        if(result.data().users.length < 20){
          setCode(result.data().code)
        }
      })
    }
  },[])

  if(loading) return <p>Pending...</p>
    
  if(error) {
    return false // Mostrar mensaje de error o redirección
  }

  const {
    id, 
    uid,
    preferences,
    username,
    name,
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
  // console.log(authState.uid, uid)
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
            <ButtonAccion onClick={changeProfileImage}>
              <AddPhotoSVG />
              <span>Cambiar foto</span>
            </ButtonAccion>
          }
          <input type="file" accept="image/*" style={{display: "none"}} id="profileImage"/>
          {
            !isMyUser &&
            <ButtonAccion onClick={() => createDocInbox(authState.uid, uid, firestore, setActiveButton, history)} disabled={activeButton}>
              <span>Enviar mensaje</span>
            </ButtonAccion>
          }
          <h4>{name? `${name.firstName} ${name.lastName}`: username}</h4>
        </UserContainer>
        <ListTags>
          {preferences &&
            preferences.map((tag) => {
              const colorText = themeMode == "light" ? getColorLightMode() : getColorDarkMode()
              return <UserTag key={`${tag}_${id}`} category={tag} color={colorText} />}
            )
          }
        </ListTags>
{/*         {
          (userFromDB.type === "admin" )&&
            (authState.uid === id)&&
            <CodeContainer>
              <p>
                Brinda este código a otras personas que quieran registrarse en fangel
              </p>
              <Form>
                <label>Código de invitación </label>
                <InputStyled id="copyCode" special invitationCode type="text" value={code? code: "Cargando..."} placeholder="Código de invitación" readOnly/>
                <CommentSVGContainer onClick={()=>CopyCode("copyCode")}>
                  <CopySVG/>
                </CommentSVGContainer>
              </Form>
            </CodeContainer>
        }  */}
      </Wrapper> 
      <ReturnPage/> 
    </main>
  );
}

export default MainProfile;
