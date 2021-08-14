import styled, { keyframes } from 'styled-components'

export const Header = styled.header`
  border-bottom: 1px solid ${props => props.theme.colorLine};
  position: fixed;
  z-index: 2000;
  background: ${props => props.theme.backgroundHeader};
  height: 100%;
  padding: 15px 0;
  display: none;
  transition: .4s all;

  @media(min-width: 1200px){
    display: block;
  }
`

export const Container = styled.div`
  width: 80px;
  padding: 8px 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 3050;

  a {
    margin: 0 0 30px 0;
  }

  .personFangelIcon {
    width: 34px;
    height: 34px;
    fill: ${props => props.theme.colorbrandSolid};
  }

  @media(min-width: 1200px){
    flex-direction: column;
  }
`

export const IconsContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  
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
  }

  img {
    transition: .2s;

    &:hover {
      border: 1px solid ${props => props.theme.colorbrandSolid};
    }
  }

  @media(min-width: 1200px){
    a {
      .profileImg {
        margin: 0 0 3px 0;
        width: 30px;
        height: 30px;
      }
    }
  }
`
