import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TransactionPage from './pages/TransactionPage';
import Overview from './pages/Overview';
import styled from 'styled-components';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import initTransactions from './hoc/initTransactions';

const MenuRoot = styled.div`
   top: 0;
   width: 100%;
   position: fixed;
   background-color: #F1EADE;
   height: 11vh;
   font-weight: bold;
   align-items: center;
   display: flex;
   text-align: center;
   a {text-decoration: none;
      color: #333333;}
`;


const MenuItem = styled.div`
  width: 100%;
  padding: 12px;
  font-weight: bold;
  border: 0;
  flex: 50%;
  padding: 15px;
  text-transform: uppercase;
  width: 100%;`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <header>
              <MenuRoot>
                <MenuItem><Link to="/">Transactions</Link></MenuItem>
                <MenuItem><Link to="/overview">Overview</Link></MenuItem>
              </MenuRoot>
             </header>
            <Route exact path={"/"} component={ initTransactions(TransactionPage) } />
            <Route path="/overview" component={ initTransactions(Overview) } />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
