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

  @media(min-width:1200px) {
    border-radius: 10px;
    display: none;
  }
`

export const ButtonComments = styled.button`
  display: none;

  @media(min-width:1200px) {
    display: block;
    padding: 10px;
    position: absolute;
    bottom: 17px;
    right: 17px;
    z-index: 3000;
  }
`
