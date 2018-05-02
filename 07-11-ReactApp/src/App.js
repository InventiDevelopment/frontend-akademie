import React, { Component } from 'react';
import TransactionList from './components/TransactionList';
import Overview from './components/Overview';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="page">

              {/*<TransactionList/>*/}

              <p>
                  <Link to="/">To homepage</Link>
                  <Link to="/overview">To overview</Link>
              </p>
              <Route path="/" component={TransactionList} />
              <Route path="/overview" component={Overview} />

          </div>
        </Router>
    );
  }
}

export default App;
