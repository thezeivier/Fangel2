import React, {useEffect} from 'react';
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Description, Contract } from './styles/sRegister'
import { SubtitleStyled, TextStyled, FormStyled, InputStyled,
         ButtonStyled, ContainerDesktop, ErrorAlert, LinkOtherPage } from './styles/sGlobalForm'
import { ExternalsWrapper, Form } from '../../themes/externalRecyclableStyles'
import { LinkRecoveryPasssword }from './styles/sLogin'

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(errors);
  // console.log(watch("example"))  
  return (
    <>
      <Wrapper>
        <ExternalsWrapper>
          <ContainerDesktop>
            <SubtitleStyled>¡Bienvenido de nuevo!</SubtitleStyled>
            <TextStyled>Inicia Sesión para unirte o crear comunidades</TextStyled>
            <Form center onSubmit={handleSubmit(onSubmit)}>
                <InputStyled type="text" placeholder="Correo electrónico" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                <InputStyled type="password" placeholder="Contraseña" name="Password" ref={register({required: true, minLength: 8, maxLength: 100})} />
              <LinkRecoveryPasssword>
                <Link to={"/recover-password"}>¿Olvidate tu contraseña?</Link>
              </LinkRecoveryPasssword>
              <ButtonStyled primary type="submit">Iniciar Sesión</ButtonStyled>
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
  );
}

export default Login