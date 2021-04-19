import React, { useState, useContext } from 'react';
import {AppContext} from '../../App'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { Link, Redirect, useHistory } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { RegisterWithEmail, codeValidator } from './algorithms/RegisterWithEmail'
import {firstNameFValidator, lastNameFValidator, emailFValidator, passwordFValidator, codeFValidator} from './objects/formValidators'
import 'firebase/auth'
import {useAuth, useFirestore, useFirebaseApp} from 'reactfire'
import { Description, Contract } from './styles/sRegister'
import { SubtitleStyled, TextStyled, InputStyled,
  ButtonStyled, ContainerDesktop, ErrorAlert, LinkOtherPage } from './styles/sGlobalForm'
import { ExternalsWrapper, Form } from '../../themes/externalRecyclableStyles'

const Register = () => {
  const contextFromApp = useContext(AppContext)
  const history = useHistory()
  const auth = useAuth()
  const firestore = useFirestore()
  const firebase = useFirebaseApp()
  const { register, handleSubmit, errors } = useForm()
  const [emailRegistered, setEmailRegistered] = useState(null)
  const [codeBValidated, setCodeBValiated] = useState(null)
  const [dataRegister, setDataRegister] = useState(null)

  if(contextFromApp.authState){
    if(!dataRegister){
      history.push("/")//Cancel render if the user is logged in.
    }
  }

  const onSubmit = async data => {
    setDataRegister(data)
    let codeValidated = await codeValidator(data.code, firestore)
    if(codeValidated.confirm){
      var noRepeatEmail = await RegisterWithEmail(data, auth, codeValidated.type, firestore, firebase)
    }
    setEmailRegistered(noRepeatEmail)
    codeValidated? setCodeBValiated(codeValidated.confirm): setCodeBValiated(codeValidated)
  }

  return (
    <>
      {emailRegistered && codeBValidated ?
        <Redirect to={{
          pathname: "/email-sended",
          state: { 
            email: dataRegister.email,
            origin: "register"
          }
        }}/>:
        <>
          <Wrapper>
            <ExternalsWrapper>
              <ContainerDesktop>
                <SubtitleStyled>Regístrate para empezar</SubtitleStyled>
                <TextStyled>A unirte o crear comunidades</TextStyled>
                <ErrorAlert>
                  {emailRegistered === false? "Ya existe una cuenta con este correo*": ""}
                </ErrorAlert>
                <Form center onSubmit={handleSubmit(onSubmit)}>
                  <InputStyled 
                    type="text"
                    placeholder="Nombres"
                    name="firstName"
                    ref={register(firstNameFValidator)}
                  />
                  <ErrorAlert>
                    {errors.firstName? errors.firstName.message: ""}
                  </ErrorAlert>
                  
                  <InputStyled 
                    type="text"
                    placeholder="Apellidos (opcional)"
                    name="lastName"
                    ref={register(lastNameFValidator)}
                  />
                  <ErrorAlert>
                    {errors.lastName? errors.lastName.message: ""}
                  </ErrorAlert>

                  <InputStyled 
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    ref={register(emailFValidator)} 
                  />
                  <ErrorAlert>
                    {errors.email? errors.email.message: ""} 
                  </ErrorAlert>

                  <InputStyled 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    autocomplete="new-password"
                    ref={register(passwordFValidator)} 
                  />
                  <ErrorAlert>
                    {errors.password? errors.password.message: ""}
                  </ErrorAlert>

                  <InputStyled 
                    special
                    type="text" 
                    placeholder="Código de invitación" 
                    name="code" 
                    ref={register(codeFValidator)} 
                  />
                  <ErrorAlert>
                    {errors.code? errors.code.message: "" || codeBValidated === false? "Código inválido o expirado*":""}
                  </ErrorAlert>

                  <Description>
                    Usa el codigo que te proporcionó la persona que te invito a su comunidad
                  </Description>
                  <Contract>
                    Al registrarte estas de acuerdo con los <Link to={"/terms-conditions"}>Términos y Condiciones</Link> y <Link to={"/politics-privacy"}>Políticas de privacidad.</Link>
                  </Contract>
                  <ButtonStyled primary type="submit">Registrarse</ButtonStyled>
                </Form>
              </ContainerDesktop>
              <LinkOtherPage>
                <p>¿Ya tienes una cuenta?</p>
                <Link to={"/login"}>Inicia sesión</Link>
              </LinkOtherPage>
            </ExternalsWrapper>
          </Wrapper>
          <Footer />
        </>
      }
    </>
  );
}

export default Register