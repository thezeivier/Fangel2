import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

export const ButtonStyled = styled(Button)`
  width: auto;
  background: #7d757547;
  color: ${props => props.theme.smallText};
  padding: 10px 14px;
  font-size: 1.1em;
  display: ${props => props.displayDesktop ? 'none' : 'flex'};
  transition: .2s;

  &:hover {
    color: ${props => props.theme.textColor};
    /* background: ${props => props.theme.inputForm}; */
  }

  @media(min-width:768px) {
    padding: 15px 25px;
  }

  @media(min-width:1200px) {
    display: ${props => props.displayDesktop ? 'flex' : 'none'};
    padding: 14px 27px;
    height: max-content;
  }

  svg {
    width: 22px !important;
    height: 22px;
    color: ${props => props.theme.smallText};

    @media(min-width:1200px) {
      width: 28px !important;
      height: 28px;
    }
  }
`
