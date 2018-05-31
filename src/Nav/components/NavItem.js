import React from 'react';

const NavItem = ({ children, to }) => (
  <a href={to} data-testid={`${children}-Link`}>
    {children}
  </a>
);

export default NavItem;
