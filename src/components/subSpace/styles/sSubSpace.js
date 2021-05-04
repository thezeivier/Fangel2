import styled, { css } from 'styled-components'

const CardMixin = css`
  border-radius: 10px;
  display: flex;
  height: 80px;
  transition: .2s;
  cursor: pointer;

   @media(min-width:768px) {
    height: 90px;
  }

  @media(min-width:1200px) {
    height: 100px;
  }
`

const ClampMixin = css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

export const GridCardsContainer = styled.ul`
  @media(min-width:768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px;
  }

  @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 35px;
  }
`

//SubSpaceAddCard

export const SubSpaceAddCardContainer = styled.li`
  background: ${props => props.theme.colorAddCard};
  box-shadow: 0px 0px 8px ${props => props.theme.colorAddCardHover};
  justify-content: center;
  align-items: center;
  ${CardMixin}

  svg {
    fill: ${props => props.theme.colorWhite};
    width: 25px;
    height: 25px;
    margin: 0 5px 4px 0;
  }

  p {
    font-size: 1.1em;
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colorbrandSolid};
      transform: scale(1.04);
    }

    p {
      color: ${props => props.theme.colorbrandSolid};
    }
  }

  @media(min-width:1200px) {
    svg {
      width: 27px;
      height: 27px;
      margin: 0 5px 5px 0;
    }

    p {
      font-size: 1.12em;
    }
  }
`

//SubSpaceCard

export const SubSpaceCardContainer = styled.li`
  background: rgba(39, 174, 96, 0.08);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
  margin: 20px 0 0 0;
  border-left: 10px solid rgba(39, 174, 96);
  padding: 20px 14px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  ${CardMixin}

  h4 {
    font-size: 1.1em;
    font-weight: ${props => props.theme.weight.semiMedium};
    margin: 0 0 8px 0;
    ${ClampMixin}
  }

  p {
    color: ${props => props.theme.textColor + 'd6'};
    font-weight: ${props => props.theme.weight.light};
    font-size: 0.98em;
    ${ClampMixin}
  }

  @media(min-width:768px) {
    margin: 0;
    padding: 20px 15px;
  }

   @media(min-width:1200px) {
    h4 {
      font-size: 1.08em;
      margin: 0 0 10px 0;
    }

    p {
      font-size: 0.95em;
    }
  }
`
