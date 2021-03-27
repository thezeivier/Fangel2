import React from 'react';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import {InputContainer, ButtonContainer} from './styles/sGlobalForm'

import {ExternalsWrapper, SecondaryTitle, TextBody, Form, Input, Button} from '../../themes/externalRecyclableStyles'

const RecoverPassword = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(watch("example"))
  
  return (
    <ExternalsWrapper externalPagePadding={'6em'}>
      <SecondaryTitle>Recupera tu contraseña</SecondaryTitle>
      <TextBody>Ingresa tu correo electrónico para generar una nueva contraseña</TextBody>
      <Form center onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="Correo electrónico" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
          <Button primary type="submit">Enviar</Button>
        <Link to={"/login"}>
          <p>Regresar al Inicio de sesión</p>
        </Link>
      </Form>
    </ExternalsWrapper>
  );
}

export default RecoverPassword