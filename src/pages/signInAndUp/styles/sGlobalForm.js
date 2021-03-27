import styled from 'styled-components'
import { SecondaryTitle, TextBody, Form,
         Input, Button } from '../../../themes/externalRecyclableStyles'

export const ContainerDesktop = styled.div`
  width: inherit;

  @media(min-width:1200px) {
    width: 560px;
    margin: 0 auto;
  }
`

export const SubtitleStyled = styled(SecondaryTitle) `
  margin: 0 0 10px 0;
  text-align: center;
`

export const TextStyled = styled(TextBody) `
  margin: 0 0 30px 0;
  text-align: center;
`

export const FormStyled = styled(Form) `
  margin: 0 0 30px 0;
`

export const InputStyled = styled(Input) `
  margin: 0 0 20px 0;
`

export const ButtonStyled = styled(Button) `
  width: -webkit-fill-available;
`
