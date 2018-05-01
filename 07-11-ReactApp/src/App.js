import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import './scss/app.css';

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
      </Router>
    );
  }
}

export default App;
