import React from 'react';
import { CardContainer } from './styles/sCardProductFangel'

const CardProductFangel = ({ svg, title, description, color }) => {
  return (
    <li>
      <CardContainer>
        {svg}
        {title}
        <p>{description}</p>
      </CardContainer>
    </li>
  );
}

export default CardProductFangel;
