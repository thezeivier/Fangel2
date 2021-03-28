import React from 'react'
import HeaderLP from './HeaderLP'
import styled from 'styled-components'


const ExternalLayout = ({changeTheme, children}) => {
  return(
    <>
      <HeaderLP changeTheme={changeTheme}/>
      {children}
    </>
  )
}

export default ExternalLayout