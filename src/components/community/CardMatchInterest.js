import React from 'react';
import { BoxContainer } from './styles/sMatchInterest'

const CardMatchInterest = ({interest}) => {
  return (
    <li>
      <BoxContainer>
        <span>{interest}</span>
      </BoxContainer>
    </li>
  );
}

export default CardMatchInterest;
