import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

export const ButtonStyled = styled(Button)`
  display: ${props => props.displayDesktop ? 'none' : 'flex'};

  @media(min-width:768px) {
    padding: 15px 25px;
  }

  @media(min-width:1200px) {
    display: ${props => props.displayDesktop ? 'flex' : 'none'};
    padding: 12px 26px;
    height: max-content;
  }
`
