import styled, { css } from 'styled-components'
import { PrimaryTitle, SecondaryTitle, TextBody, Button,
         Input, TextArea } from './externalRecyclableStyles'

export const TitleStyled = styled(PrimaryTitle)`
  margin: 0 0 8px 0;

  ${props => props.bottom && css`
    margin: 0 0 20px 0;
  `}
`

export const SubtitleStyled = styled(SecondaryTitle)`
  margin: 0 0 10px 0;
  font-size: 1.5em;
`

export const TextStyled = styled(TextBody)`
  margin: 0 0 30px 0;

  ${props => props.bottom && css`
    margin: 0 0 25px 0;
  `}

  ${props => props.bottom20 && css`
    margin: 0 0 20px 0;
  `}

  ${props => props.main && css`
    @media(min-width:1024px) {
      margin: 0 0 40px 0;
    }
  `}
`

export const TextAreaStyled = styled(TextArea)`
  margin: 0 0 20px 0;
`

export const ButtonStyled = styled(Button)`
  margin: 30px 0 0 0;

  @media(min-width:1200px) {
    width: initial;
  }
`

export const OnlyDesktop = styled.div`
  @media(min-width:1200px) {
    width: 562px;
  }
`
