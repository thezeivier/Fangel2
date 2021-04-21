import styled, { keyframes, css } from 'styled-components'

export const Faded = keyframes`
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
`

export const ExternalsWrapper = styled.main`
  text-align: center;
  padding: 100px 0 0 0;

  @media(min-width:768px) {
    padding: 140px 14% 0 14%;
  }

  @media(min-width:1200px) {
    padding: 140px auto 0 auto;
    width: 1200px;
  }
`

const standarTextMixin = css`
  ${props => props.standar && css`
    color: ${props => props.theme.colorWhite};
  `}
`

const inputMixin = css`
  font-family: ${props => props.theme.secondaryFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 1.1em;
  line-height: 27px;
  background: ${props => props.theme.inputForm};
  color: ${props => props.theme.textColor};
  width: -webkit-fill-available;
  flex: none;
  flex-grow: 0;
  border: none;
  outline: none;
  border-radius: 20px;
  transition: all .2s;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colorHoverInput};
  }

  &::placeholder {
    color: ${props => props.theme.inputPlaceholder};
    ${props => props.special && css`
      color: ${props => props.theme.colorBrandTransparent};
    `}
  }
`

export const svgMixin = css`
  svg {
    cursor: pointer;
    fill: ${props => props.theme.colorIcon};
    transition: all .2s;

    &:active,
    &:focus,
    &:hover {
      fill: ${props => props.theme.colorHoverIcon};
    }
  }
`

export const PrimaryTitle = styled.h1`
  font-style: normal;
  font-weight: ${props => props.theme.weight.semiMedium};
  font-size: 2.35em;
  line-height: 1.45em;
  margin: ${props => props.margin};
  cursor: default;

  @media(min-width:768px) {
    font-size: 2.3em;
  }

  @media(min-width:768px) {
    font-size: 2.45em;
  }

  @media screen and (min-width: 1024px) and (orientation : landscape) {
    font-size: 2.72em;
  }

  ${standarTextMixin}
`

export const SecondaryTitle = styled.h2`
  font-style: normal;
  font-weight: ${props => props.theme.weight.semiMedium};
  font-size: 1.7em;
  line-height: 1.5em;
  cursor: default;

  @media(min-width: 1100px){
    font-size: 34px;
    line-height: 45px;
  }

  ${standarTextMixin}
`

export const TextBody = styled.p`
  font-style: normal;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.weight.light};
  font-size: 1.1em;
  line-height: 1.7em;
  margin: ${props => props.margin};
  cursor: default;

  ${props => props.secondParagraph && css`
    margin: 10px 0 0 0;
  `}

  @media(min-width:768px) {
    font-size: 1.17em;
  }

  @media(min-width:1200px) {
    font-size: 1.13em;
  }
  
  ${standarTextMixin}
`

export const SmallText = styled.p`
  font-family: ${props => props.theme.secondaryFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 0.92em;
  line-height: 2.2em;
  color: ${props => props.theme.smallText};
  width: max-content;
`

export const TextDetails = styled.p`
  font-family: ${props => props.theme.secondaryFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 0.89em;
  line-height: 2.1em;
  cursor: default;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 48px;
  border-radius: 30px;
  color: ${props => props.theme.textButton};
  font-size: 1.2em;
  width: ${props => props.width || '100%'};
  border: none;
  font-family: ${props => props.theme.buttonFont};
  font-weight: ${props => props.theme.weight.semiMedium};
  margin: ${props => props.margin};
  cursor: pointer;
  outline: none;
  transition: all .2s;

  ${props => props.primary && css`
    background: ${props => props.theme.colorbrandSolid};
    color: ${props => props.theme.textButton};

    &:hover,
    &:active {
      background: ${props => props.theme.colorHoverPrimary};
    }
  `}

  ${props => props.secondary && css`
    background: transparent;
    border: 1px solid ${props => props.theme.colorbrandSolid};
    color: ${props => props.theme.colorbrandSolid};

    &:hover,
    &:active {
      background: ${props => props.theme.colorHoverSecondary};
    }
  `}
  
  ${props => props.disabled && css`
    border: 1px solid grey;
    color: grey;

    &:hover,
    &:active {
      background: #80808014;
      cursor: default;
    }
  `}

  ${props => props.standarP && css`
    background: ${props => props.theme.colorBrandDark};
    color: ${props => props.theme.colorDark};

    &:hover,
    &:active {
      background: ${props => props.theme.colorHoverDarkPrimary};
    }
  `}

  ${props => props.standarS && css`
    background: transparent;
    border: 1px solid ${props => props.theme.colorBrandDark};
    color: ${props => props.theme.colorBrandDark};

    &:hover,
    &:active {
      background: ${props => props.theme.colorHoverDarkSecondary};
    }
  `}

  @media(min-width:1024px) {
    font-size: 1.218em;
    padding: 14px 48px;
  }
`

export const Form = styled.form`
  display: block;

  ${props => props.center && css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const Input = styled.input`
  height: 44px;
  padding: 0 21px;
  ${inputMixin};

  ${props => props.special && css`
    color: ${props => props.theme.colorbrandSolid};
  `}
  
  @media(min-width:1024px) {
    padding: 25px 21px;
    font-size: 1em;
  }
`

export const TextArea = styled.textarea`
  ${inputMixin};
  padding: 9px 21px;
  resize: none;
  height: 150px;
`
