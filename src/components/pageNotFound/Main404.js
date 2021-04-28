import React from 'react';
import { Link } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import { SVGContainer, PrimaryTitleStyled, TextBodyStyled, ButtonStyled,
         SmallTextStyled, DescriptionErrorContainer, GirdOnlyDesktop } from './styles/sMain404'
import { ReactComponent as PageNotFoundSVG } from './pageNotFound.svg'

const Main404 = () => {
  return (
    <main>
      <Wrapper height="100%">
        <GirdOnlyDesktop>
          <SVGContainer>
            <PageNotFoundSVG />
          </SVGContainer>
          <DescriptionErrorContainer>
            <PrimaryTitleStyled as="h3">Lo sentimos. Esta página se perdió</PrimaryTitleStyled>
            <TextBodyStyled>Si quisiste entrar a un Espacio social, es posible que este ya no exista.</TextBodyStyled>
            <TextBodyStyled>
              Si es otro caso, por favor informa este problema en <Link to="/report">Reportar un problema</Link>. Lo solucionaremos rápidamente.
            </TextBodyStyled>
            <div>
              <Link to="/">
                <ButtonStyled secondary onClick={()=>{}}>Regresar al inicio</ButtonStyled>          
              </Link>
              <SmallTextStyled as={Link} to="/support">Ir al Centro de soporte y ayuda</SmallTextStyled>
            </div>
          </DescriptionErrorContainer>
        </GirdOnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default Main404;
