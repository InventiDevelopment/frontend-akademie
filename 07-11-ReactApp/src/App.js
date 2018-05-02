import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import './scss/app.css';
import styled from 'styled-components';

const Links = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: center;
`;

const Link = styled.link`
    border: none;
    padding: .3rem .5rem;
    background-color: grey;
    border-radius: 8px;
    text-transform: uppercase;
    margin: 0 .5rem;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <header className="App-header">
            <h1>Peněženka</h1>
          </header>
          <main>
            <div className="select-option">
              <Link className="select-option-button" to="/">Transakce</Link>
              <Link className="select-option-button" to="/overview">Přehled</Link>
            </div>
            <div className="transaction-list">
              <Route exact path="/" component={TransactionList} />
              <Route path="/overview" component={Overview} />
            </div>
          </main>
        </div>
      <div className="page">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Links>
          <Link to="/">To homepage</Link>
          <Link to="/overview">To overview</Link>
        </Links>
          <Route exact path="/" component={TransactionList} />
          <Route path="/overview" component={Overview} />
      </div>
      </Router>
    );
  }
}

export default App;