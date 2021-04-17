import React from 'react';
import { Link } from 'react-router-dom'
import { CommentContainer, Comment, UserName } from './styles/sOtherComments'

const OtherComments = ({ text, username, color }) => {
  return (
    <CommentContainer>
      {/* <img alt="foto de perfil" /> */}
      <Comment color={color}>
        <Link to={`/u/${username}`}> {/* Linkeo al perfil de los usuarios desde el chat */}
          <UserName color={color}>{username}</UserName>
        </Link>
        <p>{text}</p>
      </Comment>
    </CommentContainer>
  );
}

export default OtherComments;