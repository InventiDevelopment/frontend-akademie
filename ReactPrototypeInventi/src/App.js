import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Transactions from './pages/Transactions';
import Overview from './pages/Overview';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Transactions} />
          <Route path="/overview" component={Overview} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
