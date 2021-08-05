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
    padding: 12px 0 11px 0;
  }
`

export const IconsContainer = styled.nav`
  display: flex;
  align-items: center;

  .nameUserProfile {
    display: none;
  }
  
  a {
    margin: 0 0 0 12px;

    svg {
      fill: ${props => props.theme.colorIcon};
      transition: all .2s;

      &:active,
      &:focus,
      &:hover {
        fill: ${props => props.theme.colorHoverIcon};
      }
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
      margin: 0 0 0 15px;

      .profileImg {
        width: 27px;
        height: 27px;
      }
    }
  }

  @media(min-width: 768px){
    .nameUserProfile {
      display: block;
      cursor: default;
    }
    
    a {
      margin: 0 0 0 18px;

      .profileImg {
        margin: 0 0 7px 0;
        width: 30px;
        height: 30px;
      }
    }
  }

  @media(min-width: 1024px){
    a {
      .profileImg {
        margin: 0 0 3px 0;
        width: 30px;
        height: 30px;
      }
    }
  }
`
