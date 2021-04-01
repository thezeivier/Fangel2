import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 20px;
  width: -webkit-fill-available;
  display: ${props => props.display};
  justify-content: space-between;
  position: relative;

  height: ${props => props.height}; //solo para community video

  @media(min-width:410px) {
    padding: 0 30px;
  }

  @media(min-width:768px) {
    padding: 0 5%;
  }

  @media(min-width:1200px) {
    padding: 0;
    width: 1200px;
    margin: 0 auto;
  }
`

const Wrapper = (props) => (
  <Container display={props.display} height={props.heightCommunityVideo} className="mainWrapper">
    {props.children}
  </Container>
)

export default Wrapper;
