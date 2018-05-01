import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import DefaultControlBtn from './components/DefaultControlBtn';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <div className="header-controls">
            <DefaultControlBtn>
              <Link to="/">Transactions</Link>
            </DefaultControlBtn>
            <DefaultControlBtn>
              <Link to="/overview">Overview</Link>
            </DefaultControlBtn>
          </div>
            <Route exact path="/" component={TransactionList} />
            <Route path="/overview" component={Overview} />
        </div>
      </Router>
    );
  }
}

export default App;
