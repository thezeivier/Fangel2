import styled from 'styled-components'
import { SecondaryTitle } from '../../../themes/externalRecyclableStyles'

export const Email = styled(SecondaryTitle) `
  margin: 0 0 10px 0;
  text-align: center;
  font-size: 1.4em;

  @media(min-width:1024px) {
    margin: 0 0 15px 0;
    font-size: 25px;
  }
`
