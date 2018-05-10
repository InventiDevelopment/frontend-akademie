import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import transactions from './reducers/transactions'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'

const store = createStore(transactions, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Transactions}/>
            <Route path="/overview" component={Overview}/>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
