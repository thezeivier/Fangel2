import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: 1 0 auto;
    margin: 92px 0 0 0;

    @media(min-width:768px) {
      margin: 120px 15% 0 15%;
    }

    @media screen and (min-width: 768px) and (orientation : landscape) {
      margin: 120px 8% 0 8%;
    }

    @media(min-width:1200px) {
      margin: 120px 0 0 0;
    }
  }
`
