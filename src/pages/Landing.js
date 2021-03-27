import React from 'react'
import LadingPageMain from './../components/landingPage/LadingPageMain'
import HeaderLP from './../components/general/HeaderLP'
import styled from 'styled-components'

const FormatLogo = styled.div`
  h3,
  span {
    color: ${props => props.theme.colorWhite} !important;
  }
`

const Container = styled.div`
  background: ${props => props.theme.background};
`

const Landing = ({changeTheme}) =>{
  return(
    <Container>
      <FormatLogo>
        <HeaderLP changeTheme={changeTheme}/>
      </FormatLogo>
      <LadingPageMain />
    </Container>
  )
}

export default Landing