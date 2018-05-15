import React, {Component} from 'react';
/*import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';*/

import TransactionList from './components/TransactionList';
import OverviewPage from "./components/overview/OverviewPage";
import HomePage from "./components/homepage/HomePage";

class App extends Component {
  render() {
    return (
      //<div className="page">
      <div className="container-fluid">
        <p>Header here ...</p>

      {/*  <Router>
          <React.Fragment>
            <Route exact path="/" component={HomePage}/>
            <Route path="/overview" component={OverviewPage}/>
          </React.Fragment>
        </Router>*/}

        {/*   <header className="App-header">
          <h1>Welcome to React</h1>
        </header>*/}
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <TransactionList/>


      </div>
    );
  }
}

export default App;
