import React from 'react';
import { Navigation, NavItem } from './styles';
import { list } from '../../Utility/data';
import { Link } from 'react-router-dom';

const index = ({ active }) => {
  return (
    <Navigation>
      {list.map(({ title, url }, index) => (
        <NavItem active={active} index={index + 1}>
          <Link to={url}>{title}</Link>
        </NavItem>
      ))}
    </Navigation>
  );
};

export default index;
