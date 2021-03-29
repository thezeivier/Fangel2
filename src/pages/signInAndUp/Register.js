import React, { useState } from 'react';
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { Link, Redirect } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { RegisterWithEmail } from './algorithms/RegisterWithEmail'
import 'firebase/auth'
import {
  AuthCheck,
  StorageImage,
  useFirestoreDocData,
  useUser,
  useAuth,
  useFirestore
} from 'reactfire';
import { Description, Contract } from './styles/sRegister'
import { SubtitleStyled, TextStyled, FormStyled, InputStyled,
  ButtonStyled, ContainerDesktop, ErrorAlert, LinkOtherPage } from './styles/sGlobalForm'
import { ExternalsWrapper, Form } from '../../themes/externalRecyclableStyles'
const Register = () => {
  const auth = useAuth()
  const firestore = useFirestore()
  const [registerComplete, setRegisterComplete] = useState(null)
  const [dataRegister, setDataRegister] = useState()
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    let confirm = await RegisterWithEmail(data, auth)
    if(confirm){
      setDataRegister(data)
    }
    setRegisterComplete(confirm)
  }

  return (
    <>
      {registerComplete === true?
        <Redirect to={{
          pathname: "/email-sended",
          state: { 
            email: dataRegister.email,
            origin: "register"
          }
        }}/>:
        <Wrapper>
          <ExternalsWrapper>
            <ContainerDesktop>
              <SubtitleStyled>Regístrate para empezar</SubtitleStyled>
              <TextStyled>A unirte o crear comunidades</TextStyled>
              <ErrorAlert>
                  {registerComplete == false? "Ya existe una cuenta con este correo*": ""}
              </ErrorAlert>
              <Form center onSubmit={handleSubmit(onSubmit)}>
                <InputStyled 
                  type="text"
                  placeholder="Usuario"
                  name="username"
                  ref={
                    register({
                      required: true,
                      maxLength: {
                        value: 30,
                        message: "El usuario debe ser menor a 30 caracteres*",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/,
                        message: "Usuario no válido o demasiado corto*"
                      }
                    })
                  } 
                />
                <ErrorAlert>
                  {errors.username? errors.username.message: ""}
                </ErrorAlert>

                <InputStyled 
                  type="text"
                  placeholder="Correo electrónico"
                  name="email"
                  ref={
                    register({
                      required: true,
                      max: 45,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,45}$/i,
                        message: "Correo electrónico inválido*"
                      }
                    })
                  } 
                />
                <ErrorAlert>
                  {errors.email? errors.email.message: ""} 
                </ErrorAlert>

                <InputStyled 
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  autocomplete="new-password"
                  ref={
                    register({
                      required: true,
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Tu contraseña es insegura*"
                      }
                    })
                  } 
                />
                <ErrorAlert>
                  {errors.password? errors.password.message: ""}
                </ErrorAlert>

                <InputStyled 
                  special
                  type="text" 
                  placeholder="Código de invitación" 
                  name="code" 
                  ref={
                    register({
                      required: true,
                      pattern: {
                        value: /^(admin)?[A-Za-z\d]{12}$/i,
                        message: "Rectifica tu código de invitación*"
                      }
                    })
                  } 
                />
                <ErrorAlert>
                  {errors.code? errors.code.message: ""}
                </ErrorAlert>

                <Description>
                  Usa el codigo que te proporcionó la persona que te invito a su comunidad
                </Description>
                <Contract>
                  Al registrarte estas de acuerdo con los <a>Términos y Condiciones</a> y <a>Políticas de privacidad.</a>
                </Contract>
                <ButtonStyled primary type="submit">Registrarse</ButtonStyled>
              </Form>
            </ContainerDesktop>
            <LinkOtherPage>
              <p>¿Ya tienes una cuenta?</p>
              <Link to={"/login"}>Inicia sesión</Link>
            </LinkOtherPage>
          </ExternalsWrapper>
        </Wrapper>
      }
        <Footer />
    </>
  );
}

export default Register