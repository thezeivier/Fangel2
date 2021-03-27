import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  font-style: normal;
  font-weight: ${props => props.theme.weight.semiMedium};
  font-size: 2em;
  line-height: 1.45em;
  text-align: ${props => props.align};
  margin: ${props => props.margin};

  @media(min-width:768px) {
    font-size: 2.3em;
  }

  @media(min-width:768px) {
    font-size: 2.45em;
  }

  @media screen and (min-width: 1024px) and (orientation : landscape) {
    font-size: 2.67em;
  }
`

const PrimaryTitle = ({ text, align, margin }) => {
  return (
    <Title align={align} margin={margin} >
      {text}
    </Title>
  );
}

export default PrimaryTitle;
