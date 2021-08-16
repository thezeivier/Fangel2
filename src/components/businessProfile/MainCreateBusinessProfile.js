import React, { useState, useEffect,useContext } from 'react';
import Wrapper from './../general/Wrapper'
import LoadServSpinner from '../spinner/LoadServSpinner'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './../profile/icons/addPhoto.svg'
import { useFirestore, useStorage, useFirebaseApp } from 'reactfire'
import { useForm } from 'react-hook-form'
import { ButtonEditAccion, CharacterContainer, SocialMediaContainer, InputSocialMedia } from './../profile/styles/sEditProfile'
import { TitleStyled, TextAreaStyled, ButtonStyled, SubtitleStyled,
         OnlyDesktop } from './../../themes/internalRecyclableStyles'
import { ProfileImage } from './../profile/styles/sMainProfile'
import { InputStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import facebook from './../profile/icons/facebook.svg'
import instagram from './../profile/icons/instagram.svg'
import linkedin from './../profile/icons/linkedin.svg'
import twitter from './../profile/icons/twitter.svg'
import youtube from './../profile/icons/youtube.svg'
import { newProfilePhoto } from './algorithms/newProfilePhoto'
import { AppContext } from '../../App'
import { CreateBussinesProfile } from './algorithms/CreateBussinesProfile'
import { GetDataFromBussinesProfile } from './algorithms/GetDataFromBussinesProfile'

const MainCreateBusinessProfile = () => {
  const [loading, setLoading] = useState(false)
  const [pDLength, setPDLength]= useState(0)// pofessionalDescription Length
  const [aMLength, setAMLength]= useState(0)// aboutMe Length
  const [imageRecovered, setImageRecovered] = useState()
  const [profileTumb, setProfileThumb] = useState()
  const {authState, userFromDB} = useContext(AppContext)
  const firebase = useFirebaseApp()
  const firestore = useFirestore()
  const storage = useStorage()
  const { register, handleSubmit, errors, reset } = useForm()

  const changePD = e => setPDLength(e.target.value.length)
  const changeAM = e => setAMLength(e.target.value.length)

  const {data, status, error} = GetDataFromBussinesProfile(userFromDB.uid, "users", "profileEnterprise")

  if(status == "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>

  const dataPrfEnterprise = data[0]

  const onSubmit = async (data) => {
    setLoading(true)
    const result = await CreateBussinesProfile(data, firestore, imageRecovered, storage, userFromDB)
    setLoading(false)
  }

  const changeProfileImage = async (e) => {
    e.preventDefault()
    const profileImage = document.getElementById("profileImage")
    e = profileImage.click()
    profileImage.addEventListener('change', async e => {
      await setImageRecovered(e.target.files[0])
    })
    document.getElementById("profileImage").value = null
  }

  if (loading) return <LoadServSpinner title="Creando perfil"/>
  return (
    <main>
      <Wrapper>
      <TitleStyled bottom>Crear perfil empresarial</TitleStyled>
          <OnlyDesktop>
            <ProfileImage left>
              <ProfileSVG /> 
            </ProfileImage>
            <ButtonEditAccion onClick={changeProfileImage}>
              <AddPhotoSVG />
              <span>Cambiar logotipo</span>
            </ButtonEditAccion>
            <input type="file" accept="image/*" style={{display: "none"}} id="profileImage"/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{margin: '0 0 20px 0'}}>
                <InputStyled marginBottom7
                  type="text" placeholder={"Nombre"} 
                  name="name"
                  maxLength="60"
                  ref={register({ required: true, maxLength: 60})}
                />
                <TextAreaStyled marginBottom7
                  type="text" 
                  placeholder="Descripción de la empresa" 
                  name="businessDescription"
                  maxLength="360"
                  onChange={changePD}
                  onLoad={changePD}
                  ref={register({maxLength: 360})}
                />
                <CharacterContainer>{`${pDLength}/360`}</CharacterContainer>
                <InputStyled marginBottom7
                  type="text" 
                  placeholder="Sector de la empresa"
                  name="companySector"
                  maxLength="100"
                  ref={register({maxLength: 100})}
                />
                <InputStyled marginBottom7
                  type="text" 
                  placeholder="Sede principal"
                  name="companyAddress"
                  maxLength="100"
                  ref={register({maxLength: 100})}
                />
                <InputStyled marginBottom7 
                  type="text" 
                  placeholder={"Dirección de sitio web"} 
                  name="web" 
                  maxLength="100"
                  ref={register({ required: true, maxLength: 100})}
                />
              </div>
              <SubtitleStyled>Redes sociales</SubtitleStyled>
              <div>
                <SocialMediaContainer>
                  <img src={facebook} alt="Imagen logo Facebook" />
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.facebook.com/"
                    maxLength="60"
                    name="facebook"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={instagram} alt="Imagen logo Instagram" />
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.instagram.com/"
                    maxLength="60"
                    name="instagram"
                    ref={register({maxLength: 60})}
                  /> 
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={linkedin} alt="Imagen logo Linkedin" />
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.linkedin.com/in/"
                    maxLength="60"
                    name="linkedin"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={twitter} alt="Imagen logo Twitter" />
                  <InputSocialMedia 
                    type="text"
                    placeholder="https://www.twitter.com/"
                    maxLength="60"
                    name="twitter"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
                <SocialMediaContainer>
                  <img src={youtube} alt="Imagen logo Youtube" />
                  <InputSocialMedia 
                    type="text" 
                    placeholder="https://www.youtube.com/channel/"
                    maxLength="60"
                    name="youtube"
                    ref={register({maxLength: 60})}
                  />
                </SocialMediaContainer>
              </div>
              <ButtonStyled primary type="submit">Crear perfil empresarial</ButtonStyled>
            </form>
          </OnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainCreateBusinessProfile;
