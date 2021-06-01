import styled, { css, keyframes } from 'styled-components'
import { TextBody } from './../../../themes/externalRecyclableStyles'

const Faded = keyframes`
  0% {
    opacity: .1;
  } 50% {
    opacity: 1;
  } 100% {
    opacity: .1;
  }
`

const FlexMixin = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchPeopleContainer = styled.div`
  ${FlexMixin}
  height: 100vh;

  a {
    color: ${props => props.theme.colorbrandSolid};
    cursor: pointer;
    font-weight: ${props => props.theme.weight.semiMedium};
    margin: 0 0 30px 0;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const PeopleContainer = styled.div`
  flex: 1 1 auto;
  margin: 40px 0;
  ${FlexMixin}
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: gray;
  }

  p {
    display: block;
    margin: 40px 0;
    color: ${props => props.theme.smallText};
    animation: ${Faded} 2s ease-out infinite;
  }
`

export const TextBodyStyled = styled(TextBody)`
  text-align: center;
  margin-top: 30px;
  width: 70%;
  font-weight: ${props => props.theme.weight.semiMedium};
`
