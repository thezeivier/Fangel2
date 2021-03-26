import styled from 'styled-components'

const CoverPage = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLanding%2FBackground.png?alt=media&token=dac11772-50b8-4e35-8b27-aa7e9258fc7a');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  max-height: 100vh;

  @media(min-width:320px){
    margin-left: -23em;
  }

  @media(min-width:768px){
    margin-left: -30em;
  }

  @media(min-width:1100px){
    margin-left: 0;
  }
`

export default CoverPage