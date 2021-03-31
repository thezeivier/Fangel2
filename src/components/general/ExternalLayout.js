import React from 'react'
import HeaderLP from './HeaderLP'

const ExternalLayout = ({children}) => {
  return(
    <>
      <HeaderLP/>
      {children}
    </>
  )
}

export default ExternalLayout