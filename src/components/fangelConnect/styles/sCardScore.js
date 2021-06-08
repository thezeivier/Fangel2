import styled from 'styled-components'

export const CardContainer = styled.fieldset`
  background: ${props => props.theme.cardScore};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  padding: 28px 10px;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;

  &:nth-child(5) {
    margin: 0;
  }

  svg {
    width: 23px;
    height: 23px;
    margin: 0 0 0 14px;
    cursor: pointer;
    fill: gray;
  }

  input[type=radio] {
    appearance: none;
    margin: 0;
    position: absolute;
  }

  input:checked ~ .annoyed {
    fill: #EB4444;
  }

  input:checked ~ .sad {
    fill: #18B284;
  }

  input:checked ~ .sceptic {
    fill: #BB6BD9;
  }

  input:checked ~ .happy {
    fill: #E9760D;
  }

  @media(min-width:414px) {
    padding: 32px 15px;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media(min-width:768px) {
    padding: 32px 20px;

    svg {
      width: 30px;
      height: 30px;
      margin: 0 0 0 20px;
    }
  }

  @media(min-width:1200px) {
    margin: 0 0 25px 0;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`
