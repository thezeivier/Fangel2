import React from 'react';
import { Link } from 'react-router-dom'
import { CardContainer, UserContainer, ContainerTextTop, TextCommunity,
         User, ImageContainer, DescriptionContainer, TextDescription,
         Truncate, ButtonStyled } from './styles/sCardCommunity'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import communityThumb from '../general/images/thumb_community_s1.svg'

const CardCommunity = ({communityData}) => {
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
          <img src={communityThumb} alt="Imagen de referencia de la comunidad" />
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
