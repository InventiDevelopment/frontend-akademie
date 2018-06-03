import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import TransactionList from './pages/TransactionList';
import Overview from './pages/Overview';
import Balance from './pages/OverviewBalance';
import styled from 'styled-components';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import initTransactions from './hoc/transaction';

const Navigation = styled.div`
  font-size: 0.3rem;
  text-align: center;
`

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navigation>
          <Route exact path="/" component={initTransactions(TransactionList)} />
          <Route path="/overview" component={initTransactions(Overview)} />
          <Route path="/balance" component={Balance} />
          </Navigation>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;

