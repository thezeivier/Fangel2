import styled, { css } from 'styled-components'
import { Button, SecondaryTitle, TextBody } from './../../../themes/externalRecyclableStyles'

//Support
export const ListBoxOptions = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;
`

export const BoxOption = styled.li`
  padding: 20px;
  width: -webkit-fill-available;
  margin: 0 0 22px 0;
  background: ${props => props.theme.inputForm};
  display: flex;
  justify-content: center;
  border-radius: 4px;
  transition: .2s;

  &:hover,
  &:active,
  &:focus {
    background-color: ${props => props.theme.colorHoverInput};
  }

  @media(min-width:768px) {
    padding: 30px;
  }

  span {
    color: ${props => props.color};
    font-size: 1.05em;
    font-weight: ${props => props.theme.weight.semiMedium};

    @media(min-width:768px) {
      font-size: 1.2em;
    }

    @media(min-width:1200px) {
      font-size: 1.35em;
    }
  }
`

//Report a problem
export const OnlyDesktop = styled.div`
  a,
  span {
    color: ${props => props.theme.colorbrandSolid};
    
    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.colorHoverIcon};
      text-decoration: underline;
    }
  }

  @media(min-width:1200px) {
    width: 800px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 0 30px 0;
`

export const ButtonStyled = styled(Button)`
  border-radius: 4px;
  padding: 11px 14px;

  ${props => props.left && css`
    margin: 0 12px 0 0;
    width: -webkit-fill-available;
  `}

  ${props => props.right && css`
    width: initial;
  `}

  @media(min-width:410px) {
    padding: 11px 17px;
  }

  @media(min-width:768px) {
    padding: 11px 48px;
  }

  @media(min-width:1024px) {
    ${props => props.left && css`
      width: initial;
    `}
  }
`

//Faqs
export const TextContainer = styled.div`
  margin: 20px 0 0 0;
`

export const SubtitleSmallStyled = styled(SecondaryTitle)`
  font-size: 1.45em;
  color: ${props => props.theme.colorbrandSolid};
  position: relative;
  padding: 0 0 0 25px;

  @media(min-width:768px) {
    padding: 0 0 0 30px;
  }

  @media(min-width:1200px) {
    padding: 0 0 0 32px;
  }

  ${props => props.question && css`
    &::before {
      content: 'P:';
      color: inherit;
      font-size: inherit;
      position: absolute;
      left: 0;
    }
  `}

  @media(min-width:1024px) {
    margin: 30px 0 0 0;
  }
`

export const TextStyled = styled(TextBody)`
  margin: 0;
  font-size: 1.08em;

  @media(min-width:1024px) {
    font-size: 1.1em;
  }
`
