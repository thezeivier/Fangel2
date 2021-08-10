import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  margin: 0 0 12px 0;

  @media(min-width:768px) {
    margin: 0 0 14px 0;
  }

  img {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
    background: gray;
    border-radius: 50%;
    flex: 0 0 auto;
    line-height: 0;
  }

  h6 {
    margin: 0 0 3px 0;
    font-size: 1em;
    font-weight: ${props => props.theme.weight.medium};
    text-align: start;

    @media(min-width:1200px) {
      font-size: 0.95em;
    }
  }

  p {
    line-height: 1.67em;
    text-align: start;
    word-break: break-word;

    @media(min-width:1024px) {
      font-weight: ${props => props.theme.weight.light};
    }

    @media(min-width:1200px) {
      font-size: 0.88em;
    }
  }
`

export const Comment = styled.div`
  background: ${props => props.color + '10'};
  border-radius: 15px 15px 15px 0;
  padding: 10px 15px;
  width: max-content;

  @media(min-width:1200px) {
    padding: 13px 16px;
    max-width: 265px;
  }
`

export const UserName = styled.h6`
  text-align: end;
  color: ${props => props.color};

  @media(min-width:1200px) {
    font-size: 0.95em;
  }
`
