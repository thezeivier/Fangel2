import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

export const UserContainer = styled.div`
  margin: 0 0 20px 0;

  @media(min-width:1024px) {
    margin: 0 0 30px 0;
  }

  svg {
    height: 80px;
    fill: ${props => props.theme.colorIcon};
  }

  h4 {
    font-size: 1.5em;
    text-align: center;
    margin: 10px 0 0 0;
  }
`

export const AddPhotoContainer = styled(Button)`
  padding: 10px 15px;
  width: initial;
  background: ${props => props.theme.inputForm};
  color: ${props => props.theme.textColor};
  font-weight: ${props => props.theme.weight.regular};
  font-size: 1.1em;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.weight.light};
  height: 42px;
  margin: 10px auto 20px auto;
  transition: all .2s;

  svg {
    fill: ${props => props.theme.colorIcon};
    margin: 0 10px 0 0;
  }

  &:active,
  &:focus,
  &:hover {
    span {
      color: ${props => props.theme.colorHoverIcon};
    }

    svg {
      fill: ${props => props.theme.colorHoverIcon};
    }
  }

  @media(min-width:1024px) {
    margin: 15px auto 25px auto;
    font-size: 1em;
  }

`

export const ListTags =styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width:1024px) {
    width: 400px;
    margin: 0 auto;
  }
`

export const ButtonStyled = styled(Button)`
  padding: 7px 25px;
  width: initial;
  font-size: 1em;
  margin: 5px;
  font-weight: ${props => props.theme.weight.regular};
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  cursor: default;

  &:hover,
  &:active,
  &:focus {
    background: ${props => props.color + '15'};
  }
`
