import React from 'react';
import styled, { keyframes } from 'styled-components'

const Rotate = keyframes`
  from {
		transform: rotate(0);
  }
  
	to {
		transform: rotate(360deg);
	}
`

const Move1 = keyframes`
	0%, 5% {
		transform: translate(0, 0);
  }
  
	to {
		transform: translate(0, -100%);
	}
`

const Move2 = keyframes`
	0%, 5% {
		transform: translate(0, 0);
  }
  
	to {
		transform: translate(100%, 100%);
	}
`

const Move3 = keyframes`
	0%, 15% {
		transform: translate(0);
  }
  
	to {
		transform: translate(-100%, 100%);
	}
`


const Container = styled.div`
  width: 100vw;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1F1F24;

  @media(min-width:375px) {
    height: 53%;
  }

  @media(min-width:410px) {
    height: 58%;
  }

  @media(min-width:768px) {
    height: 108%;
  }

  @media(min-width:768px) {
    height: 144%;
  }

  @media(min-width:1200px) {
    width: 88%;
    height: 100%;
  }
`

const Loader = styled.div`
  animation: ${Rotate} 1.2s linear infinite normal;
	height: 1rem;
	position: relative;
  width: 1rem;
  
  div {
		animation: ${Move1} 0.6s ease-in-out infinite alternate;
		background: #F6F3EF;
		border-radius: 50%;
		height: 60%;
		position: absolute;
		width: 60%;
  }
  
  .ball-2 {
    animation-name: ${Move2};
  }

  .ball-3 {
    animation-name: ${Move3};
  }
`

const VideoSpinner = () => {
  return (
  <Container>
    <Loader className="loader">
      <div className="ball-1"></div>
      <div className="ball-2"></div>
      <div className="ball-3"></div>
    </Loader>
  </Container>
  );
}

export default VideoSpinner;