import styled from 'styled-components'

export const CoverPage = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLanding%2FBackground.png?alt=media&token=dac11772-50b8-4e35-8b27-aa7e9258fc7a');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  max-height: 100vh;
`
export const LogoBox = styled.div`
  display: flex;
  padding: 0.5em;

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
