import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom'
import {AppContext} from '../../App'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from 'reactfire'
import { useForm } from 'react-hook-form';
import { SubtitleStyled, TextStyled, FormStyled, InputStyled,
         ButtonStyled, ContainerDesktop, LinkOtherPage, ErrorAlert } from './styles/sGlobalForm'
import { ExternalsWrapper } from '../../themes/externalRecyclableStyles'
//Import algorithms
import {RecoverPasswordWithEmail} from './algorithms/RecoverPasswordWithEmail'
//Import objects
import {emailFValidator} from './objects/formValidators'

const RecoverPassword = () => {
  const contextFromApp = useContext(AppContext)
  const [sendEmail, setSendEmail] = useState()
  const auth = useAuth()
  const history = useHistory()
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async data => {
    let result = await RecoverPasswordWithEmail(auth, data.email)
    setSendEmail(result)
  };

  if(contextFromApp.authState){
    history.push("/")//Cancel render if the user is logged in.
  }
  
  return (
    <>
    {
      sendEmail?
      <Redirect to={{
        pathname: "/email-sended",
        state: { 
          email: sendEmail,
          origin: "passwordRecover"
        }
      }}/>:
      <Wrapper>
        <ExternalsWrapper>
          <ContainerDesktop>
            <SubtitleStyled>Recupera tu contraseña</SubtitleStyled>
            <TextStyled>Ingresa tu correo electrónico para generar una nueva contraseña</TextStyled>
            <FormStyled center onSubmit={handleSubmit(onSubmit)}>
              <InputStyled type="text" placeholder="Correo electrónico" name="email" ref={register(emailFValidator)} />
              <ErrorAlert>
                {errors.email? errors.email.message: ""}
                {sendEmail === false ? "Email incorrecto o no registrado*": ""}
              </ErrorAlert>
              <ButtonStyled primary topSpace type="submit">Enviar</ButtonStyled>
            </FormStyled>
            <LinkOtherPage>
              <Link to={"/login"}>Regresar al Inicio de sesión</Link>
            </LinkOtherPage>
          </ContainerDesktop>
        </ExternalsWrapper>
      </Wrapper>
    }
    <Footer />
    </>
  );
}

export default RecoverPassword