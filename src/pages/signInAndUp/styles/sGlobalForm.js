import styled, { css } from 'styled-components'
import { SecondaryTitle, TextBody, Form,
         Input, Button } from '../../../themes/externalRecyclableStyles'
import GoogleIcon from '../icons/logo-google.svg'

export const ContainerDesktop = styled.div`
  width: inherit;

  @media(min-width:768px) {
    width: 480px;
    margin: 0 auto;
  }

  @media(min-width:1200px) {
    width: 560px;
    margin: 0 auto;
  }
`

export const SubtitleStyled = styled(SecondaryTitle) `
  margin: 0 0 10px 0;
  text-align: center;

  @media(min-width:1024px) {
    margin: 0 0 15px 0;
  }
`

export const TextStyled = styled(TextBody) `
  margin: 0 0 30px 0;
  text-align: center;

  @media(min-width:1024px) {
    margin: 0 0 40px 0;
  }
`

export const SeparatorStyled = styled(TextBody) `
  margin: 20px 0 20px 0;
  text-align: center;

  @media(min-width:1024px) {
    margin: 30px 0 30px 0;
  }
`

export const FormStyled = styled(Form) `
  margin: 0 0 30px 0;
`

export const InputStyled = styled(Input) `
  margin: 0 0 14px 0;

  ${props => props.widthComplete && css`
    width: -webkit-fill-available;

    @media(min-width:1200px) {
      .copySVG {
        width: initial;
      }
    }
  `}

  ${props => props.marginBottom19 && css`
    margin: 0 0 19px 0;
  `}
`

export const ButtonStyled = styled(Button) `
  width: -webkit-fill-available;

  ${props => props.topSpace && css`
    margin: 30px 0 0 0;

    @media(min-width: 768px){
      margin: 35px 0 0 0;
    }

    @media(min-width: 1024px){
      margin: 40px 0 0 0;
    }
  `}

  ${props => props.googleIcon && css`
    span {
      padding: 10px;
      position: relative;
      &:before {
        content: "";
        background-image: url(${GoogleIcon});
        background-repeat: no-repeat;
        height:23px;
        width:23px;
        background-size: cover;
        position: absolute;
        top: -2px;
        right: 1em;
      }
    }
  `}
  
`
export const ErrorAlert = styled.p`
  color: ${props => props.theme.colorAlert};
  margin: -10px 0 15px 16px;
  font-size: 0.8em;
  width: -webkit-fill-available;
  text-align: start;

  @media(min-width:1024px) {
    font-size: 0.82em;
  }
`

export const LinkOtherPage = styled.div`
  font-family: ${props => props.theme.secondarFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 1em;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 50px 0 0 0;
  justify-content: center;

  @media(min-width:1024px) {
    margin: 60px 0 0 0;
  }

  p {
    margin: 0 8px 0 0;
    width: max-content;
    cursor: default;
  }

  a {
    color: ${props => props.theme.colorbrandSolid};
    cursor: pointer;
    width: max-content;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`
