import React from 'react';
import CardMatchInterest from './CardMatchInterest';
import { ContainerGeneral, BoxInterestContainer } from './styles/sMatchInterest'

const MatchInterest = ({preferencesMatch, spaceId}) => {
  return (
    <ContainerGeneral>
      <p>Intereses en común:</p>
      <BoxInterestContainer>
        {preferencesMatch.map(interest => <CardMatchInterest key={`${spaceId}-${interest}`} interest={interest}/>)}
      </BoxInterestContainer>
    </ContainerGeneral>
  );
}

export default MatchInterest;
