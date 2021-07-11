import React from 'react';
import { CommentsContainer } from './styles/sCommentsBox'
import { ChatMessage } from './ChatMessage'

const CommentsBox = ({data, userFromDB, lastMsgRef, heightBox, background}) => {
  return (
    <>
      <CommentsContainer heightBox={heightBox} background={background}>
        {data && data.map(msg => <ChatMessage key={`${msg.id}`} msg={msg} myUid={userFromDB.uid}/>)}
        <span ref={lastMsgRef}></span>
      </CommentsContainer>
    </>
  );
}

export default CommentsBox;
