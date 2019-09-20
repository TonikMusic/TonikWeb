import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthModal from 'react-modal';

import Nav from './components/navigation/Nav';
import Landing from './components/landing/Landing';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Nav />
        <div>
          <AuthModal />

          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
