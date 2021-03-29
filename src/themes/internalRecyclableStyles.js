import styled, { css } from 'styled-components'
import { PrimaryTitle, SecondaryTitle, TextBody, SmallText,
         Button, Form, Input } from './externalRecyclableStyles'

export const TitleStyled = styled(PrimaryTitle) `
  margin: 0 0 8px 0;
`

export const Subtitletyled = styled(SecondaryTitle) `
  margin: 0 0 30px 0;
`

export const TextStyled = styled(TextBody) `
  margin: 0 0 30px 0;

  ${props => props.bottom && css`
    margin: 0 0 20px 0;
  `}
`
