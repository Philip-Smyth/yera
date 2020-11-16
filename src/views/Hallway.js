import React, { Component } from 'react';
import { Button, Icon, Menu } from 'semantic-ui-react'
import Welcome from './Welcome';
import DailyLog from './DailyLog';
import LogHistory from './LogHistory';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import history from '../utils/history';
import jera from '../images/jera.png'
import firebase from "firebase";

// please add your own config here
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();

function PrivateRoute ({component: Component, authed, ...rest}) {
  console.log(authed);
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/landing', state: {from: props.location}}} />}
    />
  )
}

class Hallway extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.login = () => { firebase.auth().signInWithPopup(provider) }
    this.logout = () => { firebase.auth().signOut()}
  }

  signIn = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.setState({
          user: result.user
      })
    })
  }
  
  signOut = () => {
    firebase.auth().signOut().then((result) => {
      this.setState({
        user: null
      })
    })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => { this.setState({user}) })
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  requireAuth = (nextState, replace, next) => {
    const { user } = this.state;
    if (!user) {
      replace({
        pathname: "/landing",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
  }
  

  render() {
    const { activeItem } = this.state
    let authButton = this.state.user ?
      <Button onClick={this.logout}>Log Out</Button> :
      <Button onClick={this.login}>Log In</Button>
    return (
      <div>
        <Router history={history}>
          <Menu inverted>
            <Menu.Item header
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={NavLink}
              to="/landing"
            >
              <img src={jera} alt="jera rune"/>
              &nbsp;
              Yera
            </Menu.Item>
            <Menu.Item
              name="clients"
              active={activeItem === 'clients'}
              onClick={this.handleItemClick}
              as={NavLink} 
              to="/clients"
            >
              <Icon name="user outline" />
              Clients
            </Menu.Item>
            <Menu.Item
              name="connect"
              active={activeItem === 'connect'}
              onClick={this.handleItemClick}
              as={NavLink} 
              to="/connect"
            >
              <Icon name="clone" />
              Connect to fitbit
            </Menu.Item>
            <Menu.Item
              name="settings"
              active={activeItem === 'settings'}
              onClick={this.handleItemClick}
              as={NavLink} 
              to="/settings"
            >
              <Icon name="settings" />
              Settings
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                {authButton}
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Switch>
            <Route
              exact
              path="/landing"
              component={Welcome}
            />
            <PrivateRoute
              authed={!!this.state.user}
              exact
              path="/clients"
              component={DailyLog}
            />
            <PrivateRoute
              authed={!!this.state.user}
              exact
              path="/history"
              component={LogHistory}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Hallway;
