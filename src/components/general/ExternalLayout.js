import React from 'react'
import HeaderLP from './HeaderLP'
import RegHeader from './RegHeader'
import { useLocation } from 'react-router-dom'

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