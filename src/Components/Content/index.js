import React from 'react';
import { Content } from './styles';

const index = ({ active }) => {
  return (
    <Content active={active}>
      <h2>
        Amar Gupta
        <br />
        <span>I'M A FULL-STACK WEB DEVELOPER</span>
      </h2>
    </Content>
  );
};

export default index;
