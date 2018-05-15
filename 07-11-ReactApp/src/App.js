import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import styled from 'styled-components';
import transaction from './reducers/transaction';

const store = createStore(transaction, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Navigation = styled.div`
  font-size: 0.3rem;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
           <div className="page">
           <Navigation>
            <p>
              <Link to="/">Homepage</Link>
              <Link to="/overview">Overview</Link>
            </p>
            </Navigation>
            <Route exact path="/" component={TransactionList} />
            <Route path="/overview" component={Overview} />
            </div>
        </Router>
        </Provider>
    );
  }
}

export default App;

