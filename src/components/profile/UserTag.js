import React from 'react';
import { ButtonStyled } from './styles/sMainProfile'

const UserTag = ({ category, color }) => {
  return (
    <ButtonStyled secondary color={color}>
      {category}
    </ButtonStyled>
  );
}

export default UserTag;
