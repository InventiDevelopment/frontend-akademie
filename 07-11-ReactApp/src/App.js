import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import styled from 'styled-components';



class App extends Component {
  render() {
    return (
        <Router>
           <div className="page">
            <p>
              <Link to="/">Homepage</Link>
              <Link to="/overview">Overview</Link>
            </p>
            <Route exact path="/" component={TransactionList} />
            <Route path="/overview" component={Overview} />
            </div>
        </Router>
    );
  }
}

export default App;

