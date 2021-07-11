import styled from 'styled-components'
import { TextStyled } from './../../../themes/internalRecyclableStyles'

export const ModalInformationContainer = styled.div`
  @media(min-width:768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media(min-width:1024px) {
    width: 70%;
    margin: 0 0 20px 0;

    p, h4 {
      text-align: center;
    }
  }
`

export const TextStyledModal = styled(TextStyled)`
  span {
    color: ${props => props.theme.colorbrandSolid};
    font-weight: ${props => props.theme.weight.semiMedium};
  }
`
