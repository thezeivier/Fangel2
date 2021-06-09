import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 40px 30px;
  background: ${props => props.theme.colorModalBackground};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 58px;
    height: 58px;
    margin: 0 0 12px 0;
  }

  h3 {
    font-size: 1.53em;
    text-align: center;
    margin: 0 0 20px 0;
  }

  p {
    text-align: center;
    line-height: 1.5em;
  }

  .fangelConnectLanding {
    fill: #E9760D;
    color: #E9760D;
  }

  .SpaceLanding {
    fill: #56CCF2;
    color: #56CCF2;
  }
`
