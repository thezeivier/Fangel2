import React from 'react';
import SubSpaceAddCard from './SubSpaceAddCard'
import SubSpaceCard from './SubSpaceCard'
import { GridCardsContainer } from './styles/sSubSpace'

const SubSpaceMain = () => {
  return (
    <GridCardsContainer>
      <SubSpaceAddCard />
      <SubSpaceCard />
    </GridCardsContainer>
  );
}

export default SubSpaceMain;
