import React, { useEffect, useState } from 'react';
import {useStorage} from 'reactfire'
import ModalGeneral from './../modal/ModalGeneral'
import ModalCloseSpace from './ModalCloseSpace'
import { SpaceCard, DescriptionContainer, ButtonStyled, CardContainer,
         SVGContainerComPrivate } from './styles/sDashboardSpace'
import spaceThumb from '../general/images/thumb_community_s1.svg'
import { ReactComponent as LockLineSVG } from './../community/icons/lockLine.svg'

const DbSpaceCard = ({routeAndBucket, profilePhotoUrl, title, description, privacy, roomName, creatorUid , uid, setListOfSpaces, listOfSpaces}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => setModalIsOpen(!modalIsOpen)
  const [thumb, setThumb] = useState(null)
  const storage = useStorage()

  useEffect(()=>{
    if(routeAndBucket){
      const gsReference = storage.refFromURL(profilePhotoUrl)
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
            privacy === "public" ?
              <img src={profilePhotoUrl? profilePhotoUrl: spaceThumb}/> :
              <SVGContainerComPrivate>
                <LockLineSVG />
              </SVGContainerComPrivate>
          }
          <DescriptionContainer>
            <h3>{title}</h3>
            <p>{description}</p>
          </DescriptionContainer>
        </SpaceCard>
        <ButtonStyled danger onClick={modalOpen} >Cerrar espacio</ButtonStyled>
      </CardContainer>
      <ModalGeneral modalIsOpen={modalOpen} modalOpen={modalIsOpen} >
        <ModalCloseSpace setListOfSpaces={setListOfSpaces} listOfSpaces={listOfSpaces} modalIsOpen={modalOpen} privacy={privacy} roomName={roomName} creatorUid={creatorUid} uid={uid}/>
      </ModalGeneral>
    </>
  );
}

export default DbSpaceCard;
