import React from 'react'
import HeaderLP from './HeaderLP'

const ExternalLayout = ({changeTheme, children}) => {
  return(
    <>
      <HeaderLP changeTheme={changeTheme}/>
      {children}
    </>
  )
}

export default ExternalLayout