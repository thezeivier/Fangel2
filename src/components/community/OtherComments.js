import React from 'react';
import { CommentContainer, Comment, UserName } from './styles/sOtherComments'

const OtherComments = ({ text, username, color }) => {
  return (
    <CommentContainer>
      {/* <img alt="foto de perfil" /> */}
      <Comment color={color}>
        <UserName color={color}>{username}</UserName>
        <p>{text}</p>
      </Comment>
    </CommentContainer>
  );
}

export default OtherComments;
