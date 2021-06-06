import styled from 'styled-components'

export const CardContainer = styled.li`
  background: rgba(4, 6, 28, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 28px 10px;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(5) {
    margin: 0;
  }

  svg {
    width: 23px;
    height: 23px;
    margin: 0 0 0 14px;
    fill: gray;
  }

  input[type=radio] {
/*     appearance: none;
    margin: 0;
    position: absolute; */
  }

  input:checked {
    fill: red;
  }
`
