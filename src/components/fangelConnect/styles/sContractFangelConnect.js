import styled from 'styled-components'

export const ContainerFCGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;

  p {
    text-align: center;
  }

  @media(min-width:768px) {
    width: 550px;
  }
`

export const ContainerCards = styled.ul`
  margin: 30px 0 0 0;
  width: -webkit-fill-available;
`
