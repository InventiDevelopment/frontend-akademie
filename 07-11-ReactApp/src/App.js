import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import styled from 'styled-components';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';

const Navigation = styled.div`
  width: 45%;
  padding: 5pt;
  display: inline-block;
  text-align: center;
  border: 1px solid black;
  margin: 2.5%;
`;

class App extends Component {
  render () {
    return (
      <Router>
      <div className="page">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Navigation>
            <Link to="/">Transakce</Link>
          </Navigation>
          <Navigation>
            <Link to="/overview">Přehled</Link>
          </Navigation>
        </p>
        <Route exact path="/" component={TransactionList} />          
        <Route path="/overview" component={Overview} />          
      </div>
      </Router>
    );
  }
}

export default App;
