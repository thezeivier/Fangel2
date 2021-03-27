import React from 'react';
import Wrapper from './../general/Wrapper'
import { CoverPage, TitleContainer, TextContainer, ButtonsContainer,
         ButtonContainer, Container, ListContainer } from './styles/sLanding'
import { PrimaryTitle, SecondaryTitle, TextBody, Button } from './../../themes/externalRecyclableStyles'

const LadingPage = () => {
  return (
    <>
      <CoverPage>
        <Wrapper>

          {/* Cover page */}
          <Container>
            <img src="https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLanding%2FvideoCaller.svg?alt=media&token=4ebbdffc-6bff-4733-81d6-5d02e0e62acb" />
            
            <TitleContainer>
              <PrimaryTitle standar>Crea comunidades únicas</PrimaryTitle>
            </TitleContainer>
            <TextContainer>
              <TextBody standar>
                ¿Te gusta el cine, la tecnología o hacer chacota? Conoce a personas con los mismos gustos y comparte ideas.
              </TextBody>
            </TextContainer>

            <ButtonsContainer>
              <ButtonContainer>
                <Button primary standarP>Regístrate</Button>
              </ButtonContainer>

              <ButtonContainer>
                <Button secondary standarS>Inicia sesión</Button>
              </ButtonContainer>
            </ButtonsContainer>
          </Container>
        </Wrapper>
      </CoverPage>

      {/* Body page */}
      <Wrapper>
        <SecondaryTitle>
          Cada comunidad es un espacio unico para compartir momentos
        </SecondaryTitle>
        <TextBody>
          Las comunidades creadas son efímeras haciendo que no exista despues otra igual a ella. Cada comunidad se eliminará automaticamente despues de unas horas, haciendo que estas sean únicas. Las personas pueden compartir y disfrutar sobre un tema, conocer nuevas personas y establecer conexiones con ellas.
        </TextBody>
        <ListContainer>
          <li>
            <p>Crea discuciones y debates sobre un tema</p>
            <p>Organiza exposiciones o eventos</p>
            <p>Abre un espacio para conecer personas y compartir experiencias</p>
            <p>O simplemente haz una fiesta</p>
          </li>
        </ListContainer>
      </Wrapper>
    </>
  );
}

export default LadingPage;
