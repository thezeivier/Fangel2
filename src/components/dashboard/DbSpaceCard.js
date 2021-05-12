import React, { useState } from 'react';
import ModalGeneral from './../modal/ModalGeneral'
import ModalCloseSpace from './ModalCloseSpace'
import { SpaceCard, DescriptionContainer, ButtonStyled, CardContainer } from './styles/sDashboardSpace'

const DbSpaceCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => setModalIsOpen(!modalIsOpen)

  return (
    <>
      <CardContainer>
        <SpaceCard as="a" href="#">
          <img /> {/* or svg */}
          <DescriptionContainer>
            <h3>Lorem impsum  </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
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
