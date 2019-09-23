
import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
