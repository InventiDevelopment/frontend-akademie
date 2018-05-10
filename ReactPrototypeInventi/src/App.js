import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Transactions from './pages/Transactions';
import Overview from './pages/Overview';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Transactions} />
          <Route path="/overview" component={Overview} />
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
