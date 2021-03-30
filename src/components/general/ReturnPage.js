import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeftSVG } from './icons/arrowLeft.svg'

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 0 0;
  color: ${props => props.theme.colorbrandSolid};
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;

  &:active,
  &:focus {
    text-decoration: underline;
  }

  svg {
    fill: ${props => props.theme.colorbrandSolid};
  }

  @media(min-width:768px) {
    margin: 80px 0 0 0;
  }

  @media(min-width:1200px) {
    display: none;
  }
`

const ReturnPage = ({ to }) => {
  return (
    <LinkContainer as={Link} to={to}>
      <ArrowLeftSVG />
      <span>Regresar</span>
    </LinkContainer>
  );
}

export default ReturnPage;
