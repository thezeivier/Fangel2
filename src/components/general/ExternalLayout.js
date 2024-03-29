import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderLP from './HeaderLP'
import RegHeader from './RegHeader'

const ExternalLayout = ({children, authState}) => {
  return(
    <React.Fragment>
      {
        authState?
        <RegHeader/>:
        <HeaderLP/>
      }
      {children}
    </React.Fragment>
  )
}

export default ExternalLayout