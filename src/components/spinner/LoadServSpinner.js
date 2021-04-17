import React from 'react';
import styled, { keyframes } from 'styled-components'

const Faded = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`

const SkBounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`

const SkRotate = keyframes`
  100% { transform: rotate(360deg); transform: rotate(360deg) }
`

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(31, 31, 36, 0.8);
  backdrop-filter: blur(8px);

  animation: ${Faded} .3s linear;
`

const SpinnerContainer = styled.div`
  margin: 0 auto 50px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  
  animation: ${SkRotate} 1.8s infinite linear;

  .dot1, .dot2 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.colorWhite};
    border-radius: 100%;
    
    animation: ${SkBounce} 1.8s infinite ease-in-out;
  }

  .dot2 {
    top: auto;
    bottom: 0;
    animation-delay: -0.9s;
  }
`

const LoadServSpinner = ({ title }) => {
  return (
    <ContainerGeneral>
      <SpinnerContainer>
        <div className="dot1"></div>
        <div className="dot2"></div>
      </SpinnerContainer>
      <p>{title}</p>
    </ContainerGeneral>
  );
}

export default LoadServSpinner;
