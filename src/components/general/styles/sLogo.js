import styled from 'styled-components'

export const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.colorbrandSolid};

  svg {
    fill: ${props => props.theme.colorbrandSolid};
  }

  .iconFangel {
    height: 2em;
    margin-right: 4px;
    width: auto;
  }

  .fangelLetters {
    height: 1.9em;
    margin: 3px 0 0 0;
  }

  @media(min-width:768px) {
    .iconFangel {
      margin-right: 9px;
    }
  }

  @media(min-width:1200px) {
    .iconFangel {
      height: 2.05em;
      margin-right: 10px;
    }

    .fangelLetters {
      height: 2.02em;
      margin: 1px 0 0 0;
    }
  }
`
