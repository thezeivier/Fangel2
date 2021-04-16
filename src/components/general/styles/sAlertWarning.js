import styled from 'styled-components'

export const AlertContainer = styled.div`
  background: ${props => props.theme.colorAlert + 'db'};
  padding: 27px 47px 17px 18px;
  border-radius: 20px;
  position: fixed;
  bottom: 40px;
  left: 20px;
  z-index: 3000;
  display: flex;
  transition: .2s;
  left: 10px;
  right: 10px;
  bottom: 40px;


  &:hover {
    background: ${props => props.theme.colorAlert};
  }

  svg {
    width: 45px;
    margin: 0 15px 0 0;
  }

  @media(min-width:768px) {
    padding: 27px 60px 17px 23px;
    left: 20px;
    right: auto;

    svg {
      width: 24px;
    }
  }

  @media(min-width:1200px) {
    padding: 27px 60px 17px 23px;
    svg {
      width: 24px;
    }
  }

  .alertDescriptionContainer {
    p {
      font-weight: ${props => props.theme.weight.light};
      margin: 0 0 10px 0;
      cursor: default;
      line-height: 1.45em;
    }

    a {
      font-weight: ${props => props.theme.weight.medium};
      text-decoration: underline;
      cursor: pointer;
      font-size: 1.05em;

      @media(min-width:1200px) {
        font-size: 1em;
      }
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
