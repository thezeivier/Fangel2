import React from 'react';
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { SubtitleStyled, TextStyled, FormStyled, InputStyled,
         ButtonStyled, ContainerDesktop, LinkOtherPage } from './styles/sGlobalForm'
import { ExternalsWrapper } from '../../themes/externalRecyclableStyles'

const RecoverPassword = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(watch("example"))
  
  return (
    <>
      <Wrapper>
        <ExternalsWrapper>
          <ContainerDesktop>
            <SubtitleStyled>Recupera tu contraseña</SubtitleStyled>
            <TextStyled>Ingresa tu correo electrónico para generar una nueva contraseña</TextStyled>
            <FormStyled center onSubmit={handleSubmit(onSubmit)}>
              <InputStyled type="text" placeholder="Correo electrónico" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
              <ButtonStyled primary topSpace type="submit">Enviar</ButtonStyled>
            </FormStyled>
            <LinkOtherPage>
              <Link to={"/login"}>Regresar al Inicio de sesión</Link>
            </LinkOtherPage>
          </ContainerDesktop>
        </ExternalsWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default RecoverPassword