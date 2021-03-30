import styled, { css } from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

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
