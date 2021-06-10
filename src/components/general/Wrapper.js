import React from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
  padding: 0 20px;
  width: -webkit-fill-available;
  display: ${props => props.display};
  justify-content: space-between;
  position: relative;

  height: ${props => props.height}; //solo para community video y error 404

  @media(min-width:410px) {
    padding: 0 30px;
  }

  @media(min-width:768px) {
    padding: 0 5%;
  }

  @media(min-width:1200px) {
    padding: 0;
    width: ${props => props.width || '1200px'};
    margin: 0 auto;
  }
`

const Wrapper = (props) => (
  <Container display={props.display} height={props.height} width={props.width} className="mainWrapper">
    {props.children}
  </Container>
)

export default Wrapper;
