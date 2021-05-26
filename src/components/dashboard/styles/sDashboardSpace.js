import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

//MainDashboardSpaces

export const SpacesSection = styled.section`
  margin: 0 0 20px 0;

  @media(min-width:76px) {
    margin: 0 0 22px 0;
  }

  @media(min-width:1200px) {
    width: 700px;
    margin: 0 0 25px 0;
  }
`

//DbSpaceCard

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:nth-child(n) {
    margin: 15px 0 0 0;
  }

  &:nth-child(1) {
    margin: 0;
  }

  @media(min-width:1200px) {
    &:nth-child(n) {
      margin: 25px 0 0 0;
    }

    &:nth-child(1) {
      margin: 0;
    }
  }
`

export const SVGContainerComPrivate = styled.div`
  background: #393F4E;
  border-radius: 10px 0px 0px 10px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;

  svg {
    width: 38px;
  }

  @media(min-width:768px) {
    width: 115px;

    svg {
      width: 48px;
    }
  }

  @media(min-width:1200px) {
    width: 150px;
  }
`

export const SpaceCard = styled.div`
  width: 100%;
  background: ${props => props.theme.cardComunity};
  border-radius: 10px;
  height: 80px;
  display: flex;
  transition: .4s;

  &:hover {
    background: ${props => props.theme.cardHoverComunity};
  }

  img {
    height: inherit;
    width: 80px;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
    flex: 0 0 auto;
  }

  @media(min-width:768px) {
    height: 115px;

    img, svg {
      width: 115px;
    }
  }

  @media(min-width:1200px) {
    height: 150px;

    img, svg {
      width: 150px;
    }
  }
`

export const DescriptionContainer = styled.div`
  margin: 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${props => props.theme.secondaryFont};
  cursor: pointer;

  h3, p {
    display: -webkit-box;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }

  h3 {
    font-weight: 500;
    margin: 0 0 7px 0;
    -webkit-line-clamp: 1;
    color: ${props => props.theme.textColor};
  }

  p {
    -webkit-line-clamp: 2;
    font-weight: 300;
    line-height: 1.4em;
    font-size: .98em;
    color: ${props => props.theme.textColor + 'd1'};
  }

  @media(min-width:768px) {
    margin: 15px 20px;

    p {
      line-height: 1.45em;
    }
  }

   @media(min-width:1200px) {
    margin: 28px;

    p {
      line-height: 1.48em;
    }
  }
`

export const ButtonStyled = styled(Button)`
  margin: 10px 0 0 0;
`
