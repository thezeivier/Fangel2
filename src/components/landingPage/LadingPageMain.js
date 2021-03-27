import React from 'react';
import Wrapper from './../general/Wrapper'
import PrimaryTitle from './../general/PrimaryTitle'
import TextBody from './../general/TextBody'
import Button from './../general/Button'
import { CoverPage, TitleContainer,TextContainer, ButtonsContainer,
         ButtonContainer, Container } from './styles/sLanding'

const LadingPage = () => {
  return (
    <CoverPage>
      <Wrapper>
        <Container>
          <img src="https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLanding%2FvideoCaller.svg?alt=media&token=4ebbdffc-6bff-4733-81d6-5d02e0e62acb" />
          
          <TitleContainer>
            <PrimaryTitle text="Crea comunidades únicas" align="center" />
          </TitleContainer>
          <TextContainer>
            <TextBody>
              ¿Te gusta el cine, la tecnología o hacer chacota? Conoce a personas con los mismos gustos y comparte ideas.
            </TextBody>
          </TextContainer>

          <ButtonsContainer>
            <ButtonContainer>
              <Button text="Regístrate" style={"primary"}/>
            </ButtonContainer>

            <ButtonContainer>
              <Button text="Inicia sesión" style={"secondary"}/>
            </ButtonContainer>
          </ButtonsContainer>
        </Container>
      </Wrapper>
    </CoverPage>
  );
}

export default LadingPage;
