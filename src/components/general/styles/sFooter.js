import styled, { css } from 'styled-components'
import { SmallText } from './../../../themes/externalRecyclableStyles'

export const FooterContainer = styled.footer`
  padding: 80px 0 30px;
  flex: 0 0 auto;

  @media(min-width:1024px) {
    padding: 100px 0 25px;
  }
`

export const OnlyDesktop = styled.div`
  display: block;

  @media(min-width:1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SupportLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 30px 0;
`

export const SmallTextStyled = styled(SmallText) `
  text-align: center;
  line-height: 2.8em;

  &:active {
    color: ${props => props.theme.colorbrandSolid};
    text-decoration: underline;
  }

  &:nth-child(1),
  &:nth-child(3) {
    margin: 0 12px 0 0;
  }

  @media(min-width:768px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin: 0 15px 0 0;
    }
  }

  @media(min-width:1200px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin: 0 20px 0 0;
    }

    &:hover {
      color: ${props => props.theme.colorbrandSolid};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const Fangel = styled.h6`
  font-style: normal;
  font-weight: ${props => props.theme.weight.regular};
  font-size: 0.92em;
  color: #888787;
  cursor: default;

  @media(min-width:1024px) {
    margin: 0 0 30px 0;
  }
`
