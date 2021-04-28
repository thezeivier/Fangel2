import React from 'react';
import styled from 'styled-components'

import { ReactComponent as ViewSVG } from './icons/view.svg'
import { ReactComponent as ViewOffSVG } from './icons/viewOff.svg'

export const ButtonsViewContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 1000;

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      fill: ${props => props.theme.inputPlaceholder};
      transition: .2s;

      &:hover {
        fill: ${props => props.theme.colorbrandSolid};
      }
    }
  }

  @media(min-width:1024px) {
    top: 14px;
    right: 17px;
  }
`

const ButtonViewPassword = ({ viewPassword, view }) => {
  return (
    <ButtonsViewContainer>
      <button onClick={viewPassword}>
        {
          view ? <ViewSVG /> : <ViewOffSVG />
        }
      </button>
    </ButtonsViewContainer>
  );
}

export default ButtonViewPassword;
