import styled from 'styled-components'

export const AddCardContainer = styled.div`
  background: ${props => props.theme.colorAddCard};
  border-radius: 4px;
  box-shadow: 0px 0px 8px ${props => props.theme.colorAddCardHover};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  height: 100%;
  min-height: 172px;
  max-height: 305px;
  cursor: pointer;

  &:hover {
    svg {
      fill: ${props => props.theme.colorbrandSolid};
      transform: scale(1.14);
    }

    span {
      color: ${props => props.theme.colorbrandSolid};
    }
  }

  svg {
    transition: all .2s;
    will-change: transform;
    fill: ${props => props.theme.textColor};
    width: initial;
  }

  span {
    transition: all .2s;
    color: ${props => props.theme.textColor};
    font-style: normal;
    font-weight: ${props => props.theme.weight.semiMedium};
    font-size: 1.5em;
  }
`

export const EndCercle = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 50%;
  margin: 50px auto 0 auto;
`
