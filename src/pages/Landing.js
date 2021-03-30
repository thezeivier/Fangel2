import React from 'react'
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