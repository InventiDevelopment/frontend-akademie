import React, { Component } from 'react';
import transactions from '../data/transactions';
import connect from 'react-redux/lib/connect/connect';
import { setInitialTransactions } from '../actions';

export default (WrappedComponent) => {
  class InitTransactions extends Component {
    componentDidMount() {
      this.props.setInitialTransactions(transactions)
    }

    render() {
      return (<WrappedComponent {...this.props} />)
    }
  }

  return connect(null, { setInitialTransactions })(InitTransactions);
}
