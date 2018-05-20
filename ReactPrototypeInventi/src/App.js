import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Transactions from './pages/Transactions';
import Overview from './pages/Overview';
import rootReducer from './reducers/rootReducer';
import Balance from './pages/Balance';
import initTransactions from './hoc/initTransactions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={initTransactions(Transactions)} />
          <Route path="/overview" component={initTransactions(Overview)} />
          <Route path="/balance" component={Balance} />
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
