import React, {useState, useEffect} from 'react'
import {Link, useLocation, Redirect} from 'react-router-dom'
import { SubtitleStyled, TextStyled, FormStyled, InputStyled,
        ButtonStyled, ContainerDesktop, ErrorAlert } from './styles/sGlobalForm'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'

import { ExternalsWrapper} from '../../themes/externalRecyclableStyles'


const EmailSended = () => {
  const location = useLocation()
  const [selectedText, setSelectedText] = useState({
    title:"",
    informationText: ""
  })

  useEffect(()=>{
    if(location.state){
      switch(location.state.origin){
        case "register":
          setSelectedText({
            title: 'Confirma tu correo electrónico',
            informationText: 'Haz clic en el enlace que aparece en el correo para poder iniciar sesión.'
          })
          break
        case "passwordRecover":
          setSelectedText({
            title: 'Recupera tu contraseña',
            informationText: 'Haz clic en el enlace que aparece en el correo para restablecer tu contraseña.'
          })
          break
        default:
          setSelectedText(null)
      }
    }else{
      setSelectedText(null)
    }
  },[location])
  
  return(
    !location.state?
      <Redirect to="/404"/>:
    (!selectedText.title?
      <>"Cargando"</>:
      <Wrapper>
        <ExternalsWrapper>
          <SubtitleStyled>{selectedText.title}</SubtitleStyled>
          <TextStyled>Acabamos de enviar un correo eléctronico a:</TextStyled>
          <SubtitleStyled>{location.state.email}</SubtitleStyled>
          <TextStyled>{selectedText.informationText}</TextStyled>
          <Link to="/login">
            <p>Regresar al Inicio de sesión</p>
          </Link>
        </ExternalsWrapper>
        <Footer/>
      </Wrapper>
    )
  )
}

export default EmailSended