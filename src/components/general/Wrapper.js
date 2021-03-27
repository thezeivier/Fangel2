import React from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
  padding: ${props => props.padding};
  width: -webkit-fill-available;

  ${props => props.flex && css`
    display: flex;
    justify-content: space-between;
  `}
`

const Wrapper = (props) => (
  <Container padding={props.padding} flex>
    {props.children}
  </Container>
)

export default Wrapper;
