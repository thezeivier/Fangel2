import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import ExternalLayout from './ExternalLayout'

const ExternalLayoutRoute = ({component: Component, ...rest}) => {
  return(
    <Route exact path={rest.path}>
      <ExternalLayout authState={rest.authState}>
        <Component/>
      </ExternalLayout>
    </Route>
  )
}

export default ExternalLayoutRoute