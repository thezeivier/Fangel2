import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.theme.background};
  color:${props => props.theme.textColor};
  height: 100%;

  @media(min-width:768px) {
    height: 100vh;
  }
`

export default Container