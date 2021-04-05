import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 12px 0 0;
    width: min-content;
    font-size: 0.875em;
    font-weight: ${props => props.theme.weight.light};
    cursor: default;
  }

  .checkbox {
    display: none;
  }

  .checkbox:checked ~ .switch::before {
    transform: translateX(0px);
  }

  .switch {
    height: 25px;
    display: block;
    border-radius: 20px;
    background: ${props => props.theme.colorbrandSolid};
    width: 42px;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
  }

  .switch::before {
    content: "";
    display: block;
    width: 21px;
    height: 21px;
    background: ${props => props.theme.background};
    border-radius: 50%;
    transform: translateX(17px);
    transition: .3s;
    will-change: transform;
  }

  @media(min-width:768px) {
    span {
      margin: 0 16px 0 0;
      font-size: 0.89em;
      width: max-content;
    }
  }
`
