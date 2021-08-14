import styled from 'styled-components'

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
    padding: 11px 15px;
    position: absolute;
    bottom: 17px;
    right: 17px;
    z-index: 200;
    border: none;
    border-radius: 20px;
    font-family: ${props => props.theme.buttonFont};
    font-weight: ${props => props.theme.weight.semiMedium};
    cursor: pointer;
    background: ${props => props.theme.colorWhite};
    transition: .2s all;
    font-size: .82em;

    &:hover {
      background: #d5d6e2;
    }
  }
`
