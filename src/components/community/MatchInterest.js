import React from 'react';
import CardMatchInterest from './CardMatchInterest';
import { ContainerGeneral, BoxInterestContainer } from './styles/sMatchInterest'

const MatchInterest = () => {
  return (
    <ContainerGeneral>
      <p>Intereses en comun:</p>
      <BoxInterestContainer>
        <CardMatchInterest />
      </BoxInterestContainer>
    </ContainerGeneral>
  );
}

export default MatchInterest;
