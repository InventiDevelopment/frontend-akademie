import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Transactions from './pages/Transactions';
import Overview from './pages/Overview';
import rootReducer from './reducers/rootReducer';
import Balance from './pages/Balance';
import initTransactions from './hoc/initTransactions';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
