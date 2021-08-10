import React, {Component} from 'react';
import { useRouteMatch, useParams } from 'react-router-dom'
import {Route} from 'react-router-dom'
import InboxLayout from './InboxLayout'

const ChatLayout = ({component: Component, ...rest}) => {
  const match = useRouteMatch("/inbox/t/:idInbox")
  const getRouteInbox = match?.params?.idInbox
  return(
    <Route {...rest} render={props => (
      <InboxLayout authState={rest.authState} userFromDB={rest.userFromDB}>
        <Component {...props} authState={rest.authState} userFromDB={rest.userFromDB} getRouteInbox={getRouteInbox}/>
      </InboxLayout>

    )}/>
  )
}

export default ChatLayout