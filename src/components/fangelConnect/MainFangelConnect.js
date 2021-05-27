import React from 'react';
import { useForm } from 'react-hook-form'
import Wrapper from './../general/Wrapper'
import { TitleStyled, ButtonStyled, OnlyDesktop, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { InputStyled, ErrorAlert } from './../../pages/signInAndUp/styles/sGlobalForm'
import { TextBody } from './../../themes/externalRecyclableStyles'

const MainFangelConnect = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
  }

  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Fangel Connect</TitleStyled>
        <TextBody bottom20>
          Fangel Connect te impulsa a construir el networking que necesitas.
        </TextBody>
        <OnlyDesktop>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SubtitleStyled>Ingresa un día y horario deseado</SubtitleStyled>
            <TextBody bottom8>Fecha</TextBody>
            <InputStyled type="date" min="2021-06-01" max="2021-06-31" value="2021-05-27" name="dateFangelConnect" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
            <ErrorAlert></ErrorAlert>
            <TextBody bottom8>Hora de inicio</TextBody>
            <InputStyled type="time"  name="startHourFangelConnect" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
            <ErrorAlert></ErrorAlert>
            <TextBody bottom8>Hora de término</TextBody>
            <InputStyled type="time" name="finishHourFangelConnect" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
            <ErrorAlert></ErrorAlert>
            <TextBody top34>
              Cuando una persona coincida con tu mismo horario, intereses y preferencias, agendaremos un espacio, luego te notificaremos al correo electrónico y en la sección de mensajes.
            </TextBody>
            <ButtonStyled primary type="submit">Iniciar Connect</ButtonStyled>
          </form>
        </OnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainFangelConnect;
