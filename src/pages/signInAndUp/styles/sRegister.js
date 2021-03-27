import styled from 'styled-components'

export const Description = styled.h6`
  font-family: ${props => props.theme.secondarFont};
  color: ${props => props.theme.smallText};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 11px;
  line-height: 17px;

  @media(min-width: 1100px){
    font-size: 12px;
    line-height: 17px;
  }
`