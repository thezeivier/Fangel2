import styled from 'styled-components'

export const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.logoColor};

  svg {
    height: 2em;
    margin-right: 8px;
    fill: ${props => props.theme.logoColor};
    width: auto;
  }

  h3 {
    font-family: ${props => props.theme.primaryFont};
    font-weight: ${props => props.theme.weight.semiMedium};
    font-size: 1.55em;
    padding-top: 0.1em    
  }
`