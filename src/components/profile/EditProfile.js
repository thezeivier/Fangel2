import React from 'react';
import {newProfilePhoto} from './algorithms/newProfilePhoto'
import Wrapper from './../general/Wrapper'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'
import { ListTags} from './styles/sMainProfile'
import { InputEditStyled, UserEditContainer, Form, ButtonEditAccion, LinkInputContainer} from './styles/sEditProfile'
import { TitleStyled, TextStyled, TextAreaStyled, ButtonStyled} from '../../themes/internalRecyclableStyles'
import { getColorDarkMode, getColorLightMode} from '../community/algorithms/GetRandomColor'
import UserTag from './UserTag'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import linkedin from './icons/linkedin.svg'
import twitter from './icons/twitter.svg'
import youtube from './icons/youtube.svg'

const EditProfile = ({profileThumb, authState, storage, name, username, themeMode, preferences, id}) => {

    const changeProfileImage = (e) => {
        e.preventDefault()
        const profileImage = document.getElementById("profileImage")
        e = profileImage.click()
        profileImage.addEventListener('change', e => {
          newProfilePhoto(storage, e.target.files[0], authState.uid)
        })
        document.getElementById("profileImage").value = null
    }
    
    var other
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
                <Form>
                    
                    <InputEditStyled type="text" placeholder={"Nombres"} defaultValue={name && name.firstName}/>
                    <InputEditStyled type="text" placeholder={"Apellidos"} defaultValue={name && name.lastName}/>
                    <InputEditStyled type="text" placeholder={"Profesión actual"} />
                    <TextAreaStyled type="text" placeholder="Presentación" name="presentationOfUser"/>
                    <TextAreaStyled type="text" placeholder="Información" name="informationOfUser"/>
                    <h4>Redes sociales</h4>
                    <img src={facebook}/>
                    <LinkInputContainer>
                        <p>https://www.facebook.com/</p>
                        <InputEditStyled type="text" placeholder={"usuario"} />
                    </LinkInputContainer>
                    <img src={instagram}/>
                    <LinkInputContainer>
                        <p>https://www.instagram.com/</p>
                        <InputEditStyled type="text" placeholder={"usuario"} /> 
                    </LinkInputContainer>
                    <img src={linkedin}/>
                    <LinkInputContainer>
                        <p>https://www.linkedin.com/in/</p>
                        <InputEditStyled type="text" placeholder={"usuario"} />
                    </LinkInputContainer>
                    <img src={twitter}/>
                    <LinkInputContainer>
                        <p>https://twitter.com/</p>
                        <InputEditStyled type="text" placeholder={"usuario"} />
                    </LinkInputContainer>
                    <img src={youtube}/>
                    <LinkInputContainer>
                        <p>https://www.youtube.com/channel/</p>
                        <InputEditStyled type="text" placeholder={"usuario"} />
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
}

export default EditProfile