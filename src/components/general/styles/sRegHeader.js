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

export const IconsContainer = styled.nav`
  display: flex;
  align-items: center;

  .nameUserProfile {
    display: none;
  }
  
  a {
    margin: 0 0 0 15px;

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
      margin: 0 0 0 5px;
      width: 30px;
    }

    .profileImg {
      margin: 0 0 2px 5px;
      width: 25px;
      height: 25px;
      object-fit: cover;
    }

    .iconsRegHeader {
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
    margin: 0 0 0 17px;

    a {
      .profile {
        margin: 0 0 0 5px;
        width: 35px;
      }

      .profileImg {
        width: 27px;
        height: 27px;
      }

      .iconsRegHeader {
        width: 30px;
      }
    }
  }

  @media(min-width: 768px){
    margin: 0 0 0 18px;

    .nameUserProfile {
      display: block;
      margin: 0 -12px 0 0;
    }

    a {
      .profile {
        margin: 0 0 0 8px;
        width: 36px;
      }

      .profileImg {
        margin: 0 0 7px 8px;
        width: 30px;
        height: 30px;
      }

      .iconsRegHeader {
        width: 32px;
      }

      .homeIconRegHeader {
        width: 30px;
        margin-bottom: 4px;
      }
    }
  }

  @media(min-width: 1024px){
    margin: 0 0 0 20px;

    a {
      .profile {
        margin: 0 0 0 8px;
        width: 37px;
      }

      .profileImg {
        margin: 0 0 3px 8px;
        width: 30px;
        height: 30px;
      }

      .homeIconRegHeader {
        margin-bottom: 4px;
      }
    }
  }
`
