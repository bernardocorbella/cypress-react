import React from 'react';
import styled from 'styled-components';

import { NavItem } from 'Nav';

const ITEMS = [
  { name: 'Home', to: '/ ' },
  { name: 'About', to: '/about ' },
  { name: 'Login', to: '/login ' }
];

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Nav = () => (
  <Container>{ITEMS.map(i => <NavItem to={i.to}>{i.name}</NavItem>)}</Container>
);

export default Nav;
