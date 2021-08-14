import React, { useState, useContext, useEffect } from 'react';
import {AppContext} from '../../App'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import ButtonViewPassword from './ButtonViewPassword'
import {ReactComponent as GoogleIcon} from './icons/logo-google.svg'
import { Link, Redirect, useHistory, useLocation } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useStateIfMounted } from 'use-state-if-mounted'
import { RegisterWithEmail, codeValidator } from './algorithms/RegisterWithEmail'
import {firstNameFValidator, lastNameFValidator, emailFValidator, passwordFValidator, codeFValidator} from './objects/formValidators'
import 'firebase/auth'
import firebase from 'firebase/app'
import {useAuth, useFirestore, useFirebaseApp} from 'reactfire'
import { Description, Contract, InputPasswordContainer } from './styles/sRegister'
import { SubtitleStyled, TextStyled, SeparatorStyled, InputStyled,
        ButtonStyled, ContainerDesktop, ErrorAlert, LinkOtherPage } from './styles/sGlobalForm'
import { ExternalsWrapper, Form } from '../../themes/externalRecyclableStyles'
import MainSpinner from '../../components/spinner/MainSpinner'
import { SignInWithGoogle } from './algorithms/SignInWithGoogle'

const Register = () => {
  const contextFromApp = useContext(AppContext)
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()
  const firestore = useFirestore()
  // const firebase = useFirebaseApp()
  const { register, handleSubmit, errors } = useForm()
  const [dataRegister, setDataRegister] = useStateIfMounted(null)
  const [emailRegistered, setEmailRegistered] = useStateIfMounted(null)
  // const [codeBValidated, setCodeBValiated] = useStateIfMounted(null)
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState(false);
  const routeShareRoomPath = contextFromApp.routeProviderRoom.routeShareRoom

  useEffect(()=>{
    if(contextFromApp.authState){
      if(!dataRegister){
        history.push(routeShareRoomPath ? routeShareRoomPath : "/")//Cancel render if the user is logged in.
      }
    }
  },[auth, firestore, firebase])

  const onClickWithGoogle = async (auth, firebase, firestore, nextRoute, history) => {
    setLoading(true)
    SignInWithGoogle(auth, firebase, firestore, nextRoute, history)
    setLoading(false)
  }

  const onSubmit = async (data) => {
    setDataRegister(data)
    setLoading(true)
    // let codeValidated = await codeValidator(data.code, firestore)
    // codeValidated? setCodeBValiated(codeValidated.confirm): setCodeBValiated(codeValidated)
    // if(codeValidated.confirm){
      let noRepeatEmail = await RegisterWithEmail(data, auth,"admin" , firestore, firebase)//codeValidated.type en lugar de "admin"
      setEmailRegistered(noRepeatEmail)
    // }
    setLoading(false)
  }
  
  const ViewPassword = () => {
    const password = document.getElementById('password')
    if (password) {
      if(!view) {
        password.setAttribute('type', 'text')
        setView(true)
      } else {
        password.setAttribute('type', 'password')
        setView(false)
      }
    }
  }

  if(loading){
    return <MainSpinner/>
  }

  // console.log(emailRegistered)
  // console.log(codeBValidated)
  // console.log(location)

  return (
    <>
      {emailRegistered ?
      //&& codeBValidated
        <Redirect push to={{
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
                <TextStyled>A tener conexiones duraderas con nuevas personas</TextStyled>
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

                  <InputPasswordContainer>
                    <InputStyled
                      id="password"
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                      autocomplete="new-password"
                      ref={register(passwordFValidator)} 
                    />
                    <ButtonViewPassword viewPassword={ViewPassword} view={view} />
                  </InputPasswordContainer>
                  <ErrorAlert>
                    {errors.password? errors.password.message: ""}
                  </ErrorAlert>

                  {/* <InputStyled 
                    special
                    type="text" 
                    placeholder="Código de invitación" 
                    value={location? (location.state? location.state.code: null):null}
                    name="code" 
                    ref={register(codeFValidator)} 
                  />
                  <ErrorAlert>
                    {errors.code? errors.code.message: "" || codeBValidated === false? "Código inválido o expirado*":""}
                  </ErrorAlert> */}
 {/*                  <Description>
                    Usa el codigo que te proporcionó la persona que te invito a su comunidad
                  </Description> */}
                  
                  <Contract>
                    Al registrarte estas de acuerdo con los <Link to={"/terms-conditions"}>Términos y Condiciones</Link> y <Link to={"/politics-privacy"}>Políticas de privacidad.</Link>
                  </Contract>
                  <ButtonStyled primary type="submit">Registrarse</ButtonStyled>
                  <SeparatorStyled>o</SeparatorStyled>
                  <ButtonStyled solidWhite googleIcon type="button" id="google-auth" onClick={() => onClickWithGoogle(auth, firebase, firestore, contextFromApp.routeProviderRoom.routeShareRoom, history)}>
                    <span aria-labelledby="google-auth"></span>
                    Regístrate con Google
                  </ButtonStyled>
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