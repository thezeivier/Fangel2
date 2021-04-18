import styled from 'styled-components'
import { PrimaryTitle } from './../../../themes/externalRecyclableStyles'

export const VideoContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 2000;
  width: 80%;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.32);
  background: ${props => props.theme.colorDark};
  transition: .2s;

  &:hover > .svgsContainer {
    svg {
      display: block;
    }
  }

  @media(min-width:768px) {
    width: 67%;
    right: 20px;
    bottom: 20px;
  }

  @media(min-width:1024px) {
    width: 50%;
  }

  @media(min-width:1200px) {
    width: 400px;
  }
`

export const SvgsContainer = styled.div`
  position: absolute;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  fill: ${props => props.theme.colorWhite};
  z-index: 2100;

  svg {
    cursor: pointer;
  }

  .fullScreenSvg {
    margin: 2px 0 0 5px;
  }

  @media(min-width:768px) {
    margin: 10px;
  }

  @media(min-width:1200px) {
    svg {
      display: none;
    }
  }
`

export const TitleStyled = styled(PrimaryTitle)`
  color: ${props => props.theme.colorWhite};
  font-size: 1.1em;
  font-weight: 400;
  margin: 10px 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  font-family: ${props => props.theme.secondaryFont};

  @media(min-width:768px) {
    margin: 15px 10px;
  }
`
