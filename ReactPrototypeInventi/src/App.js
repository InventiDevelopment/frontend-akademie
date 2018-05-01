import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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
            <Link to="/">To homepage</Link>
            <Link to="/overview">To overview</Link>
          </p>
          <Route exact path="/" component={TransactionList} />
          <Route path="/overview" component={Overview} />
        </div>
      </Router>
    );
  }
}

export default App;
