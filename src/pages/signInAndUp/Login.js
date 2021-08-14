import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../../App'
import firebase from 'firebase/app'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import ButtonViewPassword from './ButtonViewPassword'
import ModalGeneral from './../../components/modal/ModalGeneral'
import ModalSelectProfile from './ModalSelectProfile'
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { SubtitleStyled, TextStyled, InputStyled, ButtonStyled, SeparatorStyled,
         ContainerDesktop, ErrorAlert, LinkOtherPage } from './styles/sGlobalForm'
import { InputPasswordContainer } from './styles/sRegister'
import { ExternalsWrapper, Form } from '../../themes/externalRecyclableStyles'
import { LinkRecoveryPasssword } from './styles/sLogin'
import {emailFValidator, passwordFValidator} from './objects/formValidators'
import {LoginWithEmail} from './algorithms/LoginWithEmail'
import {useAuth, useFirestore} from 'reactfire'

import { SignInWithGoogle } from './algorithms/SignInWithGoogle'

import { ReactComponent as ViewSVG } from './icons/view.svg'
import { ReactComponent as ViewOffSVG } from './icons/viewOff.svg'

const Login = () => {
  const contextFromApp = useContext(AppContext)
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()
  const firestore = useFirestore()
  const { register, handleSubmit, errors } = useForm()
  const [isLoginCorrect, setIsLoginCorrect] = useState(null)
  const routeShareRoomPath = contextFromApp.routeProviderRoom.routeShareRoom

  useEffect(() => {
    if(contextFromApp.authState){
      history.push(routeShareRoomPath ? routeShareRoomPath : "/")//Cancel render if the user is logged in.
    }

  }, [contextFromApp])
  
  const onSubmit = async data => {
    let confirmToLogin = await LoginWithEmail(data, auth)
    setIsLoginCorrect(confirmToLogin)
  }

  const [view, setView] = useState(false);
  const password = document.getElementById('password')
  
  const ViewPassword = () => {
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
  return (
    <>
    {isLoginCorrect?(
      isLoginCorrect.verified?
      <Redirect to={{
        pathname: routeShareRoomPath ? routeShareRoomPath : "/",
        state: isLoginCorrect
      }}/>:
      <Redirect to={{
        pathname: "/email-sended",
        state: { 
          email: isLoginCorrect.email,
          origin: "register"
        }
      }}/>
    ):
      <>
        <Wrapper>
          <ExternalsWrapper>
            <ContainerDesktop>
              <SubtitleStyled>¡Bienvenido de nuevo!</SubtitleStyled>
              <TextStyled>Inicia Sesión para crear relaciones efectivas y duraderas</TextStyled>
              <Form center onSubmit={handleSubmit(onSubmit)}>
                <InputStyled type="text" placeholder="Correo electrónico" name="email" ref={register(emailFValidator)} />
                <ErrorAlert>
                  {errors.email? "Correo inválido*":""}
                </ErrorAlert>

                <InputPasswordContainer>
                  <InputStyled id="password" type="password" placeholder="Contraseña" name="password" ref={register(passwordFValidator)} />
                  <ButtonViewPassword viewPassword={ViewPassword} view={view} />
                </InputPasswordContainer>
                <ErrorAlert>
                  {errors.password? "Correo incorrecta*":""}
                  {isLoginCorrect === false? "Contraseña incorrecta*":""}
                </ErrorAlert>
                                    
                <LinkRecoveryPasssword>
                  <Link to={"/recover-password"}>¿Olvidaste tu contraseña?</Link>
                </LinkRecoveryPasssword>
                <ButtonStyled primary type="submit">Iniciar sesión</ButtonStyled>
                <SeparatorStyled>o</SeparatorStyled>
                <ButtonStyled solidWhite googleIcon type="button" id="google-auth" onClick={() => SignInWithGoogle(auth, firebase, firestore)}>
                  <span aria-labelledby="google-auth"></span>
                  Ingresa con Google
                </ButtonStyled>
                <LinkOtherPage>
                  <p>¿No tienes una cuenta?</p>
                  <Link to={"/register"}>Regístrate</Link>
                </LinkOtherPage>
              </Form>
            </ContainerDesktop>
          </ExternalsWrapper>
{/*           <ModalGeneral>
            <ModalSelectProfile />
          </ModalGeneral> */}
        </Wrapper>
        <Footer />
      </>
    }
    </>
  );
}

export default Login