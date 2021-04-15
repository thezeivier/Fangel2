import styled, { css } from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'
import { SubtitleStyled } from './../../../pages/signInAndUp/styles/sGlobalForm'

export const NumberCheckContainer = styled.div`
  position: sticky;
  border-radius: 20px;
  padding: 8px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: #ff0000c7;
  color: white;
  top: 20px;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.weight.medium};
  font-size: 1.05em;

  span {
    font-weight: ${props => props.theme.weight.regular};
    margin: 0 4px 0 0
  }

  p {
    margin: 2px 0 0 0;
  }

  @media(min-width:786px) {
    font-size: 1.17em;
    padding: 8px 10px;
  }
`

export const SubtitleStyledBackground = styled(SubtitleStyled) `
  margin: -140px 0 10px 0;
  text-align: center;
  padding: 100px 0 0 0;
  position: relative;
  background: ${props => props.theme.backgroundHeader};
  z-index: 2000;

  @media(min-width:786px) {
    background: transparent;
  }
`


export const CardsContainer = styled.div`
  margin: 40px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media(min-width:768px) {
    gap: 40px;
  }

  @media(min-width:1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(min-width:1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
  }
`

export const LabelStyled = styled.label`
  input[type="checkbox"] {
    display: none;
    will-change: transform;
  }
  
  ${({active}) => 
      active &&
      css`
        [type="checkbox"]:checked + .cardQuiz {
          /* filter: drop-shadow(0px 0px 8px ${props => props.theme.colorShadow}); */
          transform: scale(1.055);
          border: 5px solid #2aa0c3;
          font-size: 1.182em;
          filter: none;

          h5 {
            background: #1a94b908;
          }
        }
      `
  }

`

export const Card = styled.div`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  border-radius: 4px;
  position: relative;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.45));
  cursor: pointer;
  transition: all .2s;
  will-change: transform;

  &:hover,
  &:active {
    transform: scale(1.075);
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.78));
    color: white;
    font-size: 1.195em;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  h5 {
    font-family: ${props => props.theme.secondaryFont};
    color: ${props => props.theme.colorWhite};
    font-size: 1.08em;
    font-weight: ${props => props.theme.weight.regular};
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    line-height: 1.701em;

    @media(min-width:1024px) {
      font-size: 1.18em;
    }
  }
`

export const ButtonStyled = styled(Button) `
  margin: 60px auto 0 auto;
  width: min-content;
`
