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
import pageWithTransactions from './components/pageWithTransactions';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={pageWithTransactions(Transactions)} />
          <Route path="/overview" component={pageWithTransactions(Overview)} />
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
