import styled from 'styled-components'

export const MainOnlyDesktop = styled.main`
  .mainWrapper {
    @media(min-width:1200px) {
      width: 31%;
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
