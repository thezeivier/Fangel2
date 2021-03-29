import styled from 'styled-components'

export const Header = styled.header`
  width: -webkit-fill-available;
  border-bottom: 1px solid ${props => props.theme.colorLine};
  flex: 0 0 auto;
  position: fixed;
  z-index: 1000;
  background: ${props => props.theme.backgroundHeader};
`

export const Container = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(min-width: 400px){
    padding: 12px 0;
  }

  @media(min-width: 768px){
    padding: 17px 0;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    svg {
      fill: ${props => props.theme.colorIcon};
      transition: all .2s;

      &:active,
      &:focus,
      &:hover {
        fill: ${props => props.theme.colorHoverIcon};
      }
    }

    .profile {
      margin: 0 15px 0 0;
      width: 30px;
    }

    .settings {
      width: 27px;
    }
  }

  @media(min-width: 400px){
    a {
      .profile {
        margin: 0 21px 0 0;
        width: 35px;
      }

      .settings {
        width: 32px;
      }
    }
  }

  @media(min-width: 768px){
    a {
      .profile {
        width: 36px;
      }
    }
  }

  @media(min-width: 1024px){
    a {
      .profile {
        width: 37px;
      }
    }
  }
`
