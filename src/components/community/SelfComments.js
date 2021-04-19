import React from 'react';
import { CommentContainerStyled, CommentStyled, UserName } from './styles/sSelfComments'

const SelfComments = ({ text, username, color, name }) => {
  return (
    <CommentContainerStyled>
      <CommentStyled color={color}>
        <UserName color={color}>{name? name: username}</UserName>
        <p>{text}</p>
      </CommentStyled>
      {/* <img alt="foto de perfil" /> */}
    </CommentContainerStyled>
  );
}

export default SelfComments;
