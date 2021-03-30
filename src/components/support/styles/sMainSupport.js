import styled, { css } from 'styled-components'
import { Button, SecondaryTitle } from './../../../themes/externalRecyclableStyles'

//Support
export const ListBoxOptions = styled.ul`
  display: flex;
  flex-direction: column;
`

export const BoxOption = styled.li`
  padding: 20px;
  width: -webkit-fill-available;
  margin: 0 0 20px 0;
  background: ${props => props.theme.inputForm};

  span {
    color: ${props => props.color};
    font-size: 1.05em;
    text-align: center;
    width: max-content;
    display: inline-block;
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
export const SubtitleSmallStyled = styled(Button)`
  font-size: 1.45;
`
