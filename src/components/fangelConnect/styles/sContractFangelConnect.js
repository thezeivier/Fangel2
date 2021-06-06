import styled, { css } from 'styled-components'
import { ButtonsContainer } from './../../dashboard/styles/sModalCloseSpace'

export const ContainerFCGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;

  ${props => props.withPosition && css`
    position: relative;
    top: 120px;
  `}

  p {
    text-align: center;
  }

  @media(min-width:414px) {
    ${props => props.withPosition && css`
      top: 110px;
  `}
  }

  @media(min-width:768px) {
    width: 550px;
  }

  @media(min-width:1200px) {
    ${props => props.withPosition && css`
      top: 165px;
  `}
  }
`

export const ContainerCards = styled.ul`
  margin: 30px 0 0 0;
  width: -webkit-fill-available;

  @media(min-width:768px) {
    width: 80%;
  }
`

export const ButtonsContainerStyled = styled(ButtonsContainer)`
  padding-bottom: 30px;

  @media(min-width:1200px) {
    padding-bottom: 80px;
  }
`
