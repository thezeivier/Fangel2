import React, { useEffect, useState } from 'react';
import {useStorage} from 'reactfire'
import ModalGeneral from './../modal/ModalGeneral'
import ModalCloseSpace from './ModalCloseSpace'
import { SpaceCard, DescriptionContainer, ButtonStyled, CardContainer } from './styles/sDashboardSpace'
import spaceThumb from '../general/images/thumb_community_s1.svg'

const DbSpaceCard = ({bucket, route, title, description, privacy, roomName}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => setModalIsOpen(!modalIsOpen)
  const [thumb, setThumb] = useState(null)
  const storage = useStorage()

  useEffect(()=>{
    if(bucket && route){
      const gsReference = storage.refFromURL(`gs://${bucket}/${route}`)
      gsReference.getDownloadURL().then(url => {//Recover spaceThumbnail from storage.
        setThumb(url)
    })
    }
  })

  return (
    <>
      <CardContainer>
        <SpaceCard as="a" href={`/room/${roomName}`}>
          {
            (privacy === "public") &&
              <img src={thumb? thumb: spaceThumb}/> 
                // {/* or svg */}
          }
          <DescriptionContainer>
            <h3>{title}</h3>
            <p>{description}</p>
          </DescriptionContainer>
        </SpaceCard>
        <ButtonStyled danger onClick={modalOpen} >Cerrar espacio</ButtonStyled>
      </CardContainer>
      <ModalGeneral modalIsOpen={modalOpen} modalOpen={modalIsOpen} >
        <ModalCloseSpace modalIsOpen={modalOpen} />
      </ModalGeneral>
    </>
  );
}

export default DbSpaceCard;
