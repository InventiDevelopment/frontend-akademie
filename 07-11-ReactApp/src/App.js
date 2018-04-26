import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';

class App extends Component {
  render() {
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
            <Link to="/">Home</Link>
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
