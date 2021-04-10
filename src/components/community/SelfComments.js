import React from 'react';
import { CommentContainerStyled, CommentStyled } from './styles/sSelfComments'

const SelfComments = ({text, username}) => {
  return (
    <CommentContainerStyled>
      <CommentStyled>
        <h6>{username}</h6>
        <p>{text}</p>
      </CommentStyled>
      {/* <img alt="foto de perfil" /> */}
    </CommentContainerStyled>
  );
}

export default SelfComments;
