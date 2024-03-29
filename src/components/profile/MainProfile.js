import React, { useState, useContext, useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import UserTag from './UserTag'
import {useStorage, useFirestore} from 'reactfire'
import { useMatchRouteUserData } from './algorithms/useMatchRouteUserData'
import { UserContainer, ListTags, ButtonAccion, ProfileImage } from './styles/sMainProfile'
// import { colorGenerator } from './algorithms/colorGenerator'
import { getColorDarkMode, getColorLightMode} from '../community/algorithms/GetRandomColor'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'

//Import components from code Box
import { ContainerInformation, SmallTextStyled, TextBodyStyled, GridOnlyDesktop } from './styles/sMainProfile'
import { SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { SocialMediaContainer } from './styles/sEditProfile'
import { createDocInbox } from './algorithms/createDocInbox'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import linkedin from './icons/linkedin.svg'
import twitter from './icons/twitter.svg'
import youtube from './icons/youtube.svg'

//Import components for edit profile
import EditProfile from './EditProfile'

const MainProfile = React.memo(({nameUserRoute, userFromDB, authState}) => {
  const storage = useStorage()
  const firestore = useFirestore()
  const history = useHistory()
  const [profileThumb, setProfileThumb] = useState()
  const [userDataRecovered, setUserDataRecovered] = useState(null)
  const [activeButton, setActiveButton] = useState(false)
  const [profileEditor, setProfileEditor] = useState(false)
  const [fangelScore, setFangelScore] = useState(0)
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
      var localFangelScore = 0
      if((userData[0].score && userData[0].score.fangelScore)){
        localFangelScore = userData[0].score.fangelScore
        if(userData[0].score.profileScore){
          localFangelScore += userData[0].score.profileScore
          if(userData[0].photoUrl){
            localFangelScore += 30
          }
        }
      }
      setFangelScore(localFangelScore)
    }
    
  },[userData])
  
  if(loading) return <p>Pending...</p>
  
  if(error) {
    return false // Mostrar mensaje de error o redirección
  }
  const isMyUser = authState.uid === userDataRecovered.id
  const profileData = (userDataRecovered && userDataRecovered.profileData) ? userDataRecovered.profileData : null
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

  const myScore =   userFromDB.score?.fangelScore + userFromDB.score?.profileScore + 30
  
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
            <h4>{userDataRecovered && userDataRecovered.name? `${userDataRecovered.name.firstName} ${userDataRecovered.name.lastName}`: userDataRecovered.username}</h4>
            {profileData && <p>{profileData.professionalDescription}</p>}
            {
              isMyUser ?
              <ButtonAccion onClick={changeDataOfProfile}>
                <span>Editar perfil</span>
              </ButtonAccion>: ( myScore >= 100 ?
                <ButtonAccion onClick={() => createDocInbox(authState.uid, userDataRecovered.uid, firestore, setActiveButton, history)} disabled={activeButton}>
                  <span>Enviar mensaje</span>
                </ButtonAccion>: 
                <ButtonAccion disabled>
                  <span>Para enviar mensajes debes tener un Fangel Score mayor a 100</span>
                </ButtonAccion>
              )
            }
          </UserContainer>
          <GridOnlyDesktop>
            <div>
              <ContainerInformation>
                <SubtitleStyled>Fangel Score</SubtitleStyled>
                <h5>
                  {fangelScore}
                  <span>
                    puntos
                  </span>
                </h5>
                <SmallTextStyled>Esta puntución ayuda a mejorar tus conexiones en Fangel.</SmallTextStyled>
                <Link to="#" className="moreInformationScore">Ver formas de subir la puntuación</Link>
              </ContainerInformation>
              <ContainerInformation>
                <SubtitleStyled>Intereses</SubtitleStyled>
                <ListTags>
                  {userDataRecovered && userDataRecovered.preferences &&
                    userDataRecovered.preferences.map((tag) => {
                      const colorText = themeMode == "light" ? getColorLightMode() : getColorDarkMode()
                      return <UserTag key={`${tag}_${userDataRecovered.id}`} category={tag} color={colorText} />}
                    )
                  }
                </ListTags>
              </ContainerInformation>
            </div>
            <div>
              {profileData && profileData.aboutMe &&
                <ContainerInformation>
                  <SubtitleStyled>Acerca de</SubtitleStyled>
                  <TextBodyStyled>{profileData.aboutMe}</TextBodyStyled>
                </ContainerInformation>
              }
              {profileData && (profileData.facebook || profileData.instagram || profileData.linkedin || profileData.twitter || profileData.youtube) &&
                <ContainerInformation last>
                  <SubtitleStyled>Redes sociales</SubtitleStyled>
                    <div>
                      {profileData && profileData.facebook && profileData.facebook.profile &&
                        <SocialMediaContainer mainMedia>
                          <img src={facebook}/>
                          <a href={profileData.facebook.profile} className="linkSocialMedia" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </SocialMediaContainer>
                      }
                      {profileData && profileData.instagram && profileData.instagram.profile &&
                        <SocialMediaContainer mainMedia>
                          <img src={instagram}/>
                          <a href={profileData.instagram.profile} className="linkSocialMedia" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </SocialMediaContainer>
                      }
                      {profileData && profileData.linkedin && profileData.linkedin.profile &&
                        <SocialMediaContainer mainMedia>
                          <img src={linkedin}/>
                          <a href={profileData.linkedin.profile} className="linkSocialMedia" target="_blank" rel="noopener noreferrer">Linkendin</a>
                        </SocialMediaContainer>
                      }
                      {profileData && profileData.twitter && profileData.twitter.profile &&
                        <SocialMediaContainer mainMedia>
                          <img src={twitter}/>
                          <a href={profileData.twitter.profile} className="linkSocialMedia" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </SocialMediaContainer>
                      }
                      {profileData && profileData.youtube && profileData.youtube.profile &&
                        <SocialMediaContainer mainMedia last>
                          <img src={youtube}/>
                          <a href={profileData.youtube.profile} className="linkSocialMedia" target="_blank" rel="noopener noreferrer">Youtube</a>
                        </SocialMediaContainer>
                      }
                    </div>
                </ContainerInformation>
              }
            </div>
          </GridOnlyDesktop>
        </Wrapper> 
        <ReturnPage/> 
      </main>
  );
})

export default MainProfile;
