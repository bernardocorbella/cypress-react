import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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
        Cypress React App
      </Container>
    );
  }
}
