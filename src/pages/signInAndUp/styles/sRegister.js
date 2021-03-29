import styled from 'styled-components'

export const Description = styled.h6`
  font-family: ${props => props.theme.secondarFont};
  color: ${props => props.theme.smallText};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 0.8em;
  line-height: 1.8em;
  margin: -10px 4px 30px 4px;
  text-align: start;

  @media(min-width: 768px){
    margin: -10px 4px 35px 4px;
  }

  @media(min-width: 1024px){
    margin: -10px 4px 40px 4px;
  }
`

export const Contract = styled.p`
  font-family: ${props => props.theme.secondarFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 0.975em;
  line-height: 1.7;
  margin: 0 0 40px 0;

  @media(min-width: 768px){
    margin: 0 0 45px 0;
  }

  @media(min-width: 1024px){
    margin: 0 0 50px 0;
  }

  a {
    color: ${props => props.theme.colorbrandSolid};
    cursor: pointer;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`
