import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: 1 0 auto;
    margin: 92px 0 0 0;
    position: relative;

    @media(min-width:768px) {
      margin: 120px 15% 0 15%;
    }

    @media screen and (min-width: 768px) and (orientation : landscape) {
      margin: 120px 8% 0 8%;
    }

    @media(min-width:1200px) {
      margin: 110px 0 0 0;
    }
  }

  ${props => props.padding40 && css`
    main {
      padding: 0 0 50px 0;

      @media(min-width:1200px) {
        padding: 0;
      }
    }
  `}
`

export const ContainerForCommunity = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (orientation : portrait) {
    height: 100vh;
  }

  @media (orientation : landscape) {
    height: 100%;
  }
  
  main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    @media(min-width:1200px) {
      margin: 15px 140px 0 170px;
      padding: 0px;
      display: grid;
      grid-template-columns: auto max-content;
      column-gap: 15px;
    }

/*     .mainWrapper {
      @media(min-width:410px) {
        padding: 0;
      }
    } */
  }

  footer,
  .regHeader {
    display: none;

    @media(min-width:1200px) {
      display: block;
    }
  }
`
