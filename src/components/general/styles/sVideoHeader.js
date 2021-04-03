import styled, { css } from 'styled-components'
import { SecondaryTitle } from './../../../themes/externalRecyclableStyles'

export const HeaderContainer = styled.div`
  display: flex;
  width: -webkit-fill-available;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colorLine};
  flex: 0 0 auto;

  svg {
    fill: ${props => props.theme.textColor};
  }

  @media(min-width:410px) {
    padding: 12px 30px;
  }

  @media(min-width:768px) {
    padding: 20px 5%;
  }

  @media(min-width:1024px) {
    padding: 25px 5%;
  }

  @media(min-width:1200px) {
    display: none;
  }
`

export const TitleCommunityStyled = styled(SecondaryTitle)`
  width: -webkit-fill-available;
  text-align: start;
  padding: 0 10px;
  font-size: 1.29em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

export const ContainerSVG = styled.div`
  button {
    background: transparent;
    border: none;
  }

  .svgOnlyMobile {
    display: ${props => props.display || 'block'};
  }

  .svgCloseOnlyMobile {
    display: ${props => props.isSettings || 'block'};
  }
`
