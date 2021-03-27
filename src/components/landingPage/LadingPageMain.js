import React from 'react';
import {Link} from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import Footer from './../general/Footer'
import { CoverPage, TitleStyledCover, TextStyledCover, ButtonsContainer,
         ButtonStyledCover, Container, ListContainer, Box,
         SubtitleStyled, TextStyled, ButtonStyled } from './styles/sLanding'

const LadingPage = () => {
  return (
    <>
      <CoverPage>
        <Wrapper>

          {/* Cover page */}
          <Container>
            <img src="https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLanding%2FvideoCaller.svg?alt=media&token=4ebbdffc-6bff-4733-81d6-5d02e0e62acb" />
            <TitleStyledCover standar>Crea comunidades únicas</TitleStyledCover>
            <TextStyledCover standar>
              ¿Te gusta el cine, la tecnología o hacer chacota? Conoce a personas con los mismos gustos y comparte ideas.
            </TextStyledCover>
            <ButtonsContainer>
              <Link to={"/register"}>
                <ButtonStyledCover primary standarP>Regístrate</ButtonStyledCover>
              </Link>
              <Link to={"/login"}>
                <ButtonStyledCover secondary standarS>Inicia sesión</ButtonStyledCover>
              </Link>
            </ButtonsContainer>
          </Container>
        </Wrapper>
      </CoverPage>

      {/* Body page */}
      <Wrapper>
        <SubtitleStyled>
          Cada comunidad es un espacio unico para compartir momentos
        </SubtitleStyled>
        <TextStyled>
          Las comunidades creadas son efímeras haciendo que no exista despues otra igual a ella. Cada comunidad se eliminará automaticamente despues de unas horas, haciendo que estas sean únicas. Las personas pueden compartir y disfrutar sobre un tema, conocer nuevas personas y establecer conexiones con ellas.
        </TextStyled>
        <ListContainer>
          <li>Crea discuciones y debates sobre un tema</li>
          <li>Organiza exposiciones o eventos</li>
          <li>Abre un espacio para conecer personas y compartir experiencias</li>
          <li>O simplemente haz una fiesta</li>
        </ListContainer>
        <Box></Box>
        <SubtitleStyled>
          ¿Como crear  comunidades?
        </SubtitleStyled>
        <TextStyled>
          Necesitas tener una invitacion del equipo de Fangel para crear comunidades. Una ves que crees una o varias comunidades  puedes invitar a cualquier persona.
        </TextStyled>
        <Box></Box>
        <ButtonStyled primary>¡Quiero una invitación!</ButtonStyled>
      </Wrapper>

      {/* Footer page */}
      <Footer />
    </>
  );
}

export default LadingPage;
