import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom'
import {useStorage} from 'reactfire'
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
  const [thumb, setThumb] = useStateIfMounted()//State for thumbnail.
  const [profileThumb, setProfileThumb] = useStateIfMounted(false)
  const cardRef = useRef()
  const textRef = useRef()
  const buttonRef = useRef()
  const history = useHistory()

  useEffect(()=>{
    const gsReference = storage.refFromURL(`gs://${communityData.bucket}/${communityData.route}`)
    gsReference.getDownloadURL().then(url => {//Recover thumbnail from storage.
      setThumb(url)
    })
    if(communityData.profileRoute){
      const profileImageReference = storage.refFromURL(`gs://${communityData.bucket}/${communityData.profileRoute}`)
      profileImageReference.getDownloadURL().then(url => {//Recover thumbnail from storage.
        setProfileThumb(url)
      })
    }
    return ()=>{
      return ()=>{
        cardRef.current = false;
        textRef.current = false;
        buttonRef.current = false;
      }
    }
  }, [])

  const handleLeaveCommunity = () => {
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
              </Link>
              <User as="h4">{communityData.name? communityData.name: communityData.username }</User>
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
          <ButtonStyled secondary onClick={handleLeaveCommunity}>Entrar</ButtonStyled>
        </CardContainer>
      </li>
    </>
  );
}

export default CardCommunity;