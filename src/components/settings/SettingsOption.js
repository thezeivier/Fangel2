import React from 'react';
import {useAuth} from 'reactfire'
import { Link } from 'react-router-dom'
import { Option } from './styles/sMainSettings'

const SettingsOption = ({ svg, name, to}) => {
  const auth = useAuth()
  const SignOut = () => {
    console.log(auth)
    auth.signOut().then(() => {
      console.log("SignOut exitoso")
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
