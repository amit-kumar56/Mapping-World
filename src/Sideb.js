import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        aboutus
      </a>
      <a className="menu-item" href="/pizzas">
        menu
      </a>
      <a className="menu-item" href="/desserts">
        Contact
      </a>
    </Menu>
  );
};