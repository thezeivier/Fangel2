import styled, { css } from 'styled-components'

export const Header = styled.header`
  position: fixed;
  width: -webkit-fill-available;
  z-index: 1000;
`

export const Container = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  justify-content: space-between;

  @media(min-width:768px) {
    padding: 5% 0 0 0;
  }

  @media(min-width:1024px) {
    padding: 3% 0 0 0;
  }

  @media(min-width:1200px) {
    padding: 30px 0 0 0;
  }

`
