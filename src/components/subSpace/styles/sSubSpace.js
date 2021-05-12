import styled, { css } from 'styled-components'
import { ButtonStyled } from './../../../pages/signInAndUp/styles/sGlobalForm'

const CardMixin = css`
  border-radius: 10px;
  display: flex;
  height: 95px;
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
  position: relative;
  ${CardMixin}

  h4 {
    font-size: 1.1em;
    font-weight: ${props => props.theme.weight.semiMedium};
    margin: 0 0 8px 0;
    font-family: ${props => props.theme.secondaryFont};
    ${ClampMixin}
  }

  span {
    font-size: 0.9em;
    color: ${props => props.theme.smallText};
  }

  .numberPeopleSVG {
    margin: 0 5px 0 0;
    fill: ${props => props.theme.smallText};
  }

  .menuCardSVG {
    position: absolute;
    fill: ${props => props.theme.textColor};
    top: 14px;
    right: 12px;
  }

  .activeMenuCard {
    fill: ${props => props.theme.textColorInvert};
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
  }
`

export const SubspaceDescriptionContainer = styled.div`
  height: inherit;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 20px 20px;
}
`

export const MenuCardContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${props => props.theme.textColor};
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 10px 20px;
  width: 70%;
  height: 57%;
  display: flex;
  align-items: center;
  font-size: 1.05em;

  p {
    color: ${props => props.theme.textColorInvert};
  }
`

export const SaveContainer = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 0.95em;
  color: rgba(39, 174, 96);
  font-weight: ${props => props.theme.weight.semiMedium};
`

//CreateSubSpace

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h3 {
    text-align: center;
  }

  form {
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
`


export const ButtonStyledSP = styled(ButtonStyled) `
  margin: 0 auto;
`
