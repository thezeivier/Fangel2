import React from 'react';
import Wrapper from './../general/Wrapper'
import { Link } from 'react-router-dom'
import { ThanksContainer, TitleStyled, TextBodyStyled } from './styles/sMainThanksReport'
import { ReactComponent as ThankYouSVG } from './images/thankYou.svg'

const MainThanksReport = () => {
  return (
    <main>
      <Wrapper>
        <ThanksContainer>
          <ThankYouSVG />
          <TitleStyled as="h3">
            ¡Gracias por tu reporte!
          </TitleStyled>
          <TextBodyStyled>
            Agradecemos que te hayas tomado el tiempo de enviar tus comentarios para ayudarnos a mejorar nuestro producto
          </TextBodyStyled>
          <Link to="/" >Ir al Inicio</Link>
        </ThanksContainer>
      </Wrapper>
    </main>
  );
}

export default MainThanksReport;
