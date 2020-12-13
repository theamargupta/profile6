import React from 'react';
import { List, Item } from './styles';
import { socialMedia } from '../../Utility/data';

const SocialMediaBtn = ({ active }) => {
  return (
    <List>
      {socialMedia.map(({ title, url }, index) => (
        <Item active={active} index={index + 1}>
          <a href={url}>{title}</a>
        </Item>
      ))}
    </List>
  );
};

export default SocialMediaBtn;
