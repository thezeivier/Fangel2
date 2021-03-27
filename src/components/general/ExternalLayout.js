import React from 'react'
import HeaderLP from './HeaderLP'
import styled from 'styled-components'

const ExternalLayoutWrapper = styled.div`
  background: ${props => props.theme.background};
`

const ExternalLayout = ({changeTheme, children}) => {
  return(
    <ExternalLayoutWrapper>
      <HeaderLP changeTheme={changeTheme}/>
      {children}
    </ExternalLayoutWrapper>
  )
}

export default ExternalLayout