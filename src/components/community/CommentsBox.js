import React from 'react';
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'
import { CommentsContainer, Transperent } from './styles/sCommentsBox'

const CommentsBox = () => {
  return (
    <>
      <Transperent /> {/* Cuadro transparente */}
      <CommentsContainer>
        <OtherComments />
        <OtherComments />
        <SelfComments />
        <OtherComments />
        <SelfComments />
        <OtherComments />
        <OtherComments />
      </CommentsContainer>
    </>
  );
}

export default CommentsBox;
