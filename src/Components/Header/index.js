import React from 'react';
import { Header, Toggle } from './styles';
import close from './close.png';
import menu from './menu.png';
import { Link } from 'react-router-dom';

const index = ({ active, setActive }) => {
  return (
    <Header>
      <Link to='/'>Web D</Link>
      <Toggle
        active={active}
        onClick={() => setActive((props) => !props)}
        style={{ backgroundImage: `url('${!active ? menu : close}')` }}
      />
    </Header>
  );
};

export default index;
