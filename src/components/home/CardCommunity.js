import React from 'react';
import { Link } from 'react-router-dom'
import { CardContainer, UserContainer, ContainerTextTop, TextCommunity,
         User, ImageContainer, DescriptionContainer, TextDescription,
         Truncate, ButtonStyled } from './styles/sCardCommunity'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'

const CardCommunity = () => {
  return (
    <li>
      <CardContainer>
        <ContainerTextTop>
          <TextCommunity>Comunidad creada por por:</TextCommunity>
          <UserContainer>
            <Link to="/profile">
              <ProfileSVG />
            </Link>
            <User as="h4">Useryang</User>
          </UserContainer>
        </ContainerTextTop>
        <ImageContainer>
          <img src="https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FSvgs%2Fnature.jpg?alt=media&token=8a477dec-0352-40d1-963e-69be50a13083" />
          <DescriptionContainer as="button" >
            <h3>Lorem ipsum</h3>
            <Truncate className="truncate">
              <TextDescription className="textCardCommunity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </TextDescription>
            </Truncate>
          </DescriptionContainer>
        </ImageContainer>
        <ButtonStyled secondary>Entrar</ButtonStyled>
      </CardContainer>
    </li>
  );
}

export default CardCommunity;
