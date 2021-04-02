import React from 'react';
import styled from 'styled-components'
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'

const CommentsContainer = styled.section`
  margin: 10px 0 0 0;
  font-family: ${props => props.theme.secondaryFont};
  flex: 1 0 auto;
  height: 100px;
  overflow: auto;
`

const CommentsBox = () => {
  return (
    <CommentsContainer>
      <OtherComments />
      <OtherComments />
      <SelfComments />
      <OtherComments />
      <SelfComments />
      <OtherComments />
      <OtherComments />
    </CommentsContainer>
  );
}

export default CommentsBox;
