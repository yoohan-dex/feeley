import React from 'react';
import { Icon } from 'antd';
import s from './styles';
const SiderIcon = ({ type }) => {
  return <Icon style={s.icon} type={type} />;
};

export default SiderIcon;
