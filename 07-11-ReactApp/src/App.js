import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import transactions from './reducers/transactions';

const store = createStore(transactions, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="page">
          <header className="App-header">
            <h1>Welcome to React</h1>
          </header>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <Link to="/">To homepage</Link>
            <Link to="/overview">To overview</Link>
          </p>
          <Route exact path="/" component={TransactionList} />
          <Route path="/overview" component={Overview} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
