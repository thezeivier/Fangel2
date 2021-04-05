import React, { useRef } from 'react';
import useOnScreen from './../../hook/use-on-screen'
import { Link } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import Footer from './../general/Footer'
import { CoverPage, TitleStyledCover, TextStyledCover, ButtonsContainer,
         ButtonStyledCover, Container, ListContainer, Box,
         SubtitleStyled, TextStyled, ButtonStyled, DesktopGridRight,
         DesktopGridLeft, DescriptionContainer } from './styles/sLanding'

const LadingPage = () => {
  const ref = useRef()

  const onScreen = useOnScreen(ref, "300px")
  const onScreenDesktop = useOnScreen(ref, "-150px")

  return (
    <>
      <main>
        <CoverPage>
          <Wrapper>

            {/* Cover page */}
            <Container>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fangelv2-300300.appspot.com/o/landingPage%2Fundraw_video_call_kxyp.svg?alt=media&token=3588a07e-b292-4822-8e3c-b22a93fd3d7d"
                alt="Comundidades en fangel"
              />
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
          <DesktopGridRight>
            <DescriptionContainer ref={ref} onScreen={onScreen} onScreenDesktop={onScreenDesktop} >
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
            </DescriptionContainer>
            <Box ref={ref} onScreen={onScreen} onScreenDesktop={onScreenDesktop} translateRight></Box>
          </DesktopGridRight>
          <DesktopGridLeft>
            <div className="left">
              <SubtitleStyled>
                ¿Como crear  comunidades?
              </SubtitleStyled>
              <TextStyled>
                Necesitas tener una invitacion del equipo de Fangel para crear comunidades. Una ves que crees una o varias comunidades  puedes invitar a cualquier persona.
              </TextStyled>
              <ButtonStyled primary desktop>¡Quiero una invitación!</ButtonStyled>
            </div>
            <div className="right">
              <Box></Box>
              <ButtonStyled primary mobile>¡Quiero una invitación!</ButtonStyled>
            </div>
          </DesktopGridLeft>
        </Wrapper>
      </main>

      {/* Footer page */}
      <Footer />
    </>
  );
}

export default LadingPage;
