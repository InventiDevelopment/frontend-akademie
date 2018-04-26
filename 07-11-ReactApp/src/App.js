import React, { Component } from 'react';
import TransactionList from './components/TransactionList';
import Header from './components/Header';
import FilterButtons from './components/FilterButton';
import AddButton from './components/AddButton';

class App extends Component {
  render() {
    return (
      <div className="page">
          <Header/>
          <FilterButtons/>
        <TransactionList/>
        <AddButton/>
      </div>
    );
  }
}

export default App;
