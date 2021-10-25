import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.theme.background};
  color:${props => props.theme.textColor};
  height: 100%;
  width: 98vw;
  overflow-y: none;

  @media(min-width:1200px) {
    width: calc(100vw - 10px);
  }
`

export default Container