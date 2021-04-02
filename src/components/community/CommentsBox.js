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
  position: relative;

  @media (orientation : landscape) {
    height: 150px;
  }


  @media(min-width:768px) {
    margin: 10px 0 15px 0;
  }

  @media(min-width:768px) and (orientation : landscape) {
    height: 170px;
  }
`

const Transperent = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #04061C 28.16%, rgba(4,6,28,0) 100%);
  z-index: 100;
`

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
