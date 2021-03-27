import React from 'react';
import { useForm } from 'react-hook-form';
import {Description} from './styles/sRegister'
import {InputContainer, ButtonContainer} from './styles/sGlobalForm'

import {ExternalsWrapper, SecondaryTitle, TextBody, Form, Input, Button} from '../../themes/externalRecyclableStyles'

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(watch("example"))
  
  return (
    <ExternalsWrapper externalPagePadding={'6em'}>
      <SecondaryTitle>Regístrate para empezar</SecondaryTitle>
      <TextBody>A unirte o crear comunidades</TextBody>
      <Form center onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input type="text" placeholder="Usuario" name="Username" ref={register({required: true, maxLength: 80})} />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Correo electrónico" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Contraseña" name="Password" ref={register({required: true, minLength: 8, maxLength: 100})} />
        </InputContainer>
        <InputContainer>
          <Input special type="text" placeholder="Código de invitación" name="Code" ref={register({required: true, minLength: 8, maxLength: 100})} />
        </InputContainer>
          <Description>Usa el codigo que te proporcionó la persona que te invito a su comunidad</Description>
          <p>Al registrate estas de acuerdo con los <span>Términos y Condiciones</span> y <span>Políticas de privacidad.</span></p>
        <ButtonContainer>
          <Button primary type="submit">Registrarse</Button> 
        </ButtonContainer>
      </Form>
    </ExternalsWrapper>
  );
}

export default Register