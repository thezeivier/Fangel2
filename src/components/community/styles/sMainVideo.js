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

  svg {
    fill: ${props => props.theme.colorbrandSolid};
    width: 22px;
    margin: 0 10px 0 0;
  }

  @media(min-width:1200px) {
    display: none;
  }
`

//Modal alert
export const AlertContainer = styled.div`
  background: ${props => props.theme.colorAlert + 'db'};
  padding: 27px 60px 17px 23px;
  border-radius: 20px;
  position: fixed;
  bottom: 40px;
  left: 20px;
  z-index: 2000;
  display: flex;
  transition: .2s;

  &:hover {
    background: ${props => props.theme.colorAlert};
  }

  svg {
    margin: 0 15px 0 0;
  }

  .alertDescriptionContainer {
    p {
      font-weight: ${props => props.theme.weight.light};
      margin: 0 0 10px 0;
      cursor: default;
    }

    a {
      font-weight: ${props => props.theme.weight.medium};
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .closeAlertWarning {
    fill: ${props => props.theme.colorWhite};
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;
    width: 24px;
    cursor: pointer;
  }
`
