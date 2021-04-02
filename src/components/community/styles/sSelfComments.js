import styled from 'styled-components'
import { CommentContainer, Comment } from './sOtherComments'

export const CommentContainerStyled = styled(CommentContainer)`
  justify-content: flex-end;

  img {
    background: red;
    margin: 0 0 0 10px;
  }

  h6 {
    text-align: end;
  }
`

export const CommentStyled = styled(Comment)`
  flex: 0 1 auto;
`
