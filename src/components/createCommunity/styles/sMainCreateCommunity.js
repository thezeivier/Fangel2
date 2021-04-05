import styled, { css } from 'styled-components'
import { Input, svgMixin } from './../../../themes/externalRecyclableStyles'
import { Comment } from './../../settingsForAdmin/styles/sMainSettings'

export const InputStyled = styled(Input)`
  margin: 0 0 20px 0;

  ${props => props.primary && css`
    margin:  0 20px 0;
  `}
`

export const Form = styled.form`
  display: flex;
  align-items: center;

  ${svgMixin};

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
