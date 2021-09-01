import styled from 'styled-components'

export const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  row-gap: 30px;

  @media(min-width:768px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`

export const Label = styled.label`
  width: -webkit-fill-available;
  height: 150px;
  display: block;
  
  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  .contentButton {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colorModalBackground};
    border-radius: 10px;
    transition: .2s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 4px ${props => props.colorBackground};
      color: ${props => props.colorBackground};

      svg {
        fill: ${props => props.colorBackground};
      }
    }
  }

  svg {
    fill: ${props => props.theme.textColor};
    width: 38px;
    height: 38px;
    margin: 0 0 10px 0;
  }

  p {
    font-family: ${props => props.theme.textButton};
    font-size: 1.35em;
    font-weight: ${props => props.theme.weight.semiMedium};
  }

  @media(min-width:768px) {
    height: 170px;

    svg {
      width: 34px;
      height: 34px;
      margin: 0 0 15px 0;
    }

    p {
    font-size: 1.05em;
  }
  }
`
