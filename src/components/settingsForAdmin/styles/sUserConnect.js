import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colorLine};
  padding: 0 0 10px 0;
  margin: 0 0 19px 0;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 8px 0;

  img {
    width: 25px;
    height: 25px;
    background: gray;
    border-radius: 50%;
    margin: 0 10px 0 0;
  }

  h6 {
    font-size: 1.15em;
    font-weight: ${props => props.theme.weight.regular};
    font-family: ${props => props.theme.secondaryFont};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    max-width: 100px;
  }
`

export const VideoSvgsContainer = styled.div`
  margin: 0 20px;
  flex: 1 0 auto;

  svg {
    width: 22px;
    fill: ${props => props.theme.textColor};
  }

  .cameraSVG {
    margin: 0 15px 0 0;
  }
`
