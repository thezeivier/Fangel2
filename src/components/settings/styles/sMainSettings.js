import styled, { css } from 'styled-components'
import { svgMixin } from './../../../themes/externalRecyclableStyles'

export const Option = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 0 20px 0;
  cursor: pointer;
  transition: .2s;
  color: ${props => props.theme.textColor};

  &:hover,
  &:focus,
  &:active {
    svg {
      fill: ${props => props.theme.colorHoverIcon};
    }

    p {
      color: ${props => props.theme.colorHoverIcon};
    }
  }

  p {
    font-size: 1.1em;
    font-family: ${props => props.theme.secondaryFont};
  }

  ${svgMixin};

  svg {
    margin: 0 16px 0 0;
  }
`

const inlineFlexMixin = css`
  display: inline-flex;
  flex-direction: column;
`

export const Top = styled.div`
  transition: all .2s;
  ${inlineFlexMixin};

  span {
    width: initial;
    font-size: 1.1em;
    font-weight: ${props => props.theme.weight.regular};
    font-family: ${props => props.theme.secondaryFont};
    margin: 0 0 0 16px;
  }

  div {
    flex-direction: row-reverse;
    justify-content: flex-end;
    display: inline-flex;
    cursor: pointer;
    margin: 0 0 20px 0;
  }

  &:hover,
  &:focus,
  &:active {
    span {
      color: ${props => props.theme.colorHoverIcon};
    }
  }
`

export const ListOptions = styled.ul`
  ${inlineFlexMixin};
`
