import React, {useState, useContext} from 'react';
import {Redirect} from 'react-router-dom'
import {AppContext} from '../../App'
import { useForm } from 'react-hook-form'
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import LoadServSpinner from './../spinner/LoadServSpinner'
import { TitleStyled, TextAreaStyled, ButtonStyled,
         OnlyDesktop } from './../../themes/internalRecyclableStyles'
import { InputStyled, ErrorAlert } from './../../pages/signInAndUp/styles/sGlobalForm'

const CreateSubSpace = () => {
  return (
        <main>
      {
        communityCreated === true?
        <Redirect to={{
          pathname: "/create-subspace",
          state: { 
            room: roomName
          },
        }}/>:(
          <>
            {
              (communityCreated === "sending") &&
              <LoadServSpinner title="Creando un subespacio" />
            }
            <Wrapper>
              <TitleStyled bottom>Crear un subespacio</TitleStyled>
              <OnlyDesktop>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <InputStyled type="text" placeholder="Nombre del subespacio" name="nameCommunity" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
                  <ErrorAlert>{errors.nameCommunity? errors.nameCommunity.message: ""}</ErrorAlert>
                  {roomPrivacy === "public" && 
                    <>
                      <TextAreaStyled type="text" placeholder="Descripcion" name="descriptionCommunity" ref={register()}/>
                      <ErrorAlert>{errors.descriptionCommunity? errors.descriptionCommunity.message: ""}</ErrorAlert>
                    </>
                  }
                  <ButtonStyled primary type="submit">Crear subespacio</ButtonStyled>
                </form>
              </OnlyDesktop>
            </Wrapper>
          </>
        )
      }
    </main>
  );
}

export default CreateSubSpace;
