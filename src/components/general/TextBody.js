import React from 'react';
import styled from 'styled-components'

const Text = styled.p`
  font-family: ${props => props.theme.secondaryFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 1.1em;
  line-height: 1.7em;
  text-align: center;
  margin: ${props => props.margin};

  @media(min-width:768px) {
    font-size: 1.2em;
  }

  @media(min-width:1200px) {
    font-size: 1.15em;
    text-align: start;
  }
`

const TextBody = (props) => {
  return (
    <Text margin={props.margin}>
      {props.children}
    </Text>
  );
}

export default TextBody;
