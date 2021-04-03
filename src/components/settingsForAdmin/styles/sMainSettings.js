import styled from 'styled-components'
import { SecondaryTitle, Input, Button } from './../../../themes/externalRecyclableStyles'

export const SectionContainer = styled.section`
  margin: 30px 0;
`

export const SubtitleStyled = styled(SecondaryTitle)`
  margin: 0 0 20px 0;
  font-size: 1.4em;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    margin: 0 0 0 10px;


    svg {
      fill: ${props => props.theme.textColor};
      width: 36px;
    }
  }
`

export const ButtonStyled = styled(Button)`
  @media(min-width:768px) {
    width: initial;
    margin: 0 auto;
  }
`


export const InputStyled = styled(Input)`
  width: max-content;
  flex: 1 0 auto;
  text-align: center;
  letter-spacing: 0.04em;

  &::placeholder {
    color: ${props => props.theme.colorbrandSolid};
  }
`

export const TimerDescripcion = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 25px 0;

  span {
    color: ${props => props.theme.colorbrandSolid};
    font-weight: ${props => props.theme.weight.semiMedium};
  }
`
