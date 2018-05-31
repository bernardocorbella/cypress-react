import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Nav } from 'Nav';

const Container = styled.div`
  display: flex;
`;

export class App extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Cypress React App</title>
        </Helmet>
        <Nav />
        Cypress React App
      </Container>
    );
  }
}
