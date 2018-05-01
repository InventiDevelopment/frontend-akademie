import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import StyledButton from './components/StyledButton';
import HeaderBtn from './components/HeaderBtn';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <div className="header-controls">
            <HeaderBtn>
              <Link to="/">Transactions</Link>
            </HeaderBtn>
            <HeaderBtn>
              <Link to="/overview">Overview</Link>
            </HeaderBtn>
          </div>
            <Route exact path="/" component={TransactionList} />
            <Route path="/overview" component={Overview} />
        </div>
      </Router>
    );
  }
}

export default App;
