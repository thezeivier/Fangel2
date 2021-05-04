import React from 'react';
import { SubSpaceAddCardContainer } from './styles/sSubSpace'
import { ReactComponent as AddCardSVG } from './../home/icons/addCard.svg'

const SubSpaceAddCard = () => {
  return (
    <SubSpaceAddCardContainer>
      <AddCardSVG />
      <p>Crear subespacio</p>
    </SubSpaceAddCardContainer>
  );
}

export default SubSpaceAddCard;
