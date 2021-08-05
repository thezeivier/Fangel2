import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useStateIfMounted } from 'use-state-if-mounted'
import { CardContainer, UserContainer, ContainerTextTop, TextCommunity,
         User, ImageContainer, DescriptionContainer, TextDescription,
         Truncate, ButtonStyled, TransparentContainer } from './styles/sCardCommunity'
import FangelTvGif from './images/fangeltv1.gif'
//Import algorithms
import {ShowMore} from './algorithms/ShowMore'

const CardFangelTv = () => {
    const cardRef = useRef()
    const textRef = useRef()
    const buttonRef = useRef()

    ShowMore(cardRef, textRef, buttonRef)
  
  return (
    <>
      <li>
        <CardContainer ref={cardRef}>
          <ContainerTextTop>
            <UserContainer>
              <Link to={`/#`}>
                <img src="https://scontent.fcja1-1.fna.fbcdn.net/v/t1.6435-9/122721049_106427804597222_8152376900470817394_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=KBqagB9dCakAX-5v5TD&_nc_ht=scontent.fcja1-1.fna&oh=0dbc09a36338a92c02ddca781897cae3&oe=612F0C84" className="profile" alt="Imagen FangelTv"/>
                <User as="h4">Fangel</User>
              </Link>
            </UserContainer>
          </ContainerTextTop>
          <ImageContainer>
            <TransparentContainer />
            <img src={FangelTvGif} alt="Imagen de referencia de FangelTv" className="imgFangelTv" />
            <DescriptionContainer as="button" ref={buttonRef}>
              <h3>Fangel TV</h3>
              <Truncate className="truncate">
                <TextDescription ref={textRef}>
                  Descripción
                </TextDescription>
              </Truncate>
            </DescriptionContainer>
          </ImageContainer>
          <ButtonStyled secondary>Entrar</ButtonStyled>
        </CardContainer>
      </li>
    </>
  );
}

export default CardFangelTv;
