import styled from 'styled-components'

export const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.colorbrandSolid};

  svg {
    fill: ${props => props.theme.colorbrandSolid};
    width: 100px;
  }

  @media(min-width:768px) {
    svg {
      width: 110px;
    }
  }

  @media(min-width:1200px) {
    svg {
      width: 118px;
    }
  }
`
