import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom'
import {useStorage, useFirestore} from 'reactfire'
import { useStateIfMounted } from 'use-state-if-mounted'
import { CardContainer, UserContainer, ContainerTextTop, TextCommunity,
         User, ImageContainer, DescriptionContainer, TextDescription,
         Truncate, ButtonStyled, TransparentContainer } from './styles/sCardCommunity'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import communityThumb from '../general/images/thumb_community_s1.svg'
//Import algorithms
import {ShowMore} from './algorithms/ShowMore'

const CardCommunity = ({communityData, communityProvider}) => {
  const storage = useStorage()
  const firestore = useFirestore()
  const [thumb, setThumb] = useStateIfMounted(false)//State for thumbnail.
  const [profileThumb, setProfileThumb] = useStateIfMounted(false)
  const cardRef = useRef()
  const textRef = useRef()
  const buttonRef = useRef()
  const history = useHistory()

  if(communityData === null){
    var communityData = {
      profilePhotoUrl: "https://scontent.fcja1-1.fna.fbcdn.net/v/t1.6435-9/122721049_106427804597222_8152376900470817394_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=KBqagB9dCakAX-5v5TD&_nc_ht=scontent.fcja1-1.fna&oh=0dbc09a36338a92c02ddca781897cae3&oe=612F0C84",
      roomName: "FangelTV",
      title: "FangelTV",
      name: "Fangel"
    }
  }

  useEffect(()=>{
    setProfileThumb(communityData.profilePhotoUrl? communityData.profilePhotoUrl: false)
    setThumb(communityData.communityPhotoUrl? communityData.communityPhotoUrl: false)
    return ()=>{
      cardRef.current = false;
      textRef.current = false;
      buttonRef.current = false;
    }
  }, [])

  const handleJoinToCommunity = () => {
    communityProvider.communityGlobalData && communityProvider.setCommunityGlobalData(false)
    history.push(`/room/${communityData.roomName}`)
    window.location.reload()
  }
  ShowMore(cardRef, textRef, buttonRef)
  /* CardCommunity v1.0 */
  return (
    <>
      <li>
        <CardContainer ref={cardRef}>
          <ContainerTextTop>
            <TextCommunity>Espacio creado por:</TextCommunity>
            <UserContainer>
              <Link to={`/u/${communityData.username}`}>
                {
                  profileThumb?
                  <img src={profileThumb} className="profile" alt="Imagen de perfil"/>:
                  <ProfileSVG />
                }
                <User as="h4">{communityData.name? communityData.name: communityData.username }</User>
              </Link>
            </UserContainer>
          </ContainerTextTop>
          <ImageContainer>
            <TransparentContainer />
            <img src={thumb? thumb: communityThumb} alt="Imagen de referencia de la comunidad" />
            <DescriptionContainer as="button" ref={buttonRef}>
              <h3>{communityData.title}</h3>
              <Truncate className="truncate">
                <TextDescription ref={textRef}>
                  {communityData.description}
                </TextDescription>
              </Truncate>
            </DescriptionContainer>
          </ImageContainer>
          <ButtonStyled secondary onClick={handleJoinToCommunity}>Entrar</ButtonStyled>
        </CardContainer>
      </li>
    </>
  );
}

export default CardCommunity;