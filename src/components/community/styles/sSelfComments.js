import styled from 'styled-components'
import { CommentContainer, Comment } from './sOtherComments'

export const CommentContainerStyled = styled(CommentContainer)`
  justify-content: flex-end;

  img {
    background: red;
    margin: 0 0 0 10px;
    width: 30px;
    height: 30px;
  }

  h6 {
    text-align: end;

    @media(min-width:1200px) {
      font-size: 0.95em;
    }
  }

  p {
    @media(min-width:1200px) {
      font-size: 0.88em;
    }
  }
`

export const CommentStyled = styled(Comment)`
  flex: 0 1 auto;
`
