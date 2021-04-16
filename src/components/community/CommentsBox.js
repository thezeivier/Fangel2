import React from 'react';
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'
import { CommentsContainer, Transperent } from './styles/sCommentsBox'
import { ChatMessage } from './ChatMessage'

const CommentsBox = ({data, userFromDB, lastMsgRef}) => {
  return (
    <>
      <Transperent /> {/* Cuadro transparente */}
      <CommentsContainer>
        {data && data.map(msg => <ChatMessage key={`${msg.id}`} msg={msg} myUid={userFromDB.uid} colorsUser={userFromDB.colorsUser}/>)}
        <span ref={lastMsgRef}></span>
      </CommentsContainer>
    </>
  );
}

export default CommentsBox;
