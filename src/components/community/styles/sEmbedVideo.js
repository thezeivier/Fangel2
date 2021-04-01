import styled from 'styled-components'

export const VideoContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
`

export const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const CountContainer = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  background: ${props => props.theme.inputForm};
  width: max-content;
  position: absolute;
  top: 10px;
  right: 20px;

  span {
    font-weight: ${props => props.theme.weight.light};
    margin: 0 4px 0 0;
    font-size: 0.85em;
  }
`
