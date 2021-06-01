import styled from 'styled-components'
import { SecondaryTitle, TextBody, Button } from './../../../themes/externalRecyclableStyles'

export const ModalCloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const SubtitleStyled = styled(SecondaryTitle)`
  font-size: 1.5em;
  text-align: center;
  margin: 0 0 15px 0;
`

export const TextStyled = styled(TextBody)`
  text-align: center;
  display: inline-block;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0 0;

  a {
    color: ${props => props.theme.colorbrandSolid};
    cursor: pointer;
    font-weight: ${props => props.theme.weight.semiMedium};

    &:hover {
      text-decoration: underline;
    }
  }

  @media(min-width:1200px) {
    margin: 40px 0 0 0;
  }
`

export const ButtonStyled = styled(Button)`
  width: auto;
  margin: 0 0 0 20px;
  padding: 11px 20px;

  @media(min-width:1200px) {
    margin: 0 0 0 30px;
    padding: 11px 30px;
  }
`

