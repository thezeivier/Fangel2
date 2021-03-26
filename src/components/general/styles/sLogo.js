import styled from 'styled-components'

export const LogoBox = styled.div`
  display: flex;
  padding: 0.5em;
  color: ${props => props.theme.logoColor};

  img {
    height: 2em;
    margin-right: 0.1em;    
  }

  h3 {
    font-family: ${props => props.theme.primaryFont};
    font-weight: ${props => props.theme.weight.semiMedium};
    font-size: 1.5em;
    padding-top: 0.1em    
  }
`