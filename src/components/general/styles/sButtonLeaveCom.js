import styled from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'

export const ButtonStyled = styled(Button)`
  width: auto;
  background: #eb444436;
  color: #eb4444e0;
  padding: 10px 14px;
  font-size: 1.1em;
  display: ${props => props.displayDesktop ? 'none' : 'flex'};
  transition: .2s;

  &:hover {
    background: #eb444440;
    color: ${props => props.theme.colorAlert};
  }

  @media(min-width:768px) {
    padding: 15px 25px;
  }

  @media(min-width:1200px) {
    display: ${props => props.displayDesktop ? 'flex' : 'none'};
    padding: 12px 26px;
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
