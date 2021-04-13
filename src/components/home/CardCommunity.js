import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom'
import {useStorage} from 'reactfire'
import { CardContainer, UserContainer, ContainerTextTop, TextCommunity,
         User, ImageContainer, DescriptionContainer, TextDescription,
         Truncate, ButtonStyled } from './styles/sCardCommunity'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import communityThumb from '../general/images/thumb_community_s1.svg'

const CardCommunity = ({communityData}) => {
  const storage = useStorage()
  const [thumb, setThumb] = useState()//State for thumbnail.
  const [enterCommunity, setEnterComunity] = useState(false)
  const [profileThumb, setProfileThumb] = useState(false)

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
  }, [])

  const ChangeCommunity = () =>{
    setEnterComunity(true)
  }

  return (
    <>
      {
        enterCommunity?
        <Redirect to={`/room/${communityData.roomName}`}/>:
        <li>
          <CardContainer>
            <ContainerTextTop>
              <TextCommunity>Comunidad creada por:</TextCommunity>
              <UserContainer>
                <Link to={`/u/${communityData.username}`}>
                  {
                    profileThumb?
                    <img src={profileThumb} className="profile" alt="Imagen de perfil" style={{borderRadius: "100%"}} />:
                    <ProfileSVG />
                  }
                </Link>
                <User as="h4">{communityData.username}</User>
              </UserContainer>
            </ContainerTextTop>
            <ImageContainer>
              <img src={thumb? thumb: communityThumb} alt="Imagen de referencia de la comunidad" />
              <DescriptionContainer as="button">
                <h3>{communityData.title}</h3>
                <Truncate className="truncate">
                  <TextDescription className="textCardCommunity">
                    {communityData.description}
                  </TextDescription>
                </Truncate>
              </DescriptionContainer>
            </ImageContainer>
            <ButtonStyled secondary onClick={ChangeCommunity}>Entrar</ButtonStyled>
          </CardContainer>
        </li>
      }
    </>
  );
}

export default CardCommunity;