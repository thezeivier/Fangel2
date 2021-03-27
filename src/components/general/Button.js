import React from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 48px;
  border-radius: 30px;
  color: ${props => props.theme.textButton};
  font-size: 1.2em;
  width: ${props => props.width || '100%'};
  border: none;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.weight.semiMedium};
  margin: ${props => props.margin};
  cursor: pointer;

  @media(min-width:1200px) {
    font-size: 1.15em;
  }
`

const Button = ({ text, width, style, margin }) => {
  return (
    <ButtonStyled width={width} className={style} margin={margin}>
      {text}
    </ButtonStyled>
  );
}

export default Button;
