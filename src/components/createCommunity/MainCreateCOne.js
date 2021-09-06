import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom'
import {AppContext} from '../../App'
import { useForm } from 'react-hook-form'
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import LoadServSpinner from './../spinner/LoadServSpinner'
import { TitleStyled, TextAreaStyled, ButtonStyled, OnlyDesktop,
         SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { InputStyled, ErrorAlert } from './../../pages/signInAndUp/styles/sGlobalForm'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { FieldSet, OtherInformation, SpeakersList } from './styles/sMainCreateCommunity'
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
  const [typeOfSpace, setTypeOfSpace] = useState("conference")
  const [speakers, setSpeakers] = useState([])

  const onSubmit = async data => {
    setCommunityCreated("sending")
    let result = await CreateCommunity(data, firestore, userApp, imageRecovered, storage, roomPrivacy, typeOfSpace, speakers)
    setRoomName(result.hashName)//Este debe ir primero para que se pueda pasar el roomName, de lo contrario habrá error.
    setCommunityCreated(result.result)
    window.location.reload()
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

  const checkConversation = () => {
    setTypeOfSpace("convesation")
  }

  const checkConference = () => {
    setTypeOfSpace("conference")
  }

  const addSpeaker = (e) => {
    e.preventDefault()
    const newSpeaker = document.getElementById("newSpeaker").value
    !speakers.includes(newSpeaker) && newSpeaker!== "" && setSpeakers([...speakers, newSpeaker])
    document.getElementById("newSpeaker").value = ""
  }

  return (
    <main>
      {
        communityCreated === true?
        <Redirect to={{
          pathname: `/room/${roomName}`,
        }}/>:(
          <>
            {
              (communityCreated === "sending") &&
              <LoadServSpinner title="Creando tu espacio social" />
            }
            <Wrapper>
              <TitleStyled bottom>Crear un espacio social</TitleStyled>
              <TextBody bottom20>
                En los espacios sociales podras hablar de cualquier tema con cualquier persona. ¡Invita a tus amigos!
              </TextBody>
              <OnlyDesktop>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <SubtitleStyled>Tipo de espacio social</SubtitleStyled>
                    <FieldSet>
                      <label className="radiosContainerFlex__item">
                        <input type="radio" defaultChecked onClick={checkPublic} id="public" name="privacy" value="public" />
                        <span className="rCCheckmark"></span>
                        Pública <span className="spanRadiosDescription">(Visible para todos en el feed)</span>
                      </label>
                      <label className="radiosContainerFlex__item">
                        <input type="radio" onClick={checkPrivate} name="privacy" value="private"/>
                        <span className="rCCheckmark"></span>
                        Privada <span className="spanRadiosDescription">(No visible en el feed, solo se accede con un link)</span>
                      </label>
                    </FieldSet>
                  </div>
                  {/* <div>
                    <SubtitleStyled>Finalidad del espacio</SubtitleStyled>
                    <FieldSet>
                      {roomPrivacy === "private" &&
                        <label className="radiosContainerFlex__item">
                          <input type="radio" onClick={checkConversation} name="finally" value="conversation" />
                          <span className="rCCheckmark"></span>
                          Conversatorio <span className="spanRadiosDescription">(Menor a 30 personas)</span>
                        </label>
                      }
                      <label className="radiosContainerFlex__item">
                        <input type="radio" defaultChecked onClick={checkConference} name="finally" value="conference"/>
                        <span className="rCCheckmark"></span>
                        Conferencia <span className="spanRadiosDescription">(Mayor a 30 personas)</span>
                      </label>
                    </FieldSet>
                  </div> */}
                  <InputStyled type="text" placeholder="Nombre del espacio social" name="nameCommunity" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
                  <ErrorAlert>{errors.nameCommunity? errors.nameCommunity.message: ""}</ErrorAlert>
                  {roomPrivacy === "public" && 
                    <>
                      <TextAreaStyled type="text" placeholder="Descripcion" name="descriptionCommunity" ref={register()}/>
                      <ErrorAlert>{errors.descriptionCommunity? errors.descriptionCommunity.message: ""}</ErrorAlert>
                      <div>
                        <OtherInformation>Se recomienda usar imágenes en formato gif de 400px x 400px</OtherInformation>
                        <input type="file" accept="image/*" style={{display: "none"}} id="communityImage"/>
                        {(disable) ?
                          <ButtonStyled onClick={recoverCommunityImage} secondary bottom30 disabled>Imagen cargada</ButtonStyled> :
                          <ButtonStyled onClick={recoverCommunityImage} secondary bottom30>Subir imagen</ButtonStyled>
                        }
                      </div>
                    </>
                  }

                  <div>
                    <SubtitleStyled>Conferencistas (Opcional)</SubtitleStyled>
                    <FieldSet>
                      <InputStyled type="email" placeholder="Correo de conferencista" id="newSpeaker" name="speakers" />
                    </FieldSet>
                    <SpeakersList>
                      {
                        speakers.map(speaker => <li key={speaker}>{speaker}</li>)
                      }
                    </SpeakersList>
                    <ButtonStyled onClick={addSpeaker} secondary bottom30>Agregar</ButtonStyled>
                  </div>

                  <TextBody>
                    Los espacios sociales públicos son visibles para todo los usuarios registrados en Fangel.
                  </TextBody>
                  <TextBody secondParagraph>
                    Los espacios privados solo son accedidos medinate un link.
                  </TextBody>
                  <ButtonStyled primary type="submit">Crear espacio social</ButtonStyled>
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
