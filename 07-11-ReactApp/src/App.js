import React, { Component } from 'react';
import TransactionList from './components/TransactionList';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TransactionList/>
      </div>
    );
  }
}

export default App;
