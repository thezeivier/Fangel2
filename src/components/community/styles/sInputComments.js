import styled from 'styled-components'
import { Input } from './../../../themes/externalRecyclableStyles'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  flex: 0 0 auto;
  position: relative;
  z-index: 1000;

  @media(min-width:768px) {
    margin: 10px 0 20px 0;
  }

  @media(min-width:768px) {
    margin: 10px 0 15px 0;
  }

  @media(min-width:1200px) {
    .microphone,
    .cameraVideo,
    .sendCommentsSVG {
      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const SvgsContainer = styled.div`
  flex: 0 0 auto;
  margin: 0 10px 0 0;

  svg {
    height: 24px;
    width: 24px;
    fill: ${props => props.theme.textColor};
  }

/*   .microphone {
    margin: 0 5px 0 0;
  } */

  @media(min-width:768px) {
    margin: 0 10px 0 0;

/*     .microphone {
      margin: 0 10px 0 0;
    } */
  }

  @media(min-width:1200px) {
    display: none;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;

  svg {
    fill: ${props => props.theme.colorbrandSolid};
  }

  @media(min-width:1200px) {
    margin: 0 15px;
  }
`

export const InputStyled = styled(Input)`
  border-radius: 10px;
  font-size: 1em;
  padding: 0 10px;
  flex: 0 1 auto;
  margin: 0 10px 0 0;
 
  @media(min-width:768px) {
    padding: 0 20px;
    margin: 0 10px 0 0;
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;
  flex: 1 0 auto;
`
