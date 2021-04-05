import React from 'react';
import { CommentContainerStyled, CommentStyled } from './styles/sSelfComments'

const SelfComments = () => {
  return (
    <CommentContainerStyled>
      <CommentStyled>
        <h6>Thezevier</h6>
        <p>Sed ut perspiciatis unde omnis</p>
      </CommentStyled>
      <img alt="foto de perfil" />
    </CommentContainerStyled>
  );
}

export default SelfComments;
