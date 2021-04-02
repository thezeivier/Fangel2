import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  margin: 0 0 12px 0;

  img {
    width: 25px;
    height: 25px;
    margin: 0 10px 0 0;
    background: gray;
    border-radius: 50%;
    flex: 0 0 auto;
    line-height: 0;
  }

  h6 {
    margin: 0 0 6px 0;
    font-size: 1em;
    font-weight: ${props => props.theme.weight.medium};
  }

  p {
    line-height: 1.67em;
  }
`

export const Comment = styled.div`
  background: ${props =>props.theme.inputForm};
  border-radius: 4px;
  padding: 8px 15px;
  width: max-content;
`
