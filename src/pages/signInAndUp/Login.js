import React, {useState, useContext} from 'react';
import {AppContext} from '../../App'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { SubtitleStyled, TextStyled, InputStyled, ButtonStyled,
         ContainerDesktop, ErrorAlert, LinkOtherPage } from './styles/sGlobalForm'
import { ExternalsWrapper, Form } from '../../themes/externalRecyclableStyles'
import { LinkRecoveryPasssword } from './styles/sLogin'
import {emailFValidator, passwordFValidator} from './objects/formValidators'
import {LoginWithEmail} from './algorithms/LoginWithEmail'
import {useAuth} from 'reactfire'

const Login = () => {
  const contextFromApp = useContext(AppContext)
  const history = useHistory()
  const auth = useAuth()
  const { register, handleSubmit, errors } = useForm()
  const [isLoginCorrect, setIsLoginCorrect] = useState(null)

  if(contextFromApp.authState){
    history.push("/")//Cancel render if the user is logged in.
  }

  const onSubmit = async data => {
    let confirmToLogin = await LoginWithEmail(data, auth)
    setIsLoginCorrect(confirmToLogin)
  }

  return (
    <>
    {isLoginCorrect?(
      isLoginCorrect.verified?
      <Redirect to={{
        pathname: "/",
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
              <TextStyled>Inicia Sesión para unirte o crear comunidades</TextStyled>
              <Form center onSubmit={handleSubmit(onSubmit)}>
                  <InputStyled type="text" placeholder="Correo electrónico" name="email" ref={register(emailFValidator)} />
                  <ErrorAlert>{errors.email? "Correo inválido*":""}</ErrorAlert>
                  <InputStyled type="password" placeholder="Contraseña" name="password" ref={register(passwordFValidator)} />
                  <ErrorAlert>{errors.Password? "Correo incorrecta*":""}</ErrorAlert>
                <LinkRecoveryPasssword>
                  <Link to={"/recover-password"}>¿Olvidate tu contraseña?</Link>
                </LinkRecoveryPasssword>
                <ButtonStyled primary type="submit">Iniciar sesión</ButtonStyled>
                <LinkOtherPage>
                  <p>¿No tienes una cuenta?</p>
                  <Link to={"/register"}>Regístrate</Link>
                </LinkOtherPage>
              </Form>
            </ContainerDesktop>
          </ExternalsWrapper>
        </Wrapper>
        <Footer />
      </>
    }
    </>
  );
}

export default Login