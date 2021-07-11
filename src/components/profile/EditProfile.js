import React, {useState, useEffect} from 'react';
import {newProfilePhoto} from './algorithms/newProfilePhoto'
import Wrapper from './../general/Wrapper'
import LoadServSpinner from '../spinner/LoadServSpinner'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'
import { useFirestore, useStorage, useFirebaseApp } from 'reactfire'
import { useForm } from 'react-hook-form'
import { ListTags} from './styles/sMainProfile'
import { InputEditStyled, ButtonEditAccion, CharacterContainer, SocialMediaContainer,
         InputSocialMedia } from './styles/sEditProfile'
import { TitleStyled, TextAreaStyled, ButtonStyled, SubtitleStyled,
         OnlyDesktop } from '../../themes/internalRecyclableStyles'
import { ProfileImage } from './styles/sMainProfile'
import { InputStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import { getColorDarkMode, getColorLightMode} from '../community/algorithms/GetRandomColor'
import { changePofileData } from './algorithms/changePofileData'
import UserTag from './UserTag'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import linkedin from './icons/linkedin.svg'
import twitter from './icons/twitter.svg'
import youtube from './icons/youtube.svg'

const EditProfile = React.memo(({profileThumb, authState, userFromDB, id, setProfileEditor}) => {
    const [loading, setLoading] = useState(false)
    const [pDLength, setPDLength]= useState(0)// pofessionalDescription Length
    const [aMLength, setAMLength]= useState(0)// aboutMe Length
    const firebase = useFirebaseApp()
    const firestore = useFirestore()
    const storage = useStorage()
    const { register, handleSubmit, errors } = useForm()
    const existProfileData = userFromDB.profileData? userFromDB.profileData: false

    useEffect(() => {

    },[pDLength, aMLength])
    const onSubmit = async (data) => {
        setLoading(true)
        await changePofileData(authState.uid, firestore, data, firebase)//codeValidated.type en lugar de "admin"
        setLoading(false)
        setProfileEditor(false)
    }

    const changeProfileImage = (e) => {
        e.preventDefault()
        const profileImage = document.getElementById("profileImage")
        e = profileImage.click()
        profileImage.addEventListener('change', async e => {
          setLoading(true)
          await newProfilePhoto(storage, e.target.files[0], authState.uid)
          setLoading(false)
        })
        document.getElementById("profileImage").value = null
    }

    const changePD = e => setPDLength(e.target.value.length)
    const changeAM = e => setAMLength(e.target.value.length)
    if (loading) return <LoadServSpinner title="Actualizando perfil"/>
    return(
      <main>
        <Wrapper>
          <TitleStyled bottom>Editar perfil</TitleStyled>
          <OnlyDesktop>
            <ProfileImage left>
              {
                profileThumb?
                <img src={profileThumb} alt="Imagen de perfil" />:
                <ProfileSVG />
              }
            </ProfileImage>
            <ButtonEditAccion onClick={changeProfileImage}>
              <AddPhotoSVG />
              <span>Cambiar foto</span>
            </ButtonEditAccion>
            <input type="file" accept="image/*" style={{display: "none"}} id="profileImage"/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <InputStyled marginBottom19
                  type="text" placeholder={"Nombres"} 
                  defaultValue={userFromDB.name && userFromDB.name.firstName} 
                  name="firstname"
                  maxLength="60"
                  ref={register({ required: true, maxLength: 60})}
                />
                <InputStyled marginBottom19 
                  type="text" 
                  placeholder={"Apellidos"} 
                  defaultValue={userFromDB.name && userFromDB.name.lastName}
                  name="lastname" 
                  maxLength="60"
                  ref={register({ required: true, maxLength: 60})}
                />
                <TextAreaStyled marginBottom7
                  type="text" 
                  placeholder="Descripción profesional" 
                  defaultValue={(existProfileData && existProfileData.professionalDescription) ? existProfileData.professionalDescription : ''}
                  name="professionalDescription"
                  maxLength="360"
                  onChange={changePD}
                  onLoad={changePD}
                  ref={register({maxLength: 360})}
                />
                <CharacterContainer>{`${pDLength}/360`}</CharacterContainer>
                <TextAreaStyled marginBottom7
                  type="text" 
                  placeholder="Acerca de mí"
                  defaultValue={(existProfileData && existProfileData.aboutMe) ? existProfileData.aboutMe : ''}
                  name="aboutMe"
                  maxLength="1000"
                  onChange={changeAM}
                  onLoad={changeAM}
                  ref={register({maxLength: 1000})}
                />
                <CharacterContainer>{`${aMLength}/1000`}</CharacterContainer>
              </div>
              <SubtitleStyled>Redes sociales</SubtitleStyled>
              <div>
                <SocialMediaContainer>
                  <img src={facebook}/>
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.facebook.com/"
                    defaultValue={(existProfileData && existProfileData.facebook) ? existProfileData.facebook.profile: ''}
                    maxLength="60"
                    name="facebook"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={instagram}/>
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.instagram.com/"
                    defaultValue={(existProfileData && existProfileData.instagram) ? existProfileData.instagram.profile: ''}
                    maxLength="60"
                    name="instagram"
                    ref={register({maxLength: 60})}
                  /> 
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={linkedin}/>
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.linkedin.com/in/"
                    defaultValue={(existProfileData && existProfileData.linkedin) ? existProfileData.linkedin.profile: ''}
                    maxLength="60"
                    name="linkedin"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={twitter}/>
                  <InputSocialMedia 
                    type="text"
                    placeholder="https://www.twitter.com/"
                    defaultValue={(existProfileData && existProfileData.twitter) ? existProfileData.twitter.profile: ''}
                    maxLength="60"
                    name="twitter"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={youtube}/>
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.youtube.com/channel/"
                    defaultValue={(existProfileData && existProfileData.youtube) ? existProfileData.youtube.profile: ''}
                    maxLength="60"
                    name="youtube"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
              </div>
              <ButtonStyled primary type="submit">Guardar información</ButtonStyled>
            </form>
          </OnlyDesktop>
        </Wrapper> 
      </main>
    )
})

export default EditProfile

                    {/* <ListTags>
                        {preferences &&
                        preferences.map((tag) => {
                            const colorText = themeMode == "light" ? getColorLightMode() : getColorDarkMode()
                            return <UserTag key={`${tag}_${id}`} category={tag} color={colorText} />}
                            )
                        }
                    </ListTags> */}