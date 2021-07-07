import React, {useState, useEffect} from 'react';
import {newProfilePhoto} from './algorithms/newProfilePhoto'
import Wrapper from './../general/Wrapper'
import LoadServSpinner from '../spinner/LoadServSpinner'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'
import { useFirestore, useStorage, useFirebaseApp } from 'reactfire'
import { useForm } from 'react-hook-form'
import { ListTags} from './styles/sMainProfile'
import { InputEditStyled, UserEditContainer, Form, ButtonEditAccion, LinkInputContainer} from './styles/sEditProfile'
import { TitleStyled, TextStyled, TextAreaStyled, ButtonStyled} from '../../themes/internalRecyclableStyles'
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
    const [pDLength, setPDLength]= useState(0)
    const [aMLength, setAMLength]= useState(0)
    const firebase = useFirebaseApp()
    const firestore = useFirestore()
    const storage = useStorage()
    const { register, handleSubmit, errors } = useForm()
    const existProfileData = userFromDB.profileData? userFromDB.profileData: false

    useEffect(() => {

    },[])
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
        profileImage.addEventListener('change', e => {
          newProfilePhoto(storage, e.target.files[0], authState.uid)
        })
        document.getElementById("profileImage").value = null
    }

    const changePD = e => setPDLength(e.target.value.length)
    const changeAM = e => setAMLength(e.target.value.length)
    if (loading) return <LoadServSpinner title="Actualizando perfil"/>
    return(
        <main>
            <Wrapper>
            <TitleStyled>Editar perfil</TitleStyled>
            <UserEditContainer>
                {
                    profileThumb ?
                    <img src={profileThumb} alt="Imagen de perfil" />:
                    <ProfileSVG />
                }
                <ButtonEditAccion onClick={changeProfileImage}>
                    <AddPhotoSVG />
                    <span>Cambiar foto</span>
                </ButtonEditAccion>
                <input type="file" accept="image/*" style={{display: "none"}} id="profileImage"/>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputEditStyled 
                        type="text" placeholder={"Nombres"} 
                        defaultValue={userFromDB.name && userFromDB.name.firstName} 
                        name="firstname"
                        maxLength="60"
                        ref={register({ required: true, maxLength: 60})}
                    />
                    <InputEditStyled 
                        type="text" 
                        placeholder={"Apellidos"} 
                        defaultValue={userFromDB.name && userFromDB.name.lastName}
                        name="lastname" 
                        maxLength="60"
                        ref={register({ required: true, maxLength: 60})}
                    />
                    <TextAreaStyled 
                        type="text" 
                        placeholder="Descripción profesional" 
                        defaultValue={existProfileData && existProfileData.professionalDescription}
                        name="professionalDescription"
                        maxLength="360"
                        onChange={changePD}
                        ref={register({maxLength: 360})}
                    />
                    <div>{`${pDLength}/360`}</div>
                    <TextAreaStyled 
                        type="text" 
                        placeholder="Acerca de mí"
                        defaultValue={existProfileData && existProfileData.aboutMe}
                        name="aboutMe"
                        maxLength="1000"
                        onChange={changeAM}
                        ref={register({maxLength: 1000})}
                    />
                    <div>{`${aMLength}/1000`}</div>
                    <h4>Redes sociales</h4>
                    <img src={facebook}/>
                    <LinkInputContainer>
                        <p>https://www.facebook.com/</p>
                        <InputEditStyled 
                            type="text" 
                            placeholder={"usuario"}
                            defaultValue={(existProfileData && existProfileData.facebook) && existProfileData.facebook.profile}
                            maxLength="60"
                            name="facebook"
                            ref={register({maxLength: 60})}
                        />
                    </LinkInputContainer>
                    <img src={instagram}/>
                    <LinkInputContainer>
                        <p>https://www.instagram.com/</p>
                        <InputEditStyled 
                            type="text" 
                            placeholder={"usuario"}
                            defaultValue={(existProfileData && existProfileData.instagram) && existProfileData.instagram.profile}
                            maxLength="60"
                            name="instagram"
                            ref={register({maxLength: 60})}
                        /> 
                    </LinkInputContainer>
                    <img src={linkedin}/>
                    <LinkInputContainer>
                        <p>https://www.linkedin.com/in/</p>
                        <InputEditStyled 
                            type="text" 
                            placeholder={"usuario"}
                            defaultValue={(existProfileData && existProfileData.linkedin) && existProfileData.linkedin.profile}
                            maxLength="60"
                            name="linkedin"
                            ref={register({maxLength: 60})}
                        />
                    </LinkInputContainer>
                    <img src={twitter}/>
                    <LinkInputContainer>
                        <p>https://twitter.com/</p>
                        <InputEditStyled 
                            type="text"
                            placeholder={"usuario"}
                            defaultValue={(existProfileData && existProfileData.twitter) && existProfileData.twitter.profile}
                            maxLength="60"
                            name="twitter"
                            ref={register({maxLength: 60})}
                        />
                    </LinkInputContainer>
                    <img src={youtube}/>
                    <LinkInputContainer>
                        <p>https://www.youtube.com/channel/</p>
                        <InputEditStyled 
                            type="text" 
                            placeholder={"usuario"}
                            defaultValue={(existProfileData && existProfileData.youtube) && existProfileData.youtube.profile}
                            maxLength="60"
                            name="youtube"
                            ref={register({maxLength: 60})}
                        />
                    </LinkInputContainer>

                    {/* <ListTags>
                        {preferences &&
                        preferences.map((tag) => {
                            const colorText = themeMode == "light" ? getColorLightMode() : getColorDarkMode()
                            return <UserTag key={`${tag}_${id}`} category={tag} color={colorText} />}
                            )
                        }
                    </ListTags> */}
                    <ButtonStyled primary type="submit">Guardar</ButtonStyled>
                </Form>
                
            </UserEditContainer>
            </Wrapper> 
        </main>
    )
})

export default EditProfile