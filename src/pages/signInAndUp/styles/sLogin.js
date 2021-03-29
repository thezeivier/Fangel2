import styled from 'styled-components'

export const LinkRecoveryPasssword = styled.div`
  margin: -4px 0 30px 0;
  font-family: ${props => props.theme.secondarFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.light};
  font-size: 0.98em;
  width: -webkit-fill-available;
  text-align: right;

  @media(min-width: 768px){
    margin: 0 0 35px 0;
  }

  @media(min-width: 1024px){
    margin: 0 0 40px 0;
  }

  a {
    color: ${props => props.theme.colorbrandSolid};
    cursor: pointer;
    width: max-content;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`
