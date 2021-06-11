import React from 'react';
import CardMatchInterest from './CardMatchInterest';
import { ContainerGeneral, BoxInterestContainer } from './styles/sMatchInterest'

const MatchInterest = ({fangelConnectGlobalData}) => {
  const  { joinnerPreferences, spaceId } = fangelConnectGlobalData 
  return (
    <ContainerGeneral>
      <p>Intereses en común:</p>
      <BoxInterestContainer>
        {joinnerPreferences.map(interest => <CardMatchInterest key={`${spaceId}-${interest}`} interest={interest}/>)}
      </BoxInterestContainer>
    </ContainerGeneral>
  );
}

export default MatchInterest;
