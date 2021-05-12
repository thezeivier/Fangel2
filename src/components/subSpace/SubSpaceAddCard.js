import React, { useState } from 'react';
import { SubSpaceAddCardContainer } from './styles/sSubSpace'
import { ReactComponent as AddCardSVG } from './../home/icons/addCard.svg'
import ModalGeneral from './../modal/ModalGeneral'
import CreateSubSpace from './CreateSubSpace'

const SubSpaceAddCard = ({communityData}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = (result) => {
    if(result === true || result === false){
      setModalIsOpen(!result)
    }else{
      setModalIsOpen(!modalIsOpen)
    }
  }

  return (
    <>
      <SubSpaceAddCardContainer onClick={modalOpen} >
        <AddCardSVG />
        <p>Crear subespacio</p>
      </SubSpaceAddCardContainer>
      <ModalGeneral modalIsOpen={modalOpen} modalOpen={modalIsOpen} >
        <CreateSubSpace modalIsOpen={modalOpen} communityData={communityData}/>
      </ModalGeneral>
    </>
  );
}

export default SubSpaceAddCard;
