import React, { Component } from 'react';
import Heading from './components/Header';
import { Container, Card, Header, Divider, Table, Button, Modal, Icon, Form, Select, Label } from 'semantic-ui-react'
import {
  ComposedChart, Line, Area
} from 'recharts';


export default class Clients extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {

    return (
      <div>
        <Container>
          <Heading
            header="Client list"
            subheader="Here we have the clients that we are recording"
          />
        
          
        </Container>
      </div>
    );
  }
}
