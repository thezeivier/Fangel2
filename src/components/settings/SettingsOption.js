import React from 'react';
import { Link } from 'react-router-dom'
import { Option } from './styles/sMainSettings'

const SettingsOption = ({ svg, name, to }) => {
  return (
    <Option as={Link} to={to}>
      {svg}
      <p>{name}</p>
    </Option>
  );
}

export default SettingsOption;
