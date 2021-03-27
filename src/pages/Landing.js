import React from 'react'
import LadingPageMain from './../components/landingPage/LadingPageMain'
import HeaderLP from './../components/general/HeaderLP'

const Landing = ({changeTheme}) =>{
  return(
    <>
      <HeaderLP changeTheme={changeTheme}/>
      <LadingPageMain />
    </>
  )
}

export default Landing