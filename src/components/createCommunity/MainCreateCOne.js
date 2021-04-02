import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom'
import {AppContext} from '../../App'
import { useForm } from 'react-hook-form'
import {useFirestore} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { TitleStyled, TextStyled, TextAreaStyled, ButtonStyled,
         OnlyDesktop } from './../../themes/internalRecyclableStyles'
import { InputStyled, ErrorAlert } from './../../pages/signInAndUp/styles/sGlobalForm'
import { TextBody } from './../../themes/externalRecyclableStyles'
import {CreateCommunity} from './algorithms/CreateCommunity'

const MainCreateCOne = () => {
  const firestore = useFirestore()
  const userApp = useContext(AppContext)
  const [communityCreated, setCommunityCreated] = useState()
  const {register, handleSubmit, errors } = useForm()
  const onSubmit = async data => {
    const result = await CreateCommunity(data, firestore, userApp)
    setCommunityCreated(result)
  }
  return (
    communityCreated?
    <Redirect to={{
      pathname: "/video-user"
    }}/>:
    <main>
      <Wrapper>
        <TitleStyled bottom>Crear una comunidad</TitleStyled>
        <OnlyDesktop>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputStyled type="text" placeholder="Nombre de la comunidad" name="nameCommunity" ref={register({require:{value: true, message:"Campo requerido*"}})}/>
            <ErrorAlert>{errors.nameCommunity? errors.nameCommunity.message: ""}</ErrorAlert>
            <TextAreaStyled type="text" placeholder="Descripcion" name="descriptionCommunity" ref={register({require:{value: true, message:"Campo requerido*"}})}/>
            <ErrorAlert>{errors.descriptionCommunity? errors.descriptionCommunity.message: ""}</ErrorAlert>
            <div>
              <ButtonStyled secondary bottom30>Subir imagen</ButtonStyled>
            </div>
            <TextBody>
              Las comunidades tiene vida solo por 1 hora, esto significa que esta comunidad sera única y especial.
            </TextBody>
            <ButtonStyled primary type="submit">Crear comunidad</ButtonStyled>
          </form>
        </OnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainCreateCOne;
