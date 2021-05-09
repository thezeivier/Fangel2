import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import Footer from './../general/Footer'
import {useFirestore, useFirebaseApp} from  'reactfire'
import {createAdminCodes} from './algorithms/createAdminCodes'
import { CoverPage, TitleStyledCover, TextStyledCover, ButtonsContainer,
         ButtonStyledCover, Container, ListContainer, SubtitleStyled,
         TextStyled, ButtonStyled, DesktopGridRight, DesktopGridLeft,
         DescriptionContainer, FangelPromotionContainer, CodeContainer } from './styles/sLanding'

import criptoImage from './images/gifFangel.gif'
import yesImage from './images/yes.gif'

const LadingPage = () => {
  const firestore = useFirestore()
  const firebase = useFirebaseApp()
  const [codeAdmin, setCodeAdmin] = useState()
  const [disableButton, setDisableButton] = useState(false);

  const createCode = async () =>{
    setCodeAdmin(await createAdminCodes(firestore, firebase))
    setDisableButton(true)
  }



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
              <TitleStyledCover standar>Espacios sociales únicos</TitleStyledCover>
              <TextStyledCover standar>
                ¿Te gusta el cine, la tecnología o quizás la música? Conoce a personas con los mismos gustos y comparte ideas.
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
            <DescriptionContainer >
              <SubtitleStyled>
                Cada espacio social es único para compartir momentos
              </SubtitleStyled>
              <TextStyled>
                Los espacios creados son efímeras haciendo que no exista después otra igual a ella. Cada espacio social se eliminará automaticamente despues de unas horas, haciendo que estas sean únicas. Las personas pueden compartir y disfrutar sobre un tema, conocer nuevas personas y establecer conexiones con ellas.
              </TextStyled>
              <ListContainer>
                <li>Crea discuciones y debates sobre un tema</li>
                <li>Organiza exposiciones o eventos</li>
                <li>Abre un espacio para conecer personas y compartir experiencias</li>
                <li>O simplemente haz una fiesta</li>
              </ListContainer>
            </DescriptionContainer>
            <FangelPromotionContainer>
              <img src={criptoImage}/>
            </FangelPromotionContainer>
          </DesktopGridRight>
          <DesktopGridLeft>
            <div className="left">
              <SubtitleStyled>
                ¿Como crear espacios sociales?
              </SubtitleStyled>
              <TextStyled>
                Necesitas tener una invitación del equipo de Fangel para crear espacios sociales. Una vez que crees uno o varios espacios puedes invitar a cualquier persona.
              </TextStyled>
              {/* {
                disableButton ? 
                  <ButtonStyled primary desktop disabled disabledPrimary onClick={createCode}>¡Quiero una invitación!</ButtonStyled> : */}
                  <Link
                    to={
                      {
                        pathname: "/register",
                        state: { code: codeAdmin? codeAdmin: false }
                      }
                    }
                  >
                    <ButtonStyled primary desktop 
                      // onClick={createCode}
                    >¡Regístrate!</ButtonStyled>
                  </Link>
              {/* } */}
              {/* <CodeContainer desktop>
                {codeAdmin && <>
                  <p>Usa este código para <Link
                    to={
                      {
                        pathname: "/register",
                        state: { code: codeAdmin? codeAdmin: false }
                      }
                    }
                  >registrarte</Link></p>
                  <h3>{codeAdmin}</h3>
                </>}
              </CodeContainer> */}
            </div>
            <div>
              <FangelPromotionContainer>
                <img src={yesImage}/>
              </FangelPromotionContainer>
              <div className="right">
                {/* {
                  disableButton ?  */}
                    {/* <ButtonStyled primary mobile disabled disabledPrimary onClick={createCode}>¡Quiero una invitación!</ButtonStyled> : */}
                    <Link
                      to={
                        {
                          pathname: "/register",
                          state: { code: codeAdmin? codeAdmin: false }
                        }
                      }
                    >
                      <ButtonStyled primary mobile 
                      // onClick={createCode}
                      >¡Regístrate!</ButtonStyled>
                    </Link>
                {/* } */}
              </div>
              {/* <CodeContainer mobile>
                {codeAdmin && <>
                  <p>Usa este código para <Link
                    to={
                      {
                        pathname: "/register",
                        state: { code: codeAdmin? codeAdmin: false }
                      }
                    }
                  >registrarte</Link></p>
                  <h3>{codeAdmin}</h3>
                </>}
              </CodeContainer> */}
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
