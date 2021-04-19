import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom'
import {AppContext} from '../../App'
import { useForm } from 'react-hook-form'
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import LoadServSpinner from './../spinner/LoadServSpinner'
import { TitleStyled, TextAreaStyled, ButtonStyled,
         OnlyDesktop, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { InputStyled, ErrorAlert } from './../../pages/signInAndUp/styles/sGlobalForm'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { FieldSet } from './styles/sMainCreateCommunity'
import { CreateCommunity } from './algorithms/CreateCommunity'

const MainCreateCOne = () => {
  const firestore = useFirestore()
  const storage = useStorage()
  const userApp = useContext(AppContext)
  const [communityCreated, setCommunityCreated] = useState()
  const [roomName, setRoomName] = useState()
  const [imageRecovered, setImageRecovered] = useState()
  const {register, handleSubmit, errors } = useForm()
  const [disable, setDisable] = useState(false);
  const [roomPrivacy, setRoomPrivacy] = useState("public")

  const onSubmit = async data => {
    setCommunityCreated("sending")
    let result = await CreateCommunity(data, firestore, userApp, imageRecovered, storage, roomPrivacy)
    setRoomName(result.hashName)//Este debe ir primero para que se pueda pasar el roomName, de lo contrario habrá error.
    setCommunityCreated(result.result)
  }
  
  const recoverCommunityImage = (e) =>{
    e.preventDefault()
    const communityImage = document.getElementById("communityImage")
    e = communityImage.click()
    communityImage.addEventListener('change', async e => {
      await setImageRecovered(e.target.files[0])
      setDisable(true)
    })
    communityImage.value = null
  }

  const checkPublic = (e) => {
    setRoomPrivacy("public")
  }

  const checkPrivate = (e) =>{
    setRoomPrivacy("private")
  }


  return (
    <main>
      {
        communityCreated === true?
        <Redirect to={{
          pathname: "/create-community-2",
          state: { 
            room: roomName
          },
        }}/>:(
          <>
            {
              (communityCreated === "sending") &&
              <LoadServSpinner title="Preparando el espacio para tu comunidad" />
            }
            <Wrapper>
              <TitleStyled bottom>Crear una comunidad</TitleStyled>
              <OnlyDesktop>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <SubtitleStyled>Elige el tipo de comunidad</SubtitleStyled>
                    <FieldSet>
                      <label className="radiosContainerFlex__item">
                        <input type="radio" defaultChecked onClick={checkPublic} id="public" name="privacy" value="public" />
                        <span className="rCCheckmark"></span>
                        Pública <span>(Visible para todos en el feed)</span>
                      </label>
                      <label className="radiosContainerFlex__item">
                        <input type="radio" onClick={checkPrivate} name="privacy" value="private"/>
                        <span className="rCCheckmark"></span>
                        Privada <span>(No visible en el feed, solo se accede con un link)</span>
                      </label>
                    </FieldSet>
                  </div>
                  <InputStyled type="text" placeholder="Nombre de la comunidad" name="nameCommunity" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
                  <ErrorAlert>{errors.nameCommunity? errors.nameCommunity.message: ""}</ErrorAlert>
                  {roomPrivacy === "public" && 
                    <>
                      <TextAreaStyled type="text" placeholder="Descripcion" name="descriptionCommunity" ref={register()}/>
                      <ErrorAlert>{errors.descriptionCommunity? errors.descriptionCommunity.message: ""}</ErrorAlert>
                      <div>
                        <input type="file" accept="image/*" style={{display: "none"}} id="communityImage"/>
                        {(disable) ?
                          <ButtonStyled onClick={recoverCommunityImage} secondary bottom30 disabled>Imagen cargada</ButtonStyled> :
                          <ButtonStyled onClick={recoverCommunityImage} secondary bottom30>Subir imagen</ButtonStyled>
                        }
                      </div>
                    </>
                  }
                  <TextBody>
                    Las comunidades tiene vida solo por 1 hora, esto significa que esta comunidad sera única y especial.
                  </TextBody>
                  <ButtonStyled primary type="submit">Crear comunidad</ButtonStyled>
                </form>
              </OnlyDesktop>
            </Wrapper>
          </>
        )
      }
    </main>
  );
}

export default MainCreateCOne;
