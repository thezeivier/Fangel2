import styled from 'styled-components'

export const Header = styled.header`
  width: -webkit-fill-available;
  border-bottom: 1px solid ${props => props.theme.colorLine};
  flex: 0 0 auto;
  position: fixed;
  z-index: 2000;
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
      margin: 0 10px 0 5px;
      width: 30px;
    }

    .profileImg {
      margin: 0 10px 2px 5px;
      width: 25px;
      height: 25px;
      object-fit: cover;
    }

    .settings {
      width: 27px;
    }
  }

  img {
    transition: .2s;

    &:hover {
      border: 1px solid ${props => props.theme.colorbrandSolid};
    }
  }

  @media(min-width: 400px){
    a {
      .profile {
        margin: 0 14px 0 5px;
        width: 35px;
      }

      .profileImg {
        margin: 0 14px 2px 5px;
        width: 29px;
        height: 29px;
      }

      .settings {
        width: 32px;
      }
    }
  }

  @media(min-width: 768px){
    a {
      .profile {
        margin: 0 17px 0 8px;
        width: 36px;
      }

      .profileImg {
        margin: 0 17px 5px 8px;
        width: 31px;
        height: 31px;
      }
    }
  }

  @media(min-width: 1024px){
    a {
      .profile {
        margin: 0 19px 0 8px;
        width: 37px;
      }

      .profileImg {
        margin: 0 19px 3px 8px;
        width: 30px;
        height: 30px;
      }
    }
  }
`
