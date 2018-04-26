import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import TransactionList from './components/TransactionList';


class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" components={<}>
           <div className="page">
            <header className="App-header">
            <h1>Welcome to React</h1>
            </header>
            <p>
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <TransactionList />
            </div>
        </Router>
          );
  }
}

export default App;
