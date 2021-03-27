import styled from 'styled-components'

/* Cover page */

export const CoverPage = styled.main`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLanding%2FBackground.png?alt=media&token=dac11772-50b8-4e35-8b27-aa7e9258fc7a');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: auto;
  max-height: 100vh;
  background-position-x: center;

  img {
    display: none;
  }

  @media(min-width:1200px) {
    min-height: 100vh;

    img {
      display: block;
      position: absolute;
      width: 450px;
      right: 0;
    }
  }
`

export const Container = styled.div`
  padding: 44% 0 0 0;

  @media(min-width:768px) {
    padding: 35% 0 0 0;
  }

  @media screen and (min-width: 768px) and (orientation : landscape) {
    padding: 23% 0 0 0;
  }

  @media(min-width:1024px) {
    padding: 40% 0 0 0;
  }

  @media screen and (min-width: 1024px) and (orientation : landscape) {
    padding: 22% 0 0 0;
  }

  @media(min-width:1200px) {
    padding: 2% 0 0 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const TitleContainer = styled.div`
  margin: 0 0 30px 0;

  h1 {
    text-align: center;
  }

  @media(min-width:1200px) {
    margin: 0 0 20px 0;

    h1 {
      text-align: start;
    }
  }
`

export const TextContainer = styled.div`
  margin: 0 0 54px 0;

  p {
    text-align: center;
  }

  @media(min-width:1024px) {
    margin: 0 0 70px 0;
  }

  @media(min-width:1200px) {
    width: 600px;
    
    p {
      text-align: start;
    }
  }
`

export const ButtonsContainer = styled.div`
  width: 250px;
  margin: 0 auto;
  padding: 0 0 22% 0;

  @media(min-width:768px) {
    width: 300px;
    padding: 0 0 25% 0;
  }

  @media screen and (min-width: 768px) and (orientation : landscape) {
    padding: 0 0 16% 0;
  }

  @media(min-width:1024px) {
    padding: 0 0 28% 0;
  }

  @media screen and (min-width: 1024px) and (orientation : landscape) {
    padding: 0 0 18% 0;
  }

  @media(min-width:1200px) {
    padding: 0;
    margin: 0;
    display: flex;
    width: auto;
  }
`

export const ButtonContainer = styled.div`
  margin: 0 0 16px 0;

  @media(min-width:1200px) {
    margin: 0 20px 0 0;
  }
`

/* Body page */

export const ListContainer = styled.ul`
  li {
    
  }
`
