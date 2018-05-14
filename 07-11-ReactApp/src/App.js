import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import rootReducer from './reducers/rootReducer';

const Navigation = styled.div`
  width: 45%;
  padding: 5pt;
  display: inline-block;
  text-align: center;
  border: 1px solid black;
  margin: 2.5%;
`;

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
        <div className="page">
          <p>
            <Navigation>
              <Link to="/">Transakce</Link>
            </Navigation>
            <Navigation>
              <Link to="/overview">Přehled</Link>
            </Navigation>
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
