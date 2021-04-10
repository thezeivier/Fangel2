import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom'
import {AppContext} from '../../App'
import { useForm } from 'react-hook-form'
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { TitleStyled, TextAreaStyled, ButtonStyled,
         OnlyDesktop } from './../../themes/internalRecyclableStyles'
import { InputStyled, ErrorAlert } from './../../pages/signInAndUp/styles/sGlobalForm'
import { TextBody } from './../../themes/externalRecyclableStyles'
import {CreateCommunity} from './algorithms/CreateCommunity'

const MainCreateCOne = () => {
  const firestore = useFirestore()
  const storage = useStorage()
  const userApp = useContext(AppContext)
  const [communityCreated, setCommunityCreated] = useState()
  const [imageRecovered, setImageRecovered] = useState()
  const {register, handleSubmit, errors } = useForm()
  const onSubmit = async data => {
    setCommunityCreated("test")
    const result = await CreateCommunity(data, firestore, userApp, imageRecovered, storage)
    setCommunityCreated(result)
  }
  
  const recoverCommunityImage = async (e) =>{
    e.preventDefault()
    const communityImage = document.getElementById("communityImage")
    e = communityImage.click()
    communityImage.addEventListener('change', e => {
      setImageRecovered(e.target.files[0])
    })
    document.getElementById("communityImage").value = null
  }

  return (
    communityCreated === true?
    <Redirect to={{
      pathname: "/create-community-2"
    }}/>:
    <main>
      <Wrapper>
        <TitleStyled bottom>Crear una comunidad</TitleStyled>
        <OnlyDesktop>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputStyled type="text" placeholder="Nombre de la comunidad" name="nameCommunity" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
            <ErrorAlert>{errors.nameCommunity? errors.nameCommunity.message: ""}</ErrorAlert>
            <TextAreaStyled type="text" placeholder="Descripcion" name="descriptionCommunity" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
            <ErrorAlert>{errors.descriptionCommunity? errors.descriptionCommunity.message: ""}</ErrorAlert>
            <div>
              <input type="file" accept="image/*" style={{display: "none"}} id="communityImage"/>
              <ButtonStyled onClick={recoverCommunityImage} secondary bottom30>Subir imagen</ButtonStyled>
            </div>
            <TextBody>
              Las comunidades tiene vida solo por 1 hora, esto significa que esta comunidad sera única y especial.
            </TextBody>
            {
              (!communityCreated || communityCreated !== "test") && <ButtonStyled primary type="submit">Crear comunidad</ButtonStyled>
            }
          </form>
        </OnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainCreateCOne;
