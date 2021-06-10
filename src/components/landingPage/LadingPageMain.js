import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import Footer from './../general/Footer'
import CardProductFangel from './CardProductFangel'
import {useFirestore, useFirebaseApp} from  'reactfire'
import {createAdminCodes} from './algorithms/createAdminCodes'
import { CoverPage, TitleStyledCover, TextStyledCover, ButtonsContainer,
         ButtonStyledCover, Container, SubtitleStyled, TextStyled,
         ButtonStyled, DesktopGridRight, DesktopGridLeft, SectionContainer,
         FangelPromotionContainer, CodeContainer, ListProductsContainer, VideoContainer } from './styles/sLanding'
import { ReactComponent as FangelConnectSVG } from './../home/icons/fangelConnect.svg'
import { ReactComponent as SpacesSVG } from './../home/icons/spaces.svg'
import { ReactComponent as LandingPageSVG } from './images/onlineMonochromatic.svg'

import VideoFangelPromo from './images/videoFangelPromo_2.mp4'
import VideoDiscover from './images/videoDiscover.mp4'
import SectionOneCreateConnexions from './images/sectionOne-createConnexions.jpg'

const LadingPage = () => {
  const firestore = useFirestore()
  const firebase = useFirebaseApp()
  const [codeAdmin, setCodeAdmin] = useState()
  const [disableButton, setDisableButton] = useState(false);

  const createCode = async () =>{
    setCodeAdmin(await createAdminCodes(firestore, firebase))
    setDisableButton(true)
  }

  const productsFangel = [
    {
      id: 1,
      svg: <FangelConnectSVG className="fangelConnectLanding" />,
      title: <h3 className="fangelConnectLanding">Fangel Connect</h3>,
      description: 'Conversaciones uno a uno. Descubre a personas con los mismos intereses y preferencias.',
    }, {
      id: 2,
      svg: <SpacesSVG  className="SpaceLanding" />,
      title: <h3 className="SpaceLanding">Espacios sociales</h3>,
      description: 'Abre un espacio y conversa sobre cualquier tema con las personas de la comunidad.',
    }
  ]



  return (
    <>
      <main>
        <CoverPage>
          <Wrapper>

            {/* Cover page */}
            <Container>
              <LandingPageSVG />
              <TitleStyledCover standar>Conexiones efectivas y duraderas </TitleStyledCover>
              <TextStyledCover standar>
                Ampía tus fronteras culturales y profesionales construyendo relaciones duraderas.
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
            <SectionContainer>
              <SubtitleStyled>
                Crea conexiones y cultiva relaciones
              </SubtitleStyled>
              <TextStyled>
                Fangel es un lugar donde podrás ampliar tus fronteras culturales y profesionales, construyendo relaciones efectivas y duraderas con amigos esperando a ser descubiertos.
              </TextStyled>
              <TextStyled secondParagraph>
                Talvez sea un nuevo socio de negocios, tu próximo compañero de trabajo, o tu nuevo ángel de la guarda que te ayudará en un momento crítico.
              </TextStyled>
            </SectionContainer>
            <FangelPromotionContainer>
              <img src={SectionOneCreateConnexions} alt="Crea conexiones" />
            </FangelPromotionContainer>
          </DesktopGridRight>
          <SectionContainer>
            <SubtitleStyled>
              Encuentra personas increibles
            </SubtitleStyled>
            <TextStyled>
              ¿Te gusta el cine, la tecnología o el mundo empresarial? Conoce a personas en base a sus gustos, intereses y preferencias.
            </TextStyled>
            <TextStyled secondParagraph>
              Talvez tengas miedo a hablar con personas desconocidas y está bien, todos lo tenemos. Por esa razón estamos trabajando para que tengas un espacio amigable, de confianza y con apoyo.
            </TextStyled>
          </SectionContainer>
          <SectionContainer>
            <SubtitleStyled>
              Formas de descubrir personas en fangel
            </SubtitleStyled>
            <ListProductsContainer>
              {
                productsFangel.map((product) => <CardProductFangel key={product.id} {...product} />)
              }
            </ListProductsContainer>
          </SectionContainer>
        </Wrapper>
        <DesktopGridLeft>
          <Wrapper width="auto">
            <SectionContainer margin="0">
              <SubtitleStyled>
                Amplía tus fronteras
              </SubtitleStyled>
              <TextStyled>
                Amplía tu red de amigos fuera de tu ciudad o país. Descubrirás un mundo diferente al de tu entorno laboral y cultural.
              </TextStyled>
              <TextStyled secondParagraph>
                Piensa en que talvez la próxima persona con la que establescas una conexión sea tu nuevo socio, compañero de trabajo o mejor amigo(a).
              </TextStyled>
            </SectionContainer>
          </Wrapper>
          <VideoContainer>
            <video className="videoWide" src={VideoFangelPromo} autoplay="1" loop="1" muted="1" playsinline="1" frameborder="0" webkitallowfullscreen mozallowfullscreen preload="auto" draggable="true"></video>
          </VideoContainer>
        </DesktopGridLeft>
        <Wrapper>
          <SectionContainer>
            <SubtitleStyled>
              ¡Qué esperas!
            </SubtitleStyled>
            <TextStyled>
              La vida empieza con un hola.
            </TextStyled>
          </SectionContainer>
        </Wrapper>
        <VideoContainer>
          <div className="backgroundVideo"></div>
          <video className="videoDiscover" src={VideoDiscover} autoplay="1" loop="1" muted="1" playsinline="1" frameborder="0" webkitallowfullscreen mozallowfullscreen preload="auto" draggable="true"></video>
          <h3>Descubre fangel</h3>
        </VideoContainer>
        <Wrapper>
          <Link to={"/register"}>
            <ButtonStyled primary>Regístrate</ButtonStyled>
          </Link>
        </Wrapper>
      </main>

      {/* Footer page */}
      <Footer />
    </>
  );
}

export default LadingPage;
