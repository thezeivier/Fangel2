import React from 'react'
import {useHistory} from 'react-router-dom'
import LadingPageMain from './../components/landingPage/LadingPageMain'
import HeaderLP from './../components/general/HeaderLP'
import styled from 'styled-components'

const FormatLogo = styled.div`
  h3,
  span {
    color: ${props => props.theme.colorWhite} !important;
  }
  
  svg {
    fill: ${props => props.theme.colorWhite} !important;
  }
`

const Landing = () =>{
  let history = useHistory();
  if(window.location.pathname === "/settings"){ //Quit delay to logout.
    history.push("/")
  }
  return(
    <>
      <FormatLogo>
        <HeaderLP/>
      </FormatLogo>
      <LadingPageMain />
    </>
  )
}

export default Landing