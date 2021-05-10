import React, { useState } from 'react';
import { SubSpaceAddCardContainer } from './styles/sSubSpace'
import { ReactComponent as AddCardSVG } from './../home/icons/addCard.svg'
import ModalGeneral from './../modal/ModalGeneral'
import CreateSubSpace from './CreateSubSpace'

const SubSpaceAddCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => setModalIsOpen(!modalIsOpen)

  return (
    <>
      <SubSpaceAddCardContainer onClick={modalOpen} >
        <AddCardSVG />
        <p>Crear subespacio</p>
      </SubSpaceAddCardContainer>
      <ModalGeneral modalIsOpen={modalOpen} modalOpen={modalIsOpen} >
        <CreateSubSpace />
      </ModalGeneral>
    </>
  );
}

export default SubSpaceAddCard;
