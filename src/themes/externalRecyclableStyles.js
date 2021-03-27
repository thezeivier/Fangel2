import styled, { css } from 'styled-components'

export const ExternalsWrapper = styled.div`
  display: block;
  text-align: center;
  margin: auto;
  ${props => props.externalPagePadding && css`
    padding-top: ${props.externalPagePadding};
    padding-bottom: ${props.externalPagePadding};
    padding-left: calc(50% - 14.75em);
    padding-right: calc(50% - 14.75em);
  `}
`

const standarTextMixin = css`
  ${props => props.standar && css`
    color: ${props => props.theme.colorWhite};
  `}
`

export const PrimaryTitle = styled.h1`
  font-style: normal;
  font-weight: ${props => props.theme.weight.semiMedium};
  font-size: 2em;
  line-height: 1.45em;
  margin: ${props => props.margin};

  @media(min-width:768px) {
    font-size: 2.3em;
  }

  @media(min-width:768px) {
    font-size: 2.45em;
  }

  @media screen and (min-width: 1024px) and (orientation : landscape) {
    font-size: 2.67em;
  }

  ${standarTextMixin}
`

export const SecondaryTitle = styled.h2`
  font-style: normal;
  font-weight: ${props => props.theme.weight.semiMedium};
  font-size: 25px;
  line-height: 35px;

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

  @media(min-width:768px) {
    font-size: 1.2em;
  }

  @media(min-width:1200px) {
    font-size: 1.15em;
  }

  ${standarTextMixin}
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

  @media(min-width:1200px) {
    font-size: 1.15em;
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
  font-family: ${props => props.theme.secondaryFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 16px;
  line-height: 27px;
  position: static;
  background: ${props => props.theme.inputForm};
  color: ${props => props.theme.textColor};
  ${props => props.special && css`
      color: ${props => props.theme.colorbrandSolid};
    `}
  width: 29.5em;
  height: 44px;
  flex: none;
  flex-grow: 0;
  border: none;
  border-radius: 20px;
  padding-left: 21px;
  outline: none;

  &::placeholder {
    color: ${props => props.theme.inputPlaceholder};
    ${props => props.special && css`
      color: ${props => props.theme.colorBrandTransparent};
    `}
  }
`
