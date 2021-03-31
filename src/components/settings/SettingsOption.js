import React from 'react';
import {useAuth} from 'reactfire'
import { Link, useHistory} from 'react-router-dom'
import { Option } from './styles/sMainSettings'

const SettingsOption = ({ svg, name, to}) => {
  const auth = useAuth()
  let history = useHistory();
  const SignOut = () => {
    auth.signOut().then(() => {
      history.push('/')
      window.location.reload()
    })
  }

  if(to){
    return (
      <Option as={Link} to={to}>
        {svg}
        <p>{name}</p>
      </Option>
    )
  }else{
    return (
      <Option onClick={SignOut}>
        {svg}
        <p>{name}</p>
      </Option>
    )
  }
}

export default SettingsOption;
