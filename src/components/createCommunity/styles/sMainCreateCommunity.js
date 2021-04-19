import styled, { css } from 'styled-components'
import { Input, svgMixin } from './../../../themes/externalRecyclableStyles'
import { Comment } from './../../settingsForAdmin/styles/sMainSettings'

export const InputStyled = styled(Input)`
  margin: 0 0 20px 0;

  ${props => props.primary && css`
    margin: 0 20px 0;
  `}
`

export const Form = styled.form`
  display: flex;
  align-items: center;

  ${svgMixin};

  label {
    margin: 0 10px 0 0;
  }

  svg {
    margin: 0 0 15px 0;
    width: 34px;
  }
`

export const CommentSVGContainer = styled.div`
  position: relative;
`

export const CommentStyled = styled(Comment)`
  font-size: 0.8em;
  top: 40px;
`

export const FieldSet = styled.fieldset`
  display:flex;
  flex-direction: column;
  border: none;
  margin: 14px 0 14px 0;

  .radiosContainerFlex__item {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all .25s;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
    
    .rCCheckmark {
      position: absolute;
      top: -1px;
      left: 4px;
      height: 1.2em;
      width: 1.2em;
      background-color: #00000045;
      border-radius: 50%;
      border: 1px solid ${props => props.theme.colorBrandTransparent};
      transition: all .25s;
    }

    &:hover input ~ .rCCheckmark {
      background-color: #0000005c;
      border: 1px solid ${props => props.theme.colorbrandSolid};
    }

    & input:checked ~ .rCCheckmark {
      background-color: ${props => props.theme.colorbrandSolid};
    }

    .rCCheckmark:after {
      content: "";
      display: none;
      position: absolute;
    }

    & input:checked ~ .rCCheckmark:after {
      display: block;
    }

    & .rCCheckmark:after {
      top: 1px;
      left: 1.4px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: ${props => props.theme.backgroundHeader};

      @media(min-width:768px) {
        top: 2px;
        left: 2.4px;
        width: 12px;
        height: 12px;
      }
    }
  }

  label {
    span {
      color: ${props => props.theme.smallText};
      font-size: .95em;
      line-height: 1.65em;
    }

    &:nth-child(1) {
      margin: 0 0 10px 0;
    }
  }
`
