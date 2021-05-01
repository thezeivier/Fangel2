import React from 'react';
import styled, { keyframes } from 'styled-components'
import { ReactComponent as FangelLettersSVG } from './../general/icons/fangelLetters.svg'

const Faded = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`

const Ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`

const Ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
`

const Ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  background: linear-gradient(180deg, #02131F 0%, #04061C 100%);
`

const FadedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation: ${Faded} .3s ease-in-out;

  svg {
    fill: #F6F3EF;
    height: 4em;
    width: 8em;
  }
`

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 70px;
  margin: -5px 0 0 0;

  div {
    position: absolute;
    top: 20px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    background: #F6F3EF;
  }

  .box-1 {
    left: 8px;
    animation: ${Ellipsis1} 0.6s infinite;
  }

  .box-2 {
    left: 8px;
    animation: ${Ellipsis2} 0.6s infinite;
  }

  .box-3 {
    left: 32px;
    animation: ${Ellipsis2} 0.6s infinite;
  }

  .box-4 {
    left: 56px;
    animation: ${Ellipsis3} 0.6s infinite;
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;

    div {
      top: 28px;
      width: 13px;
      height: 13px;
    }
  }
`

const MainSpinner = () => {
  return (
    <Container>
      <FadedContainer>
        <FangelLettersSVG />
        <Loader>
          <div className="box-1"></div>
          <div className="box-2"></div>
          <div className="box-3"></div>
          <div className="box-4"></div>
        </Loader>
      </FadedContainer>
    </Container>
  );
}

export default MainSpinner;
