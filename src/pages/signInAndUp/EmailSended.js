import React, { useState, useEffect } from 'react'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { Link, useLocation, Redirect } from 'react-router-dom'
import { SubtitleStyled, TextStyled, LinkOtherPage } from './styles/sGlobalForm'
import { Email } from './styles/sEmailSended'
import { ExternalsWrapper } from '../../themes/externalRecyclableStyles'

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
            informationText: 'Haz clic en el enlace que aparece en el correo para poder iniciar sesión. Si no encuentras el correo, puedes buscarlo en correos no deseados.'
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
          <Email>{location.state.email}</Email>
          <TextStyled>{selectedText.informationText}</TextStyled>
          <LinkOtherPage onClick={() => window.location.reload()}>
            <Link to={"/login"}>Regresar al Inicio de sesión</Link>
          </LinkOtherPage>
        </ExternalsWrapper>
        <Footer/>
      </Wrapper>
    )
  )
}

export default EmailSended