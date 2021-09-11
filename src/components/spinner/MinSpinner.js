import React from 'react';
import styled, { keyframes } from 'styled-components'

const SkBouncedelay = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`

const MinSpinnerContainer = styled.div`
  margin: 10px auto;
  width: 70px;
  text-align: center;

  & > div {
    width: 12px;
    height: 12px;
    background-color: ${props => props.theme.textColor};

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${SkBouncedelay} 1.4s infinite ease-in-out both;
    animation: ${SkBouncedelay} 1.4s infinite ease-in-out both;
  }

  & .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`

const MinSpinner = () => {
  return (
    <MinSpinnerContainer>
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </MinSpinnerContainer>
  );
}

export default MinSpinner;
