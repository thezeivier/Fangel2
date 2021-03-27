import React from 'react';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import {InputContainer, ButtonContainer} from './styles/sGlobalForm'

import {ExternalsWrapper, SecondaryTitle, TextBody, Form, Input, Button} from '../../themes/externalRecyclableStyles'

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(watch("example"))
  
  return (
    <ExternalsWrapper externalPagePadding={'6em'}>
      <SecondaryTitle>¡Bienvenido de nuevo!</SecondaryTitle>
      <TextBody>Inicia Sesión para unirte o crear comunidades</TextBody>
      <Form center onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="Correo electrónico" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
          <Input type="password" placeholder="Contraseña" name="Password" ref={register({required: true, minLength: 8, maxLength: 100})} />
        <Link to={"/recover-password"}>
          <p>¿Olvidate tu contraseña?</p>
        </Link>
          <Button primary type="submit">Iniciar Sesión</Button>
        <Link to={"/register"}>
          <p>¿Aún no estás registrado?</p>
        </Link>
      </Form>
    </ExternalsWrapper>
  );
}

export default Login