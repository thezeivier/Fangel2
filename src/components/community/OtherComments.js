import React from 'react';
import { CommentContainer, Comment } from './styles/sOtherComments'

const OtherComments = ({text, username}) => {
  return (
    <CommentContainer>
      {/* <img alt="foto de perfil" /> */}
      <Comment>
        <h6>{username}</h6>
        <p>{text}</p>
      </Comment>
    </CommentContainer>
  );
}

export default OtherComments;
