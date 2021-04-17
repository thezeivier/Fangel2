import styled, { css } from 'styled-components'
import { SecondaryTitle, Input, Button } from './../../../themes/externalRecyclableStyles'

export const DisplayContainer = styled.div`
  display: ${props => props.inDesktop ? 'none' : `${props.inDesktop}`};

  @media(min-width:1200px) {
    display: ${props => props.inDesktop ? `${props.inDesktop}` : 'none'}; //grid
    display: grid;
    grid-template-columns: 51% 1fr;
    column-gap: calc(7% + 40px);
    margin: 100px 0 0 0;
  }
`

export const SectionContainer = styled.section`
  margin: 30px 0;

  @media(min-width:1200px) {
    margin: 0 0 40px 0;
  }
`

export const SubtitleStyled = styled(SecondaryTitle)`
  margin: 0 0 20px 0;
  font-size: 1.4em;

  span {
    font-weight: ${props => props.theme.weight.light};
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    margin: 0 0 0 10px;


    svg {
      fill: ${props => props.theme.textColor};
      width: 36px;
      transition: .2s;

      &:hover {
        cursor: pointer;
        fill: ${props => props.theme.colorbrandSolid};
      }
    }
  }
`

export const ButtonStyled = styled(Button)`
  position: relative;

  @media(min-width:768px) {
    width: initial;
    margin: 0 auto;
  }
`


export const InputStyled = styled(Input)`
  width: max-content;
  flex: 1 0 auto;
  text-align: center;
  letter-spacing: 0.04em;

  &::placeholder {
    color: ${props => props.theme.colorbrandSolid};
  }
`

export const TimerDescripcion = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 25px 0;

  span {
    color: ${props => props.theme.colorbrandSolid};
    font-weight: ${props => props.theme.weight.semiMedium};
  }
`

export const Comment = styled.div`
  display: none;

  @media(min-width:1200px) {
    display: block;
    position: absolute;
    background: black;
    color: ${props => props.theme.colorWhite};
    padding: 10px 20px;
    border-radius: 2px;
    width: max-content;
    right: -40px;
    font-family: ${props => props.theme.secondaryFont};
  }
`
