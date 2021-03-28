import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

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

  [type="checkbox"]:checked + .cardQuiz {
    filter: drop-shadow(0px 0px 8px ${props => props.theme.colorShadow});
    transform: scale(1.075);
    font-size: 1.182em;
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
