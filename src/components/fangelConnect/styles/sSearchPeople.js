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

  .closeSVGSearchPeople {
    fill: ${props => props.theme.textColor};
    position: absolute;
    top: 15px;
    right: 15px;
    transition: .2s;
    cursor: pointer;
  }

  @media(min-width:768px) {
    a {
      margin: 0 0 40px 0;
    }
  }

  @media(min-width:768px) {
    .closeSVGSearchPeople {
      width: 40px;
      height: 40px;
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
    object-fit: cover;

    &:nth-child(1) {
      margin: 0 0 15px 0;
    }
  }

  p {
    text-align: center;
  }

  svg {
    fill: ${props => props.theme.textColor};
    width: 100px;
    height: 100px;
  }

  span {
    display: block;
    margin: 35px 0;
    color: ${props => props.theme.smallText};
    animation: ${Faded} 2s ease-out infinite;
    cursor: default;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  @media(min-width:1200px) {
    flex-direction: row;

    img {
      width: 120px;
      height: 120px;

      &:nth-child(1) {
        margin: 0 0 20px 0;
      }
    }

    svg {
      width: 120px;
      height: 120px;
    }

    span {
      margin: 0 80px;
    }
  }
`

export const TextBodyStyled = styled(TextBody)`
  text-align: center;
  margin-top: 30px;
  width: 70%;
  font-weight: ${props => props.theme.weight.semiMedium};

  @media(min-width:768px) {
    margin-top: 40px;
  }
`
