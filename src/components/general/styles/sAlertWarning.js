import styled from 'styled-components'

export const AlertContainer = styled.div`
  background: ${props => props.theme.colorAlert + 'db'};
  padding: 27px 60px 17px 23px;
  border-radius: 20px;
  position: fixed;
  bottom: 40px;
  left: 20px;
  z-index: 3000;
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
