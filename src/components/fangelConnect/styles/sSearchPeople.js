import styled, { css, keyframes } from 'styled-components'
import { TextBody } from './../../../themes/externalRecyclableStyles'
import { ButtonAccion } from '../../../components/profile/styles/sMainProfile'

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

  img{
    margin-bottom: 15px;
  }

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
  margin: 25px 0;
  ${FlexMixin}
  justify-content: center;

  img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background: gray;
    object-fit: cover;
    margin: 0 auto;

    &:nth-child(1) {
      margin: 0 auto 15px auto;
    }
  }

  p {
    text-align: center;
    max-width: 150px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
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

  .buttonsAccionContainer {
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    button {
      &:nth-child(1) {
        margin: 0 0 10px 0;
      }
    }
  }

  @media(min-width:1200px) {
    flex-direction: row;

    img {
      width: 120px;
      height: 120px;

      &:nth-child(1) {
        margin: 0 auto 20px auto;
      }
    }

    svg {
      width: 120px;
      height: 120px;
    }

    span {
      margin: 0 80px;
    }

    .buttonsAccionContainer {
      margin: 0 80px;

      button {
        &:nth-child(1) {
          margin: 0 0 15px 0;
        }
      }
    }
  }
`

export const ButtonAccionStyled = styled(ButtonAccion)`
  margin: 0;
`

export const TextBodyStyled = styled(TextBody)`
  text-align: center;
  margin-top: 20px;
  width: 70%;
  font-weight: ${props => props.theme.weight.semiMedium};

  @media(min-width:768px) {
    margin-top: 40px;
  }
`
