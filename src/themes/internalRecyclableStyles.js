import styled, { css } from 'styled-components'
import { PrimaryTitle, SecondaryTitle, TextBody, Button,
         TextArea } from './externalRecyclableStyles'

export const TitleStyled = styled(PrimaryTitle)`
  margin: 0 0 8px 0;

  ${props => props.bottom && css`
    margin: 0 0 20px 0;
  `}
`

export const SubtitleStyled = styled(SecondaryTitle)`
  margin: 0 0 10px 0;
  font-size: 1.4em;

  ${props => props.bottom15 && css`
    margin: 0 0 15px 0;
  `}

  ${props => props.small && css`
    font-size: 1.25em;
    font-weight: ${props => props.theme.weight.semiMedium};
  `}

  ${props => props.big && css`
    font-size: 1.9em;
  `}

  ${props => props.summary && css`
    margin: 0;
    cursor: pointer;
  `}

  ${props => props.green && css`
    color: #27AE60;
  `}

  ${props => props.brand && css`
    color: ${props => props.theme.colorbrandSolid};
  `}

  ${props => props.font155 && css`
    font-size: 1.55em;
  `}
`

export const TextStyled = styled(TextBody)`
  margin: 0 0 30px 0;

  ${props => props.paragraph && css`
    margin: 0 0 10px 0;
  `}

  ${props => props.bottom20 && css`
    margin: 0 0 20px 0;
  `}

  ${props => props.bottom && css`
    margin: 0 0 25px 0;
  `}

  ${props => props.bottom0 && css`
    margin: 0;
  `}

  ${props => props.main && css`
    @media(min-width:1024px) {
      margin: 0 0 40px 0;
    }
  `}
`

export const TextAreaStyled = styled(TextArea)`
  margin: 0 0 20px 0;

  ${props => props.border4 && css`
    border-radius: 10px;
    padding: 9px 15px;
    margin: 0 0 12px 0;
  `}

  ${props => props.marginBottom7 && css`
    margin: 0 0 7px 0;
  `}
`

export const ButtonStyled = styled(Button)`
  margin: 30px 0 0 0;

  @media(min-width:1200px) {
    width: initial;
  }

  ${props => props.bottom30 && css`
    margin: 0 0 40px 0;
  `}
`

export const OnlyDesktop = styled.div`
  @media(min-width:1200px) {
    width: 562px;
  }
`
