import React from 'react';
import { useForm } from 'react-hook-form';
import { Description, Contract } from './styles/sRegister'
import { SubtitleStyled, TextStyled, FormStyled, InputStyled,
         ButtonStyled, ContainerDesktop } from './styles/sGlobalForm'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'

import { ExternalsWrapper, Form } from '../../themes/externalRecyclableStyles'

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(watch("example"))
  
  return (
    <>
      <Wrapper>
        <ExternalsWrapper>
          <ContainerDesktop>
            <SubtitleStyled>Regístrate para empezar</SubtitleStyled>
            <TextStyled>A unirte o crear comunidades</TextStyled>
            <Form center onSubmit={handleSubmit(onSubmit)}>
              <InputStyled type="text" placeholder="Usuario" name="Username" ref={register({required: true, maxLength: 80})} />
              <InputStyled type="text" placeholder="Correo electrónico" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
              <InputStyled type="password" placeholder="Contraseña" name="Password" ref={register({required: true, minLength: 8, maxLength: 100})} />
              <InputStyled special type="text" placeholder="Código de invitación" name="Code" ref={register({required: true, minLength: 8, maxLength: 100})} />
              <Description>
                Usa el codigo que te proporcionó la persona que te invito a su comunidad
              </Description>
              <Contract>
                Al registrarte estas de acuerdo con los <a>Términos y Condiciones</a> y <a>Políticas de privacidad.</a>
              </Contract>
              <ButtonStyled primary type="submit">Registrarse</ButtonStyled>
            </Form>
          </ContainerDesktop>
        </ExternalsWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Register