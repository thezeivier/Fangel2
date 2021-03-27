import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import Wrapper from '../../components/general/Wrapper'
import {ExternalsWrapper, SecondaryTitle, TextBody, Form, Button} from '../../themes/externalRecyclableStyles'

const Description = styled.h6`
  font-family: ${props => props.theme.secondarFont};
  color: ${props => props.theme.smallText};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 11px;
  line-height: 17px;

  @media(min-width: 1100px){
    font-size: 12px;
    line-height: 17px;
  }
`

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(watch("example"))
  
  return (
    <Wrapper padding={"5em 3em"}>
      <ExternalsWrapper>
        <SecondaryTitle>Regístrate para empezar</SecondaryTitle>
        <TextBody>A unirte o crear comunidades</TextBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Usuario" name="Username" ref={register({required: true, maxLength: 80})} />
          <input type="text" placeholder="Correo electrónico" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
          <input type="password" placeholder="Contraseña" name="Password" ref={register({required: true, minLength: 8, maxLength: 100})} />
          <input type="text" placeholder="Código" name="Code" ref={register({required: true, minLength: 8, maxLength: 100})} />
          <Description>Usa el codigo que te proporcionó la persona que te invito a su comunidad</Description>
          <p>Al registrate estas de acuerdo con los <span>Términos y Condiciones</span> y <span>Políticas de privacidad.</span></p>
          <input type="submit" />
        </Form>
      </ExternalsWrapper>
    </Wrapper>
  );
}

export default Register