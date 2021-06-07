import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

export const ButtonStyled = styled(Button)`
  display: flex;

  @media(min-width:768px) {
    padding: 15px 25px;
  }

  @media(min-width:1200px) {
    padding: 12px 26px;
    height: max-content;
  }
`
