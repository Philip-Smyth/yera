import React, { Component } from 'react';
import { Header, Divider } from 'semantic-ui-react'

export default class Hallway extends Component {

  render() {
    const { header, subheader } = this.props;
    return (
      <div>
        <Header as='h1'>
          {header}
          <Header.Subheader>
            {subheader}
          </Header.Subheader>
        </Header>
        <Divider />
      </div>
    );
  }
}
