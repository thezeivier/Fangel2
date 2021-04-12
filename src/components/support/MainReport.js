import React, {useState, useContext} from 'react';
import {AppContext} from '../../App'
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import {useFirestore, useStorage} from 'reactfire'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { TitleStyled, TextStyled, SubtitleStyled, TextAreaStyled } from './../../themes/internalRecyclableStyles'
import { ButtonStyled, ButtonsContainer, OnlyDesktop } from './styles/sMainSupport'
import {CreateReport} from './algorithms/CreateReport'

const MainReport = () => {
  const firestore = useFirestore()
  const storage = useStorage()
  const contextFromApp = useContext(AppContext)
  const [imageRecovered, setImageRecovered] = useState()
  const [reportCreated, setReportCreated] = useState()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async data => {
    const result = await CreateReport(data, firestore, imageRecovered, storage, contextFromApp.userFromDB)
    setReportCreated(result)
  };

  const recoverReportImage = (e) =>{
    e.preventDefault()
    const reportImage = document.getElementById("reportImage")
    e = reportImage.click()
    reportImage.addEventListener('change', e => {
      setImageRecovered(e.target.files[0])
    })
    document.getElementById("reportImage").value = null
  }
  
  return (
    <main>
      <Wrapper>
        <OnlyDesktop>
          <TitleStyled bottom>Reporta un problema</TitleStyled>
          <TextStyled bottom20>
            Envíanos tus comentarios acerca de los problemas que encuentras en nuestra página. El equipo de fangel lo resolverá rápidamente.
          </TextStyled>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SubtitleStyled>Detalles</SubtitleStyled>
            <TextAreaStyled border4 type="text" placeholder="Descripcion" name="reportDescription" ref={register({required:{value: true, message:"Campo requerido*"}})}/>
            <ButtonsContainer>
              <ButtonStyled onClick={recoverReportImage} secondary left type="button">¿Adjuntar una imagen?</ButtonStyled>
              <input type="file" accept="image/*" style={{display: "none"}} id="reportImage"/>
              <ButtonStyled primary right type="submit">Enviar</ButtonStyled>
            </ButtonsContainer>
          </form>
          <TextStyled bottom20>
            Si necesitas ayuda de inmediato para solucionar un problema en concreto, ingresa al <Link to="/support">Centro de ayuda y asistencia</Link>.
          </TextStyled>
          <SubtitleStyled>Apoya con el proyecto</SubtitleStyled>
          <TextStyled bottom20>
            Envianos un email a <span>support@fangelweb.com</span> si tienes ideas para ayudar a mejorar fangel, o para ser parte del equipo de fangel.
          </TextStyled>
        </OnlyDesktop>
      </Wrapper>
      <ReturnPage/>
    </main>
  );
}

export default MainReport;
