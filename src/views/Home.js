import React, { Component } from 'react';
import Heading from './components/Header';
import { Container, Divider } from 'semantic-ui-react'

export default class Hallway extends Component {

  render() {
    return (
      <div>
        <Container>
          <Heading
            header="Welcome to the Yera home"
            subheader="Here we can start tracking and logging events"
          />
        </Container>
      </div>
    );
  }
}
