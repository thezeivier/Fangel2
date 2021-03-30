import styled, { css } from 'styled-components'
import { Input, svgMixin } from './../../../themes/externalRecyclableStyles'

export const InputStyles = styled(Input)`
  margin: 0 0 20px 0;

  ${props => props.primary && css`
    margin:  0 20px 0;
  `}
`

export const Form = styled.form`
  display: flex;
  align-items: center;

  ${svgMixin};

  svg {
    margin: 0 0 20px 0;
  }
`
