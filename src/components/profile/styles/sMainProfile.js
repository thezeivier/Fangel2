import styled, { css } from 'styled-components'
import { Button, Input, svgMixin  } from './../../../themes/externalRecyclableStyles'

export const UserContainer = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width:1024px) {
    margin: 0 0 30px 0;
  }

  img {
    border-radius: 100%;
    height: 76px;
    width: 76px;
    margin: auto;
    object-fit: cover;
  }

  svg {
    height: 80px;
    width: 80px;
    fill: ${props => props.theme.colorIcon};
  }

  h4 {
    font-size: 1.5em;
    text-align: center;
    margin: 10px 0 0 0;
  }
`

export const ButtonAccion = styled(Button)`
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
    width: 21px;
    height: 21px;
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

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0 50px 0;

  p {
    margin: 0 0 20px 0;
    text-align: center;
    line-height: 1.7em;
  }

  @media(min-width:768px) {
    margin: 40px 0 0 0;
  }
`

export const InputStyled = styled(Input)`
  margin: 0 10px;
  width: fit-content;
  text-align: center;
  letter-spacing: 1px;
  padding: 20px 21px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(min-width:768px) {
    flex-direction: row;
  }

  ${svgMixin};

  label {
    margin: 0 0 10px 0;

    @media(min-width:768px) {
      margin: 0 10px 0 0;
      width: max-content;
    }
  }

  svg {
    width: 34px;
    display: none;

    @media(min-width:768px) {
      display: block;
    }
  }
`

export const CommentSVGContainer = styled.div`
  position: relative;
`

export const CommentStyled = styled(Comment)`
  font-size: 0.8em;
  top: 40px;
`