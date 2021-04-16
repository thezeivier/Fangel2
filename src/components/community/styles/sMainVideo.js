import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

export const MainOnlyDesktop = styled.main`
  .mainWrapper {
    @media(min-width:1200px) {
      width: 100%;
      margin: 0;
    }
  }
`

export const ContainerResponsive = styled.div`
  flex: 1 0 auto;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media(min-width:1024px) and (orientation : portrait) {
    margin: 0 15%;
  }
`

export const ButtonConfiguration = styled(Button)`
  width: initial;
  margin: 10px auto;
  padding: 11px 35px;
  display: ${props => props.display || 'flex'};
  z-index: 1000;

  svg {
    fill: ${props => props.theme.colorbrandSolid};
    width: 22px;
    margin: 0 10px 0 0;
  }

  @media(min-width:1200px) {
    display: none;
  }
`
