import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import styled from 'styled-components';

const Navigation = styled.div`
  font-size: 0.3rem;
  text-align: center;
`

class App extends Component {
  render() {
    return (
        <Router>
           <div className="page">
           <Navigation>
            <p>
              <Link to="/">Homepage</Link>
              <Link to="/overview">Overview</Link>
            </p>
            </Navigation>
            <Route exact path="/" component={TransactionList} />
            <Route path="/overview" component={Overview} />
            </div>
        </Router>
    );
  }
}

export default App;

