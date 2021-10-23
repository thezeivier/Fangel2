import styled, { css } from 'styled-components'

export const TitleOnlyDesktopContainer = styled.div`
  display: none;

  @media(min-width:1200px) {
    display: flex;
    margin: 0 0 20px 0;
    position: relative;

    svg {
      margin: 0 10px 0 0;
      fill: ${props => props.theme.textColor};
    }

    h3 {
      font-weight: ${props => props.theme.weight.semiMedium};
      font-size: 1.5em;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      width: 530px;
    }
  }
`

export const DescripcionContainer = styled.div`
  margin: 6px 0 0 0;
  display: flex;
  align-items: center;
`

export const ButtonLeaveContainer = styled.div`
  position: absolute;
  right: 0;
`

export const VideoContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
`

export const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  .watermark {
    display: none !important;
    visibility: hidden !important;
  }

  .subject-text {
    display: none !important;
    visibility: hidden !important;
  }

  @media(min-width:1200px) {
    border-radius: 10px;
  }

  iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media(min-width:1200px) {
    padding-bottom: 45.85%;
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
    color: ${props => props.theme.colorWhite};
  }

  @media(min-width:1200px) {
    top: 60px;
  }
`
